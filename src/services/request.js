import { getAccessToken, notify, successResponseContent } from "@/helpers";
import axios from "axios";
import { LOGIN_API } from "./api";

const request = axios.create({
  baseURL: "",
});

const handleSuccessResponse = (response) => {
  const {
    status,
    config: { url, method },
  } = response;

  if (status === 200 || status === 201) {
    if (
      successResponseContent[url] &&
      (method === "post" || method === "put")
    ) {
      notify({
        success: true,
        ...successResponseContent[url],
      });
    }
  }

  return response;
};

const handleErrorResponse = (error) => {
  const {
    status,
    data,
    config: { url },
  } = error.response;
  if (status >= 400) {
    let description =
      data?.errors?.error ||
      data?.error?.message ||
      data?.error ||
      data?.message ||
      error?.message ||
      "";
    const userNotFound = status === 404 && url === LOGIN_API;
    if (status === 401) {
      // store.dispatch({ type: LOGOUT });
      description = "Session has expired. Please log in again.";
    }
    if (status === 403) {
      description = "You are not authorized to perform this action.";
    }
    if (!userNotFound) {
      notify({
        message: "Error",
        description: description,
        error: true,
      });
    }
  }
  return Promise.reject(error);
};

const appendPayloadToRequestData = (request) => {
  if (request.method === "post") {
    request.data = {
      ...(request.data || {}),
    };
  }
};

request.interceptors.request.use((request) => {
  request.headers["Content-Type"] = "application/json";
  const token = getAccessToken();
  if (token) {
    request.headers["Authorization"] = `Bearer ${token}`;
  }

  appendPayloadToRequestData(request);
  return request;
});

request.interceptors.response.use(handleSuccessResponse, handleErrorResponse);

export const api = {
  get: (url, config = {}) => request.get(url, config),
  post: (url, data = {}, config = {}) => request.post(url, data, config),
  put: (url, data = {}, config = {}) => request.put(url, data, config),
  delete: (url, config = {}) => request.delete(url, config),
  uploadFile: (url, file, onUploadProgress) => {
    const formData = new FormData();
    formData.append("file", file);
    return request.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  },
};

export default request;
