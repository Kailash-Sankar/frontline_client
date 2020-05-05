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
      if (wardArea && true) {
        let newArea = {};
        newArea.pin = [wardArea.pin];
        newArea.ward = wardVal;
        newArea.zone = el.value;
        res.push(newArea);
        visited.push(wardVal);
      }
    });
    return el.value;
  });

  // each bbmp ward
  bbmp.map((area) => {
    if (zoneArea.includes(area)) {
      options.urban
        .find((x) => x.value === area)
        .children.map((ch) => {
          let newArea = {};
          newArea.pin = [ch.pin];
          newArea.ward = area;
          newArea.zone = ch.value;
          res.push(newArea);
        });
    }
  });
  return res;
}

export default formatBbmp;
