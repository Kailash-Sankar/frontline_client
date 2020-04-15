import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "antd";
import { Spacer } from "@components/Utils";
import * as styles from "./index.module.less";
import StateLogo from "@images/state-logo.webp";

import { LogoutOutlined } from "@ant-design/icons";

const { Header } = Layout;
const TopBar = ({ loggedIn, user }) => {
  return (
    <Header style={{ background: "#fff", padding: 0 }}>
      <div className={styles.headFlex}>
        <div className={styles.logoWrap}>
          <Link to="/">
            <img src={StateLogo} className="state-logo" />
            <span style={{ paddingLeft: "10px", fontWeight: "600" }}>
              Sankalpa
            </span>
          </Link>
        </div>

        <div className={styles.statusWrap}></div>

        <div className={styles.userWrap}>
          <Spacer width={20} />
          {
            loggedIn ? (
              <span>
                <span className={styles.userLabel}>Hello, {user.name}</span>
                <Spacer width={20} />
                <Link to="/logout">
                  <LogoutOutlined />
                </Link>
              </span>
            ) : (
              ""
            )
            // <Link to="/login">
            //   <LoginOutlined />
            // </Link>
          }
        </div>
      </div>
    </Header>
  );
};

export default TopBar;
