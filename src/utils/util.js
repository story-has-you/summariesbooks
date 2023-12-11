import Cookies from "js-cookie";
import { request } from "./api";

export const handleError = (data, error) => {
  if (error) {
    throw error;
  }
  return data;
};

export const getCurrentUser = async () => {
  try {
    const user = Cookies.get("current_user");
    if (user) {
      return JSON.parse(user)
    }
    const { data, ok } = await request("/api/auth/user");
    if (ok) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
}


export const now = () => {
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};
