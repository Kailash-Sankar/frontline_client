export const serverUrl = "http://localhost:3000/api";

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
