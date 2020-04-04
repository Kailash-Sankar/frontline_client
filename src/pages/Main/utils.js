import { SPTR } from "@utils/constants";

// create id based map
export function createMap(data) {
  const parsed = {};
  data.forEach((row) => {
    parsed[row.id] = row;
  });
  return parsed;
}

// format service queries
const formatService = (data = []) => {
  const res = {};
  data.forEach((r) => {
    const [service, sub] = r.split(SPTR);
    if (service in res) {
      res[service].push(sub);
    } else {
      res[service] = [sub];
    }
  });
  return res;
};

// format search queries
export function formatSearchQuery({ mode, region, service }) {
  const params = {
    mode: mode || "all",
    region: region || "all",
    ...formatService(service),
  };
  return params;
}

// format login form
export const formatLogin = ({ email = "", password = "" }) => {
  const res = {
    email: email,
    password: btoa(password),
  };
  return res;
};
