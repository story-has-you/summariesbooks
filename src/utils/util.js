import { fetchAPI } from "./api";
export const handleError = (data, error) => {
  if (error) {
    throw error;
  }
  return data;
};

export const getCurrentUser = async () => {
  const { data, ok } = await fetchAPI("/api/auth/user");
  if (ok) {
    return data;
  }
  return null;
};
