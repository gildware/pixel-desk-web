import { apiClient } from "./apiClient";

export const getMe = () => {
  return apiClient("/users/me");
};
