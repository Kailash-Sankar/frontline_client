import axios from "axios";
import { authStorage } from "@utils/LocalStorage";
export const serverUrl = "http://localhost:3000/api";

// TODO: add try catch

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

async function getVolunteerCount() {
  const res = await axios.get(`/status`);
  return res.data.data || [];
}

async function search({ mode, region }) {
  const params = {
    mode: mode || "all",
    region: region || "all"
  };
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
