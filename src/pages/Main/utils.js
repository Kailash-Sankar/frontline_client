import { SPTR } from "@utils/constants";

// combine saved customer features with product features
export const combineFeatures = (saved, base) => {
  const tempMap = {};
  saved.forEach((s) => {
    tempMap[s.id] = 1;
  });
  const features = saved;
  features.push(...base.filter((b) => (tempMap[b.id] ? false : true)));
  return features;
};

export function createMap(data) {
  const parsed = {};
  data.forEach((row) => {
    parsed[row.id] = row;
  });
  return parsed;
}

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

export function formatSearchQuery({ mode, region, service }) {
  const params = {
    mode: mode || "all",
    region: region || "all",
    ...formatService(service)
  };
  return params;
}
