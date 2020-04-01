import React from "react";
import LoginForm from "@components/LoginForm";
import * as styles from "./index.module.less";
import { connecter } from "@store/common";
import { Spacer } from "@components/Utils";
import { Redirect } from "react-router-dom";

function Login({ login, loggedIn }) {
  // TODO: check if user is already logged in

  function handleSubmit(values) {
    console.log("Logging in:", values);
    login(values);
  }

  function handleError(errInfo) {
    console.log("Failed:", errInfo);
  }

  return (
    <div>
      <Spacer display="block" height={20} />
      <div className={styles.loginWrapper}>
        {loggedIn ? (
          <div>
            <Redirect
              to={{
                pathname: "/report"
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
