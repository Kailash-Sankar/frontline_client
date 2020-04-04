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
    children: labelMap(r.children),
  };
});

const lookup = {
  region: regionsMap,
  mode: idMap(other.modeOptions),
  availability: idMap(domain.availabilityOptions),
  individual: {
    gender: idMap(other.genderOptions),
    qualification: idMap(domain.qualificationOptions),
    profession: idMap(domain.professionOptions),
  },
  organization: {
    type: idMap(other.orgTypeOptions),
  },
  services: {
    communications: services.communicationOptions,
    entrepreneurial: services.entrepreneurialOptions,
    essential: services.essentialOptions,
    health: services.healthOptions,
    medical: services.medicalOptions,
    nonmedical: services.nonMedicalOptions,
  },
};

export default lookup;
