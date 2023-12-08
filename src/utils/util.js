import { request } from "./api";

export const handleError = (data, error) => {
  if (error) {
    throw error;
  }
  return data;
};

export const getCurrentUser = async () => {
  try {
    const { data, ok } = await request("/api/auth/user");
    if (ok) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
}
