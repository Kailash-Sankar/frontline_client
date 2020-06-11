// define header sections here and use it to build report specifc headers
const headerSections = {
  location: [
    ["region", "Region"],
    ["pin", "Pin"],
    ["area", "Area"],
    ["address", "Address"],
  ],

  organization: [
    ["organization.cat", "Category"],
    ["organization.person", "Person"],
    ["organization.reg", "Registration No."],
  ],

  individual: [
    ["individual.gender", "Gender"],
    ["individual.aadhar", "Aadhar"],
    ["individual.profession", "Profession"],
  ],

  medical: [
    ["services.medical.label", "Medical Supplies"],
    ["services.medical.attributes.quantity", "Quantity"],
    ["services.medical.attributes.unit", "Unit"],
  ],

  nonmedical: [
    ["services.nonmedical.label", "Food & Essential Supplies"],
    ["services.nonmedical.attributes.quantity", "Quantity"],
    ["services.nonmedical.attributes.unit", "Unit"],
  ],

  contact: [
    ["mobile", "Mobile"],
    ["name", "Name"],
    ["email", "Email"],
  ],

  others: [["notes", "Notes"]],

  tracking: [
    ["status", "Status"],
    ["createdAt", "Submitted on"],
  ],

  description: [["desc", "Description"]],
  mode: [["mode", "Type"]],
  meta: [
    ["services.medical.id", "Meta_mid"],
    ["services.nonmedical.id", "Meta_nmid"],
  ],
};

const reportSectionList = {
  appeal: {
    sections: [
      "location",
      "medical",
      "nonmedical",
      "description",
      "tracking",
      "meta",
    ],
  },
  request: {
    sections: ["location", "contact", "description", "tracking", "meta"],
  },
  kind: {
    sections: [
      "location",
      "contact",
      "medical",
      "nonmedical",
      "tracking",
      "mode",
      "individual",
      "organization",
      "others",
      "meta",
    ],
  },
  ngo: {
    sections: [
      "status",
      "email_verified",
      "name",
      "email",
      "mobile",
      "alt_mob",
      "address",
      "reg",
      "person",
      "nov",
      "covid19",
    ],
  },
};

const buildHeaders = (section, headers, rename) => {
  section.map(([k, v]) => {
    headers.push(k);
    rename.push(v);
  });
};

const getHeaders = ({ sections, custom = [] }) => {
  const headers = [];
  const rename = [];

  // predefine sections
  sections.forEach((s) => {
    const section = headerSections[s] || [];
    buildHeaders(section, headers, rename);
  });

  // custom if any
  if (custom.length) {
    buildHeaders(custom, headers, rename);
  }

  return { headers, rename };
};

export const getReportHeader = (act) => {
  const reportDetails = reportSectionList[act];
  if (reportDetails) {
    return getHeaders(reportDetails);
  }
  return {};
};
