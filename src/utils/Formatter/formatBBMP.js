// format service data from form  => db
import options from "@utils/Options";

function formatBbmp(bbmp = []) {
  if (bbmp.length == 0) {
    return bbmp;
  }
  let res = [];
  let visited = [];

  let zoneArea = options.urban.map((el) => {
    bbmp.map((wardVal) => {
      let wardArea = el.children.find((x) => x.value === wardVal);
      if (wardArea) {
        res.push({ pin: [wardArea.pin], ward: wardVal, zone: el.value });
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
            res.push({ pin: [ch.pin], ward: ch.value, zone: zArea });
          });
      }
    });
  return res;
}

export default formatBbmp;
