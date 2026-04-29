import { PRODUCT_API } from "./api";
import { api } from "./request";

export const productService = {
  getProducts: async (params = {}) => {
    return api.get(PRODUCT_API, { params });
  },

  getProductById: async (id) => {
    return api.get(`${PRODUCT_API}/${id}`);
  },

  createProduct: async (productData) => {
    return api.post(PRODUCT_API, productData);
  },

  updateProduct: async (id, productData) => {
    return api.put(`${PRODUCT_API}/${id}`, productData);
  },

  deleteProduct: async (id) => {
    return api.delete(`${PRODUCT_API}/${id}`);
  },
};
