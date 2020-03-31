import axios from "axios";
export const serverUrl = "http://localhost:3000/api";

// TODO: add try catch

async function getVolunteerCount() {
  const res = await axios.get(`${serverUrl}/meta/count`);
  return res.data.data || [];
}

async function search({ mode, region }) {
  const params = {
    mode: mode || "all",
    region: region || "all"
  };
  const res = await axios.post(`${serverUrl}/search/`, params);
  return res.data.data || [];
}

async function saveForm(formData) {
  const res = await axios.post(`${serverUrl}/ff`, formData);
  return res;
}

export default {
  search,
  saveForm,
  getVolunteerCount
};
