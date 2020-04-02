import { objMapper, formatDate, regionMapper, arrMapper } from "./utils";
import lookup from "./lookup";

const parseMap = {
  // custom
  region: (region) => regionMapper(region, lookup.region),
  //dob: (value) => formatDate(value),
  createdAt: (value) => formatDate(value),

  // services object lookup
  service_communications: (id) => arrMapper(id, lookup.service_communications),
  service_entrepreneurial: (id) =>
    arrMapper(id, lookup.service_entrepreneurial),
  service_essential: (id) => arrMapper(id, lookup.service_essential),
  service_health: (id) => arrMapper(id, lookup.service_health),

  // map object lookup
  mode: (id) => objMapper(id, lookup.mode),
  gender: (id) => objMapper(id, lookup.gender),
  availability: (id) => objMapper(id, lookup.availability),
  qualification: (id) => objMapper(id, lookup.qualification),
  profession: (id) => objMapper(id, lookup.profession),
  org_type: (id) => objMapper(id, lookup.org_type)
};

function getParseFn(id) {
  if (id in parseMap) {
    return parseMap[id];
  }
  return (value) => value;
}

export default getParseFn;
