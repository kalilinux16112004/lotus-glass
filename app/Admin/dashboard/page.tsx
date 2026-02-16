"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Database, LogOut, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  getStoredProjects,
  saveStoredProjects,
  type AdminProject,
} from "@/lib/admin-projects";
import {
  getStoredContactSubmissions,
  saveStoredContactSubmissions,
  type ContactSubmission,
} from "@/lib/contact-submissions";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"projects" | "submissions">("projects");
  const [adminEmail, setAdminEmail] = useState("admin@gmail.com");
  const [projects, setProjects] = useState<AdminProject[]>([]);
  const [contactSubmissions, setContactSubmissions] = useState<ContactSubmission[]>([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [newProject, setNewProject] = useState({
    title: "",
    location: "",
    type: "",
    image: "",
  });
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [pendingDelete, setPendingDelete] = useState<{
    id: string;
    type: "project" | "submission";
    title: string;
  } | null>(null);

  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem("lotus-admin-auth") === "true";
    if (!isAuthenticated) {
      router.replace("/Admin");
      return;
    }

    const storedEmail = sessionStorage.getItem("lotus-admin-email");
    if (storedEmail) {
      setAdminEmail(storedEmail);
    }

    setProjects(getStoredProjects());
    setContactSubmissions(getStoredContactSubmissions());
  }, [router]);

  const handleSignOut = () => {
    sessionStorage.removeItem("lotus-admin-auth");
    sessionStorage.removeItem("lotus-admin-email");
    router.push("/Admin");
  };

  const handleProjectFieldChange = (field: keyof typeof newProject, value: string) => {
    setNewProject((previous) => ({ ...previous, [field]: value }));
  };

  const handleAddProject = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const project: AdminProject = {
      id: crypto.randomUUID(),
      title: newProject.title.trim(),
      location: newProject.location.trim(),
      type: newProject.type.trim(),
      image: newProject.image.trim() || "/images/project-1.jpg",
    };

    const updatedProjects = [project, ...projects];
    setProjects(updatedProjects);
    saveStoredProjects(updatedProjects);

    setNewProject({ title: "", location: "", type: "", image: "" });
    setShowProjectForm(false);
  };

  const handleDeleteProject = (projectId: string) => {
    const updatedProjects = projects.filter((project) => project.id !== projectId);
    setProjects(updatedProjects);
    saveStoredProjects(updatedProjects);
  };

  const handleDeleteSubmission = (submissionId: string) => {
    const updatedSubmissions = contactSubmissions.filter(
      (submission) => submission.id !== submissionId
    );
    setContactSubmissions(updatedSubmissions);
    saveStoredContactSubmissions(updatedSubmissions);
  };

  const openDeleteDialog = (
    type: "project" | "submission",
    id: string,
    title: string
  ) => {
    setPendingDelete({ type, id, title });
    setDeleteDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    if (!pendingDelete) {
      return;
    }

    if (pendingDelete.type === "project") {
      handleDeleteProject(pendingDelete.id);
    } else {
      handleDeleteSubmission(pendingDelete.id);
    }

    setDeleteDialogOpen(false);
    setPendingDelete(null);
  };

  const formatSubmissionDate = (isoDate: string) => {
    const date = new Date(isoDate);
    if (Number.isNaN(date.getTime())) {
      return isoDate;
    }

    return date.toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <main className="min-h-screen bg-[#0B1D3A] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="border-b border-white/10 p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h1 className="font-serif text-3xl text-white">Admin Dashboard</h1>
                <p className="mt-1 text-base text-white/70">{adminEmail}</p>
              </div>
              <Button
                type="button"
                variant="ghost"
                onClick={handleSignOut}
                className="text-white hover:bg-white/10 hover:text-white"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="mb-2 flex items-center justify-between text-white/80">
                  <span className="inline-flex items-center gap-2">
                    <Database className="h-4 w-4" />
                    Projects
                  </span>
                  <span>{projects.length} / 100</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-[#C5A55A]"
                    style={{ width: `${Math.min(projects.length, 100)}%` }}
                  />
                </div>
              </div>

              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="mb-2 flex items-center justify-between text-white/80">
                  <span className="inline-flex items-center gap-2">
                    <Database className="h-4 w-4" />
                    Storage Used
                  </span>
                  <span>0.48 MB / 1000 MB</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div className="h-full w-[1%] rounded-full bg-[#C5A55A]" />
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-3 border-b border-white/10">
              <button
                type="button"
                onClick={() => setActiveTab("projects")}
                className={`px-4 py-3 text-lg transition-colors ${
                  activeTab === "projects"
                    ? "border-b-2 border-[#C5A55A] text-white"
                    : "text-white/60 hover:text-white/85"
                }`}
              >
                Projects ({projects.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("submissions")}
                className={`px-4 py-3 text-lg transition-colors ${
                  activeTab === "submissions"
                    ? "border-b-2 border-[#C5A55A] text-white"
                    : "text-white/60 hover:text-white/85"
                }`}
              >
                Contact Submissions ({contactSubmissions.length})
              </button>
            </div>

            {activeTab === "projects" ? (
              <section className="pt-8">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <h2 className="font-serif text-4xl text-white">Manage Projects</h2>
                  <Button
                    onClick={() => setShowProjectForm((previous) => !previous)}
                    className="bg-[#C5A55A] text-[#0B1D3A] hover:bg-[#D4B36A]"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Add Project
                  </Button>
                </div>

                {showProjectForm ? (
                  <form
                    onSubmit={handleAddProject}
                    className="mb-6 grid gap-4 rounded-xl border border-white/10 bg-white/5 p-4 sm:grid-cols-2 sm:p-6"
                  >
                    <div className="space-y-2">
                      <Label htmlFor="project-title" className="text-white/90">Project Title</Label>
                      <Input
                        id="project-title"
                        required
                        value={newProject.title}
                        onChange={(event) => handleProjectFieldChange("title", event.target.value)}
                        className="border-white/15 bg-white/5 text-white placeholder:text-white/35"
                        placeholder="Project name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="project-location" className="text-white/90">Location</Label>
                      <Input
                        id="project-location"
                        required
                        value={newProject.location}
                        onChange={(event) => handleProjectFieldChange("location", event.target.value)}
                        className="border-white/15 bg-white/5 text-white placeholder:text-white/35"
                        placeholder="City, State"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="project-type" className="text-white/90">Project Type</Label>
                      <Input
                        id="project-type"
                        required
                        value={newProject.type}
                        onChange={(event) => handleProjectFieldChange("type", event.target.value)}
                        className="border-white/15 bg-white/5 text-white placeholder:text-white/35"
                        placeholder="Curtain Wall / Glazing"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="project-image" className="text-white/90">Image URL (optional)</Label>
                      <Input
                        id="project-image"
                        value={newProject.image}
                        onChange={(event) => handleProjectFieldChange("image", event.target.value)}
                        className="border-white/15 bg-white/5 text-white placeholder:text-white/35"
                        placeholder="/images/project-5.jpg"
                      />
                    </div>

                    <div className="sm:col-span-2 flex items-center gap-3">
                      <Button type="submit" className="bg-[#C5A55A] text-[#0B1D3A] hover:bg-[#D4B36A]">
                        Save Project
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setShowProjectForm(false)}
                        className="border-white/20 bg-transparent text-white hover:bg-white/10"
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                ) : null}

                {projects.length === 0 ? (
                  <div className="rounded-xl border border-white/10 bg-white/5 p-12 text-center">
                    <p className="mb-5 text-3xl text-white/70">No projects yet</p>
                    <Button
                      onClick={() => setShowProjectForm(true)}
                      className="bg-[#C5A55A] text-[#0B1D3A] hover:bg-[#D4B36A]"
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Add Your First Project
                    </Button>
                  </div>
                ) : (
                  <div className="grid gap-4 sm:grid-cols-2">
                    {projects.map((project) => (
                      <article
                        key={project.id}
                        className="rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5"
                      >
                        <div className="mb-4 flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                            <p className="mt-1 text-sm text-white/70">{project.location}</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => openDeleteDialog("project", project.id, project.title)}
                            className="text-white/60 transition hover:text-white"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        <p className="text-sm font-medium text-[#C5A55A]">{project.type}</p>
                        <p className="mt-2 truncate text-xs text-white/55">{project.image}</p>
                      </article>
                    ))}
                  </div>
                )}
              </section>
            ) : (
              <section className="pt-8">
                <h2 className="mb-6 font-serif text-4xl text-white">Contact Form Submissions</h2>

                {contactSubmissions.length === 0 ? (
                  <div className="rounded-xl border border-white/10 bg-white/5 p-12 text-center">
                    <p className="text-2xl text-white/70">No contact submissions yet</p>
                  </div>
                ) : null}

                {contactSubmissions.map((submission) => (
                  <article
                    key={submission.id}
                    className="mb-4 rounded-xl border border-white/10 bg-white/5 p-6 sm:p-8"
                  >
                    <div className="mb-6 flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-3xl font-semibold text-white">{submission.name}</h3>
                        <p className="mt-1 text-xl text-white/70">{submission.service || "General enquiry"}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          openDeleteDialog("submission", submission.id, submission.name)
                        }
                        className="text-white/60 transition hover:text-white"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <p className="mb-1 text-xs tracking-[0.25em] text-white/50 uppercase">Email</p>
                        <p className="text-2xl text-white">{submission.email}</p>
                      </div>
                      <div>
                        <p className="mb-1 text-xs tracking-[0.25em] text-white/50 uppercase">Phone</p>
                        <p className="text-2xl text-white">{submission.phone}</p>
                      </div>
                      <div>
                        <p className="mb-1 text-xs tracking-[0.25em] text-white/50 uppercase">Service Required</p>
                        <p className="text-2xl text-white">{submission.service || "Not specified"}</p>
                      </div>
                      <div>
                        <p className="mb-1 text-xs tracking-[0.25em] text-white/50 uppercase">Submitted</p>
                        <p className="text-2xl text-white">{formatSubmissionDate(submission.submittedAt)}</p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <p className="mb-1 text-xs tracking-[0.25em] text-white/50 uppercase">Message</p>
                      <p className="text-lg text-white/85">{submission.message}</p>
                    </div>
                  </article>
                ))}
              </section>
            )}
          </div>
        </div>
      </div>

      <AlertDialog
        open={deleteDialogOpen}
        onOpenChange={(open) => {
          setDeleteDialogOpen(open);
          if (!open) {
            setPendingDelete(null);
          }
        }}
      >
        <AlertDialogContent className="border-white/10 bg-[#10274A] text-white">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-white">Confirm Delete</AlertDialogTitle>
            <AlertDialogDescription className="text-white/70">
              Are you sure you want to delete this {pendingDelete?.type === "project" ? "project" : "contact submission"}?
            </AlertDialogDescription>
            <p className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/85">
              {pendingDelete?.title || "Selected item"}
            </p>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleConfirmDelete}
              className="bg-[#C5A55A] text-[#0B1D3A] hover:bg-[#D4B36A]"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </main>
  );
}
