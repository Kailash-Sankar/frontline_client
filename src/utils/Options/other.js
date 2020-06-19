const genderOptions = [
  { id: "m", value: "Male" },
  { id: "f", value: "Female" },
  { id: "o", value: "Other" },
  { id: "na", value: "Not applicable" },
];

const orgTypeOptions = [
  { id: "trust", value: "Trust" },
  { id: "society", value: "Society" },
  { id: "company", value: "Company" },
  { id: "ngo", value: "NGO" },
  { id: "others", value: "Others" },
];

const modeOptions = [
  { id: "individual", value: "Individual" },
  { id: "organization", value: "Organization" },
];

const expertiseOptions = [
  { id: "food_delivery", value: "Food/Ration Delivery" },
  { id: "doctor", value: "Doctor" },
  { id: "mental_health_support", value: "Mental Health Support" },
  { id: "it_support", value: "IT Support" },
  { id: "media", value: "Media" },
  { id: "supply_chain_logistics", value: "Supply Chain/ Logistics" },
  { id: "paramedics", value: "Paramedics" },
  { id: "public_relations", value: "Public Relations" },
  { id: "data_analytics", value: "Data Analytics" },
  { id: "caregivers", value: "Caregivers" },
  { id: "any_task", value: "I can do any given task!" },
  { id: "other", value: "Other" },
];

export default {
  genderOptions,
  orgTypeOptions,
  modeOptions,
  expertiseOptions,
};
