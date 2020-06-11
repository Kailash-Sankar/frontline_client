import formatService from "./formatService";
import { formatNgoDistrict, formatBbmp } from "./formatAreas";

// format volunteer form data
export const formatter = (formData) => {
  if ("services" in formData && formData.services) {
    formData.services = formatService(formData.services);
  }
  if ("region" in formData && formData.region) {
    formData.region = formatNgoDistrict(formData.region);
  }
  if ("bbmp" in formData && formData.bbmp) {
    formData.bbmp = formatBbmp(formData.bbmp);
  }
};

export default formatter;
