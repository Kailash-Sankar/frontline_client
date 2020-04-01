import React from "react";
import * as styles from "./index.module.less";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { Spacer } from "@components/Utils";

function Home() {
  return (
    <div className={styles.loginWrapper}>
      <div>
        There&apos;s a lot of chaos around due to COVID-19, we could use your
        help to make things better.
      </div>

      <Spacer display="block" height={20} />

      <Button type="primary">
        <Link to="/volunteer">Volunteer Now</Link>
      </Button>
    </div>
  );
}

export default Home;
