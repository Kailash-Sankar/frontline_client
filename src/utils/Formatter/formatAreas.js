// format service data from form  => db
import options from "@utils/Options";

export function formatBbmp(bbmp = []) {
  if (bbmp.length == 0) {
    return bbmp;
  }
  let res = [];
  let visited = [];

  let zoneArea = options.urban.map((el) => {
    bbmp.map((wardVal) => {
      let wardArea = el.children.find((x) => x.value === wardVal);
      if (wardArea) {
        res.push({ pincode: wardArea.pincode, ward: wardVal, zone: el.value });
        visited.push(wardVal);
      }
    });
    return el.value;
  });

  // each bbmp ward
  bbmp
    .filter((el) => !visited.includes(el))
    .map((zArea) => {
      if (zoneArea.includes(zArea)) {
        options.urban
          .find((x) => x.value === zArea)
          .children.map((ch) => {
            res.push({ pincode: ch.pincode, ward: ch.value, zone: zArea });
          });
      }
    });
  return res;
}

export function formatNgoDistrict(district = []) {
  if (district.length == 0) {
    return district;
  } else if (district.length == 1 && district[0] == "KA") {
    district = options.regions
      .find((x) => x.value === "KA")
      .children.map((ch) => ch.value);
  }
  district.unshift("KA");
  return district;
}
