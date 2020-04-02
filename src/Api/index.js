import axios from "axios";
import { authStorage } from "@utils/LocalStorage";
export const serverUrl = "http://localhost:3080/api";

axios.defaults.baseURL = serverUrl;

function authTokenHandler(config) {
  if (config) {
    const authToken = authStorage.get();
    if (authToken) {
      config.headers["Authorization"] = `Bearer ${authToken}`;
    }
  }
  return config;
}

axios.interceptors.request.use((config) => authTokenHandler(config));

axios.interceptors.response.use(
  function(response) {
    // ignore 2xx response
    return response;
  },
  function(error) {
    console.log(error.response);
    if (error.response.status == 401) {
      // clear auth token
      authStorage.remove();
      //location.reload();
    }
    return Promise.reject(error);
  }
);

async function getVolunteerCount() {
  const res = await axios.get(`/status`);
  return res.data.data || [];
}

async function search(params) {
  const res = await axios.post(`/search/`, params);
  return res.data.data || [];
}

async function saveForm(formData) {
  const res = await axios.post(`/volunteer`, formData);
  return res;
}

async function login(formData) {
  const res = await axios.post(`/auth/login`, formData);
  return res;
}

async function authCheck() {
  const res = await axios.post(`/auth/check`);
  return res;
}

export default {
  search,
  saveForm,
  getVolunteerCount,
  login,
  authCheck
};
