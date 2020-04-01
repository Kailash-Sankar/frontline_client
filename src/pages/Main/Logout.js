import React, { useEffect } from "react";
import * as styles from "./index.module.less";
import { Spacer } from "@components/Utils";
import { connecter } from "@store/common";
import { useHistory } from "react-router-dom";

function Logout({ loggedIn, logout }) {
  let history = useHistory();

  useEffect(() => {
    logout();
    setTimeout(() => {
      history.push("/"); // clear history
    }, 2000);
  }, []);

  return (
    <div>
      <Spacer display="block" height={20} />
      <div className={styles.loginWrapper}>
        {loggedIn ? (
          <div>Logging out...</div>
        ) : (
          <div>Logged out successfully! You will be redirected to home...</div>
        )}
      </div>
    </div>
  );
}

export default connecter(Logout);
