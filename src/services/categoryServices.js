import { CATEGORY_API } from "./api";
import { api } from "./request";

export const cartegoryService = {
  getCategories: async (params = {}) => {
    return api.get(CATEGORY_API, { params });
  },
  createCategory: async (categoryData) => {
    return api.post(CATEGORY_API, categoryData);
  },
};
