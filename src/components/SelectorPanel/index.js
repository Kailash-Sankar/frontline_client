import React from "react";
import * as styles from "./styles.module.less";
import { Spacer } from "@components/Utils";

import { Button, DatePicker } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { ModeSelect, RegionSelect, StatusSelect } from "./SelectFields";

import { ServiceSelector } from "./TreeSelects";

const { RangePicker } = DatePicker;
const dateFormatList = ["DD/MM/YYYY", "DD/MM/YYYY"];

function SelectorPanel({
  // customer props
  mode,
  modes,
  onModeChange,

  // product props
  region,
  regions,
  onRegionChange,

  // service props
  service,
  services,
  onServiceChange,

  dateRange,
  onDateRangeChange,

  status,
  onStatusChange,

  onSubmit,
  // act props
  act,
}) {
  //console.log("sp", arguments[0]);
  return (
    <div>
      {onModeChange ? (
        <>
          <div className={styles.selectorCo}>
            <span>Type</span>
            <ModeSelect mode={mode} modes={modes} onModeChange={onModeChange} />
          </div>
          <Spacer />
        </>
      ) : (
        ""
      )}

      <div className={styles.selectorCo}>
        <span>Region</span>
        <RegionSelect
          region={region}
          regions={regions}
          onRegionChange={onRegionChange}
        />
      </div>
      <Spacer />
      {service && 1 == 0 ? (
        <React.Fragment>
          <div className={styles.selectorCo}>
            <span>Services</span>
            <ServiceSelector
              service={service}
              services={services}
              onChange={onServiceChange}
            />
          </div>

          <Spacer />
        </React.Fragment>
      ) : null}

      {dateRange ? (
        <React.Fragment>
          <div className={styles.selectorCo}>
            <span>Date Range</span>
            <RangePicker
              defaultValue={dateRange}
              format={dateFormatList}
              onChange={onDateRangeChange}
            />
          </div>
          <Spacer />
        </React.Fragment>
      ) : null}

      <div className={styles.selectorCo}>
        <span>Status</span>
        <StatusSelect
          status={status}
          onStatusChannge={onStatusChange}
          act={act}
        />
      </div>
      <Spacer />

      <div className={styles.selectorCo}>
        <span>&nbsp;</span>
        <Button onClick={onSubmit} icon={<SearchOutlined />}>
          Search
        </Button>
      </div>
    </div>
  );
}

export default SelectorPanel;
