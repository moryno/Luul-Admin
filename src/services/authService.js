import { LOGIN_API } from "./api";
import { api } from "./request";

export const authService = {
  login: async (user) => await api.post(LOGIN_API, user),
};
