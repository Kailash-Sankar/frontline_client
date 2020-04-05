export const communicationOptions = {
  community: {
    id: "community",
    value:
      "Community level, RWA, Social Groups, Religious places awareness campaigns",
  },
  help_lines: { id: "help_lines", value: "Manning of help lines" },
  promote: { id: "promote", value: "Promote social distancing measures" },
  awareness: {
    id: "awareness",
    value: "Public Awareness on Hygiene practices",
  },
};

export const entrepreneurialOptions = {
  production: {
    id: "production",
    value: "Assisting in production of PPE, masks, sanitizers etc",
  },
  tech: { id: "tech", value: "IT based solutions" },
  logistics: { id: "logistics", value: "Logistics" },
};

export const essentialOptions = {
  admin: {
    id: "admin",
    value:
      "Assisting District Administration in quarantine, home isolation and law and order arrangements",
  },
  disinfect: {
    id: "disinfect",
    value: "Disinfection and cleaning services",
  },
  information: {
    id: "information",
    value: "Door to door information and service management",
  },
};

export const healthOptions = {
  primary: { id: "primary", value: "Assisting primary healthcare workers" },
  body: { id: "body", value: "Dead body management" },
  elderly: { id: "elderly", value: "Helping elderly and those in need" },
  prevention: { id: "prevention", value: "Infection prevention and control" },
  paramedic: { id: "paramedic", value: "Paramedic" },
  transport: { id: "transport", value: "Transportation of patients" },
};

export const medicalOptions = {
  bipap: { id: "bipap", value: "BiPAP machines" },
  hand_gloves: { id: "hand_gloves", value: "Hand gloves" },
  hand_sanitizers: { id: "hand_sanitizers", value: "Hand Sanitizers" },
  hand_wash: { id: "hand_wash", value: "Hand Wash liquid" },
  hydroxy_chloroquine: {
    id: "hydroxy_chloroquine",
    value: "Hydroxy Chloroquine tablets",
  },
  icu_ventilators: { id: "icu_ventilators", value: "ICU Ventilators" },
  ppe: { id: "ppe", value: "PPE" },
  testing_kits: { id: "testing_kits", value: "Testing kits" },
  triple_layer_masks: { id: "triple_layer_masks", value: "Triple layer masks" },
};

export const nonMedicalOptions = {
  adult_diapers: { id: "adult_diapers", value: "Adult Diapers" },
  baby_food: { id: "baby_food", value: "Baby Food" },
};

export const servicesTree = [
  {
    title: "Communication",
    id: "service_communications",
    options: Object.values(communicationOptions),
  },
  {
    title: "Essential",
    id: "service_essential",
    options: Object.values(essentialOptions),
  },
  {
    title: "Health",
    id: "service_health",
    options: Object.values(healthOptions),
  },
  {
    title: "Entrepreneurial",
    id: "service_entrepreneurial",
    options: Object.values(entrepreneurialOptions),
  },
  {
    title: "Medical",
    id: "medical",
    options: Object.values(medicalOptions),
  },
  {
    title: "Non Medical",
    id: "nonmedical",
    options: Object.values(nonMedicalOptions),
  },
];

export default {
  communicationOptions,
  entrepreneurialOptions,
  essentialOptions,
  healthOptions,
  servicesTree,
  medicalOptions,
  nonMedicalOptions,
};
