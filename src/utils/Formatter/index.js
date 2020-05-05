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

  if ("mobile" in formData && formData.mobile) {
    formData.mobile = parseInt(formData.mobile);
  }
  if ("alt_mob" in formData && formData.alt_mob) {
    formData.alt_mob = parseInt(formData.alt_mob);
  }
  if ("nov" in formData && formData.nov) {
    formData.nov = parseInt(formData.nov);
  }
};

export default formatter;
