export interface AdminProject {
  id: string;
  title: string;
  location: string;
  type: string;
  image: string;
}

const STORAGE_KEY = "lotus-admin-projects";

export const DEFAULT_PROJECTS: AdminProject[] = [
  {
    id: "default-1",
    image: "/images/project-1.jpg",
    title: "Horizon Corporate Tower",
    location: "Mumbai, Maharashtra",
    type: "Curtain Wall System",
  },
  {
    id: "default-2",
    image: "/images/project-2.jpg",
    title: "Galaxy Mall & Convention Centre",
    location: "Bangalore, Karnataka",
    type: "ACP Cladding & Glazing",
  },
  {
    id: "default-3",
    image: "/images/project-3.jpg",
    title: "MedLife Super Speciality Hospital",
    location: "Delhi NCR",
    type: "Structural Glazing",
  },
  {
    id: "default-4",
    image: "/images/project-4.jpg",
    title: "The Grand Heritage Hotel",
    location: "Jaipur, Rajasthan",
    type: "Spider Glazing & Canopy",
  },
];

export const getStoredProjects = (): AdminProject[] => {
  if (typeof window === "undefined") {
    return [];
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return [];
  }

  try {
    const parsed = JSON.parse(raw) as AdminProject[];
    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.filter(
      (project) =>
        Boolean(project?.id) &&
        Boolean(project?.title) &&
        Boolean(project?.location) &&
        Boolean(project?.type)
    );
  } catch {
    return [];
  }
};

export const saveStoredProjects = (projects: AdminProject[]) => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
};
