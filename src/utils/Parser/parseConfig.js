import {
  objMapper,
  formatDate,
  regionMapper,
  nestedArrMapper,
  nestedObjMapper,
  attrMapper,
} from "./utils";
import lookup from "./lookup";

const parseMap = {
  // custom
  region: (region) => regionMapper(region, lookup.region),
  //dob: (value) => formatDate(value),
  createdAt: (value) => formatDate(value),

  // services object lookup
  services: (value) =>
    nestedArrMapper(value, {
      communications: (id) => attrMapper(id, lookup.services.communications),
      entrepreneurial: (id) => attrMapper(id, lookup.services.entrepreneurial),
      essential: (id) => attrMapper(id, lookup.services.essential),
      health: (id) => attrMapper(id, lookup.services.health),
      medical: (id) => attrMapper(id, lookup.services.medical),
      nonmedical: (id) => attrMapper(id, lookup.services.nonmedical),
    }),

  // organization
  organization: (value) =>
    nestedObjMapper(value, {
      cat: (id) => objMapper(id, lookup.organization.type),
    }),

  individual: (value) =>
    nestedObjMapper(value, {
      qualification: (id) => objMapper(id, lookup.individual.qualification),
      profession: (id) => objMapper(id, lookup.individual.profession),
      gender: (id) => objMapper(id, lookup.individual.gender),
    }),

  // map object lookup
  mode: (id) => objMapper(id, lookup.mode),
  availability: (id) => objMapper(id, lookup.availability),
};

function getParseFn(id) {
  if (id in parseMap) {
    return parseMap[id];
  }
  return (value) => value;
}

export default getParseFn;
