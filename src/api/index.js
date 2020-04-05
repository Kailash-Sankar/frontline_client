import axios from "axios";
import { authStorage } from "@utils/LocalStorage";
export const serverUrl = "/api"; //"http://localhost:3080/api";

const server = axios.create({
  baseURL: "/api/",
});

function authTokenHandler(config) {
  if (config) {
    const authToken = authStorage.get();
    if (authToken) {
      config.headers["Authorization"] = `Bearer ${authToken}`;
    }
  }
  return config;
}

server.interceptors.request.use((config) => authTokenHandler(config));

server.interceptors.response.use(
  function (response) {
    // ignore 2xx response
    return response;
  },
  function (error) {
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
  const res = await server.get(`/status`);
  return res.data.data || [];
}

async function search(params) {
  const res = await server.post(`/search/`, params);
  return res.data.data || [];
}

async function searchAppeals(params) {
  const res = await server.post(`/appeal/search/`, params);
  return res.data.data || [];
}

async function saveForm(formData) {
  const res = await server.post(`/volunteer`, formData);
  return res;
}

async function saveAppealForm(formData) {
  const res = await server.post(`/appeal`, formData);
  return res;
}

async function login(formData) {
  const res = await server.post(`/auth/login`, formData);
  return res;
}

async function authCheck() {
  const res = await server.post(`/auth/check`);
  return res;
}

async function getHomePageData(url) {
  const res = await server.get(url);
  return res.data.data || [];
}

export default {
  search,
  saveForm,
  getVolunteerCount,
  login,
  authCheck,
  getHomePageData,
  saveAppealForm,
  searchAppeals,
};
