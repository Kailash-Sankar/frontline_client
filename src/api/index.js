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
    console.log("Interceptor err", error);
    if (error && error.response && error.response.status == 401) {
      // clear auth token
      authStorage.remove();
      //location.reload();
    }
    return Promise.reject(error);
  }
);

// TODO: pending update
async function getVolunteerCount() {
  const res = await server.get(`/status`);
  return res.data.data || [];
}

// -- volunteer and kind --
async function saveForm(formData) {
  const res = await server.post(`/volunteer`, formData);
  return res;
}

async function saveNgoForm(formData) {
  const res = await server.post(`/ngo`, formData);
  return res;
}

async function search(params) {
  const res = await server.post(`/search/`, params);
  return res.data.data || [];
}

async function exportKind(params) {
  const res = await server.post(`/export/`, params);
  return res.data.data || [];
}

//  -- appeals --
async function saveAppealForm(formData) {
  const res = await server.post(`/appeal`, formData);
  return res;
}

async function searchAppeals(params) {
  const res = await server.post(`/appeal/search/`, params);
  return res.data.data || [];
}

async function fetchAppeals() {
  const res = await server.get(`/appeal/recent`);
  return res.data.data || [];
}

async function exportAppeals(params) {
  const res = await server.post(`/appeal/export/`, params);
  return res.data.data || [];
}

// -- requests --
async function saveHelpRequest(formData) {
  const res = await server.post("/request", formData);
  return res || null;
}

async function searchRequests(params) {
  const res = await server.post(`/request/search`, params);
  return res.data.data || [];
}

async function exportRequests(params) {
  const res = await server.post(`/request/export/`, params);
  return res.data.data || [];
}

// -- auth
async function login(formData) {
  const res = await server.post(`/auth/login`, formData);
  return res;
}

async function authCheck() {
  const res = await server.post(`/auth/check`);
  return res;
}

// -- home page --
async function getHomePageData(url) {
  const res = await server.get(url);
  return res.data.data || [];
}

// Update status
async function updateStatus(url, formData) {
  const res = await server.put(url, formData);
  return res || null;
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
  fetchAppeals,
  saveHelpRequest,
  searchRequests,
  exportAppeals,
  exportKind,
  exportRequests,
  updateStatus,
  saveNgoForm,
};
