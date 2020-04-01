import React from "react";
import * as styles from "./index.module.less";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { Spacer } from "@components/Utils";

function LoginRequired({ loggedIn, children }) {
  console.log(loggedIn);

  if (loggedIn) {
    return children;
  }

  return (
    <div className={styles.loginWrapper}>
      <div> You have to be logged in to view this page.</div>
      <Spacer display="block" height={20} />
      <Button type="primary">
        <Link to="/login">Login</Link>
      </Button>
    </div>
  );
}

export default LoginRequired;
