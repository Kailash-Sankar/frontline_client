import React from "react";
import LoginForm from "@components/LoginForm";
import * as styles from "./index.module.less";
import { connecter } from "@store/common";
import { Redirect } from "react-router-dom";
import { formatLogin } from "../utils";

function Login({ login, loggedIn }) {
  function handleSubmit(values) {
    const data = formatLogin(values);
    login(data);
  }

  function handleError(errInfo) {
    console.log("Failed:", errInfo);
  }

  return (
    <div style={{ textAlign: "left" }}>
      <h2>Post Appeals</h2>
      <div className={styles.loginWrapper}>
        {loggedIn ? (
          <div>
            <Redirect
              to={{
                pathname: "/report",
              }}
            />
          </div>
        ) : (
          <div className={styles.loginWrapper}>
            <LoginForm handleSubmit={handleSubmit} handleError={handleError} />
          </div>
        )}
      </div>
    </div>
  );
}

export default connecter(Login);
