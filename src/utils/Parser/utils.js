import { NA } from "@utils/constants";

// object lookup
export const objMapper = (id, lookup) => {
  return id in lookup ? lookup[id].value : NA;
};

// for array, lookup all values and return array
export const arrMapper = (arr, lookup) => {
  const res = [];
  arr.forEach((id) => {
    if (id in lookup) {
      res.push(lookup[id].value);
    }
  });
  return res.length > 0 ? res.join(", ") : NA;
};

// format date
export const formatDate = (dateString) =>
  new Date(dateString).toLocaleString("en-GB");

export const mapFactory = (key) => {
  return (arr) => {
    const res = {};
    arr.forEach((r) => {
      res[r[key]] = r;
    });
    return res;
  };
};

// region mapper
export const regionMapper = ([stateCode, districtCode], regions) => {
  if (stateCode in regions) {
    try {
      const state = regions[stateCode].label;
      const district = regions[stateCode].children[districtCode].label;
      return `${state}, ${district}`;
    } catch (err) {
      return NA;
    }
  }
};
