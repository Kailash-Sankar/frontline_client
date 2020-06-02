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

const formatDateRange = (dateRange) => {
  let res = {};
  if (dateRange && dateRange[0] && dateRange[1]) {
    try {
      const dates = [];
      dates.push(dateRange[0].set({ hour: "00", minute: "00", second: "00" }));
      dates.push(dateRange[1].set({ hour: "23", minute: "59", second: "59" }));
      res["createdAt"] = dates;
    } catch (err) {
      res = {};
    }
  }
  return res;
};

// format search queries
export function formatSearchQuery({
  mode,
  region,
  service,
  dateRange,
  status,
}) {
  let filteredRegion;
  if (region instanceof Array && region.length > 1) {
    filteredRegion = region.map((x) => x);
    filteredRegion.shift();
  } else filteredRegion = region;
  const params = {
    mode: mode || "all",
    region: filteredRegion || "all",
    ...formatService(service),
    ...formatDateRange(dateRange),
  };
  if (status) {
    params.status = status;
  }
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
