import React from "react";
import * as styles from "./styles.module.less";
import { Spacer } from "@components/Utils";

import { ModeSelect, RegionSelect } from "./SelectFields";

function SelectorPanel({
  // customer props
  mode,
  modes,
  onModeChange,

  // product props
  region,
  regions,
  onRegionChange
}) {
  console.log("sp", arguments[0]);
  return (
    <div>
      <div className={styles.selectorCo}>
        <span>Type</span>
        <ModeSelect mode={mode} modes={modes} onModeChange={onModeChange} />
      </div>

      <Spacer />

      <div className={styles.selectorCo}>
        <span>Region</span>
        <RegionSelect
          region={region}
          regions={regions}
          onRegionChange={onRegionChange}
        />
      </div>
    </div>
  );
}

export default SelectorPanel;
