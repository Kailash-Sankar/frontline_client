import formatService from "./formatService";

// format volunteer form data
export const formatter = (formData) => {
  if ("services" in formData && formData.services) {
    formData.services = formatService(formData.services);
  }
};

export default formatter;
