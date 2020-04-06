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

// for nested objects
export const nestedArrMapper = (data = [], lookupFnMap) => {
  const res = {};
  data.forEach((d) => {
    if (d.id in lookupFnMap) {
      res[d.id] = lookupFnMap[d.id](d.values);
    } else {
      res[d.id] = d.values;
    }
  });
  return res;
};

export const nestedObjMapper = (data = {}, lookupFnMap) => {
  const res = {};
  Object.keys(data).forEach((k) => {
    const val = data[k];
    if (k in lookupFnMap) {
      res[k] = lookupFnMap[k](val);
    } else {
      res[k] = val;
    }
  });
  return res;
};

// attribute mapper
export const attrMapper = (arr = [], lookup) => {
  const res = [];
  arr.forEach((obj) => {
    const id = obj.id;
    if (id in lookup) {
      res.push({
        id, // meta
        label: lookup[id].value,
        attributes: obj.attributes,
      });
    }
  });
  return res.length > 0 ? res : NA;
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
