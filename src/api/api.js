import axios from "axios";

export const REQUEST_METHODS = {
  GET: "get",
  POST: "post",
  PUT: "put",
  PATCH: "patch",
  DELETE: "delete",
};

const defaultOptions = {
  baseUrl: "http://localhost:8000/api",
  headers: () => ({ "Content-Type": "application/json" }),
  error: {
    meta: {
      code: 503,
      status: "error",
      message: "Something went wrong. Please check your internet connection or contact our support.",
    },
    data: null,
  },
};

const isFileExists = (inputValues = {}) => {
  const isContainsFile = (value) => {
    const isArray = Array.isArray(value);
    const isFile = value instanceof File;
    const isObject = typeof value === "object" && !isArray && value !== null && !isFile;

    if (isFile) return true;
    if (isArray || isObject) {
      if (isObject) value = Object.values(value);
      for (let index in value) {
        if (isContainsFile(value?.[index])) return true;
      }
    }

    return false;
  };

  const values = Object.values(inputValues);
  for (let index in values) {
    if (isContainsFile(values?.[index])) return true;
  }

  return false;
};

const getContentType = (request) => ({
  "Content-Type": isFileExists(request) ? "multipart/form-data" : "application/json",
});

const httpRequest = ({ url, method, request }) => {
  console.log("REQUEST", url, method);
  return new Promise((resolve, reject) => {
    axios({
      url,
      method,
      headers: { ...defaultOptions.headers(), ...getContentType(request) },
      params: method === REQUEST_METHODS.GET ? request : undefined,
      data: method !== REQUEST_METHODS.GET ? request : undefined,
    }).then(
      (response) => resolve(response),
      (error) => {
        reject(error?.response?.data ?? defaultOptions.error);
        console.log(error?.response?.data ?? defaultOptions.error);
      }
    );
  });
};

const externalHttpRequest = (method, url, request) => httpRequest({ url, method, request });

const internalHttpRequest = (method, url, request) =>
  httpRequest({
    url: `${defaultOptions.baseUrl}${url}`,
    method,
    request,
  });

const apiService = {
  get: (...args) => internalHttpRequest(REQUEST_METHODS.GET, ...args),
  post: (...args) => internalHttpRequest(REQUEST_METHODS.POST, ...args),
  put: (...args) => internalHttpRequest(REQUEST_METHODS.PUT, ...args),
  patch: (...args) => internalHttpRequest(REQUEST_METHODS.PATCH, ...args),
  delete: (...args) => internalHttpRequest(REQUEST_METHODS.DELETE, ...args),
  externalGet: (...args) => externalHttpRequest(REQUEST_METHODS.GET, ...args),
  externalPost: (...args) => externalHttpRequest(REQUEST_METHODS.POST, ...args),
  externalPut: (...args) => externalHttpRequest(REQUEST_METHODS.PUT, ...args),
  externalPatch: (...args) => externalHttpRequest(REQUEST_METHODS.PATCH, ...args),
  externalDelete: (...args) => externalHttpRequest(REQUEST_METHODS.DELETE, ...args),
};

export default apiService;
