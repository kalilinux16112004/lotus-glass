export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  submittedAt: string;
}

const STORAGE_KEY = "lotus-contact-submissions";

export const getStoredContactSubmissions = (): ContactSubmission[] => {
  if (typeof window === "undefined") {
    return [];
  }

  const rawData = window.localStorage.getItem(STORAGE_KEY);
  if (!rawData) {
    return [];
  }

  try {
    const parsedData = JSON.parse(rawData) as ContactSubmission[];
    if (!Array.isArray(parsedData)) {
      return [];
    }

    return parsedData.filter(
      (submission) =>
        Boolean(submission?.id) &&
        Boolean(submission?.name) &&
        Boolean(submission?.email) &&
        Boolean(submission?.message)
    );
  } catch {
    return [];
  }
};

export const saveStoredContactSubmissions = (submissions: ContactSubmission[]) => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(submissions));
};

export const addContactSubmission = (
  submissionInput: Omit<ContactSubmission, "id" | "submittedAt">
) => {
  const currentSubmissions = getStoredContactSubmissions();

  const newSubmission: ContactSubmission = {
    id: crypto.randomUUID(),
    submittedAt: new Date().toISOString(),
    ...submissionInput,
  };

  const updatedSubmissions = [newSubmission, ...currentSubmissions];
  saveStoredContactSubmissions(updatedSubmissions);

  return newSubmission;
};
