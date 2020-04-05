const toStr = (v) => `${v}`;

// convert string from object array, using one key)
// used for volunteer service
export function buildStr(arr = [], conf) {
  const strList = arr.map((item) => {
    return Object.keys(conf)
      .map((k) => conf[k](item[k]))
      .join(" ");
  });
  return strList.join(", ");
}

// generic attribute handler
export function attrToString(attr = {}) {
  let res = "";
  let strList = [];
  Object.keys(attr).forEach((x) => {
    strList.push(`${x}:${attr[x]}`);
  });
  if (strList.length > 0) {
    res = `(${strList.join(", ")})`;
  }
  return res;
}

export function kindAttrToString(attr = {}) {
  let unitStr = "";
  if ("unit" in attr) {
    unitStr = attr.unit != "na" ? attr.unit : "";
  }
  const res = `(${attr.quantity || ""} ${unitStr})`;
  return res;
}

// higher functions
export const getString = (value) => {
  if (Array.isArray(value)) {
    return buildStr(value, { label: toStr });
  }
  return value;
};

export const getStringAttr = (value) => {
  if (Array.isArray(value)) {
    return buildStr(value, { label: toStr, attributes: kindAttrToString });
  }
  return value;
};
