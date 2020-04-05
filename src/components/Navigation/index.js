import React from "react";
import { Spacer } from "@components/Utils";
import { Menu, Layout } from "antd";
import { Link, useLocation } from "react-router-dom";
import * as styles from "./index.module.less";

//import logo from "@images/logo.png";

import {
  FlagOutlined,
  DeploymentUnitOutlined,
  FileSearchOutlined,
  HomeOutlined,
  FormOutlined,
  LoginOutlined,
  LogoutOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import CountBadge from "@components/Misc/CountBadge";

const { Header, Sider } = Layout;

export const TopBar = ({ loggedIn, user, volunteerCount }) => {
  return (
    <Header style={{ background: "#fff", padding: 0 }}>
      <div className={styles.headFlex}>
        <div className={styles.logoWrap}>
          <Link to="/">
            <span>
              <FlagOutlined />
            </span>
            <span>Frontline</span>
          </Link>
        </div>

        <div className={styles.statusWrap}>
          Volunteers so far,&nbsp;
          <CountBadge {...volunteerCount} />
        </div>

        <div className={styles.userWrap}>
          <Spacer width={20} />
          {loggedIn ? (
            <span>
              <span className={styles.userLabel}>Hello, {user.name}</span>
              <Spacer width={20} />
              <Link to="/logout">
                <LogoutOutlined />
              </Link>
            </span>
          ) : (
            <Link to="/login">
              <LoginOutlined />
            </Link>
          )}
        </div>
      </div>
    </Header>
  );
};

export function RenderMenu() {
  const location = useLocation();
  const selected = location.pathname;

  return (
    <Menu theme="dark" mode="inline" selectedKeys={[selected]}>
      <Menu.Item key="/">
        <Link to="/">
          <HomeOutlined />
          <span className="nav-text">Home</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="/volunteer">
        <Link to="/volunteer">
          <DeploymentUnitOutlined />
          <span className="nav-text">Volunteer</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="/kind">
        <Link to="/kind">
          <GlobalOutlined />
          <span className="nav-text">Kind</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="/report">
        <Link to="/report">
          <FileSearchOutlined />
          <span className="nav-text">Reports[Volunteer]</span>
        </Link>
      </Menu.Item>

      <Menu.Item key="/kind/reports">
        <Link to="/kind/reports">
          <FileSearchOutlined />
          <span className="nav-text">Reports</span>
        </Link>
      </Menu.Item>

      <Menu.Item key="/appeal">
        <Link to="/appeal">
          <FormOutlined />
          <span className="nav-text">Appeal</span>
        </Link>
      </Menu.Item>
    </Menu>
  );
}

export const SideBar = ({ loggedIn }) => {
  const [collapsed, setCollapsed] = React.useState(false);

  function onCollapse(collapsed) {
    setCollapsed(collapsed);
  }

  if (!loggedIn) {
    return <></>;
  }

  return (
    <Sider
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
      }}
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
    >
      <div className="logo" style={{ height: 64 }}>
        <FlagOutlined />
        <span className="logo-text"> Frontline </span>
        {/*
          <img className="logo-img" src={logo} alt="LOGO" />
        */}
      </div>
      <RenderMenu />
    </Sider>
  );
};
