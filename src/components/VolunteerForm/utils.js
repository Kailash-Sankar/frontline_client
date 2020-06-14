// from http://react-component.github.io/form-validation/
export function toNumber(v) {
  if (!v || !v.trim()) {
    return undefined;
  }
  let num = Number(v);
  // num === ' '
  if (!isNaN(num)) {
    num = parseInt(v, 10);
  }
  return isNaN(num) ? v : num;
}

export function formatData(data) {
  if ("dob" in data && data.dob) {
    data.dob = data.dob.format();
  }
}

export function formatZoneInfoForTree(urban) {
  urban.map((x) => (x.children = x.wards));
  return urban;
}
