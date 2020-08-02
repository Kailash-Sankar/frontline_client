import React from "react";
import * as styles from "./styles.module.less";
import { Spacer } from "@components/Utils";
import { Input } from "antd";

import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export function SearchWithMobilePanel({ mobileUpdate, onSubmit }) {
  //console.log("sp", arguments[0]);
  return (
    <div>
      <div className={styles.selectorCo} style={{ width: 300 }}>
        <span>Enter mobile number</span>
        <Input
          placeholder="Mobile Number"
          onChange={(event) => mobileUpdate(event.target.value)}
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
