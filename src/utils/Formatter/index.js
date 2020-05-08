import formatService from "./formatService";
import formatBbmp from "./formatBBMP";

// format volunteer form data
export const formatter = (formData) => {
  if ("services" in formData && formData.services) {
    formData.services = formatService(formData.services);
  }
  if ("bbmp" in formData && formData.bbmp) {
    formData.bbmp = formatBbmp(formData.bbmp);
  }
};

export default formatter;
