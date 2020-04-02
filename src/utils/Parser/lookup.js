import options from "@utils/Options";
import { mapFactory } from "./utils";
const { other, regions, services, domain } = options;

export const labelMap = mapFactory("value");
export const idMap = mapFactory("id");

// create regions lookup
const regionsMap = {};
regions.forEach((r) => {
  regionsMap[r.value] = {
    label: r.label,
    children: labelMap(r.children)
  };
});

const lookup = {
  region: regionsMap,
  mode: idMap(other.modeOptions),
  gender: idMap(other.genderOptions),
  availability: idMap(domain.availabilityOptions),
  qualification: idMap(domain.qualificationOptions),
  profession: idMap(domain.professionOptions),
  org_type: idMap(other.orgTypeOptions),
  service_communications: services.communicationOptions,
  service_entrepreneurial: services.entrepreneurialOptions,
  service_essential: services.essentialOptions,
  service_health: services.healthOptions
};

export default lookup;
