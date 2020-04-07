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
  n95: { id: "n95", value: "N95 Masks" },
  face_mask: { id: "face_mask", value: "Face Masks" },
};

export const nonMedicalOptions = {
  baby_food: { id: "baby_food", value: "Baby Food" },
  packed_cooked_food: { id: "packed_cooked_food", value: "Packed Cooked Food" },
  packed_dry_food: { id: "packed_dry_food", value: "Packed Dry Food" },
  rice: { id: "rice", value: "Rice" },
  wheat: { id: "wheat", value: "Wheat" },
  flour: { id: "flour", value: "Flour" },
  dal: { id: "dal", value: "Dal" },
  milk: { id: "milk", value: "Milk" },
  fruits: { id: "fruits", value: "Fruits" },
  vegetables: { id: "vegetables", value: "Vegetables" },
  ration: { id: "ration", value: "Other Ration" },
  water: { id: "water", value: "Water" },
  diapers: { id: "diapers", value: "Diapers" },
  adult_diapers: { id: "adult_diapers", value: "Adult Diapers" },
  sanitary_napkins: { id: "sanitary_napkins", value: "Sanitary Napkins" },
  clothes: { id: "clothes", value: "Clothes" },
  soaps: { id: "soaps", value: "Soaps" },
  coir_beds: { id: "coir_beds", value: "Coir Beds" },
  coir_pillows: { id: "coir_pillows", value: "Coir Pillows" },
  cots: { id: "cots", value: "Cots" },
  bedsheets: { id: "bedsheets", value: "Bedsheets" },
  pillow_covers: { id: "pillow_covers", value: "Pillow Covers" },
  matresses: { id: "matresses", value: "Mattresses" },
  hand_towels: { id: "hand_towels", value: "Hand Towels" },
  floor_clean_deter: {
    id: "floor_clean_deter",
    value: "Floor Cleaning Detergent",
  },
  toilet_clean_deter: {
    id: "toilet_clean_deter",
    value: "Toilet Cleaning Detergent",
  },
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
