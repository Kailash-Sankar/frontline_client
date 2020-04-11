import React from "react";
import { Menu, Layout } from "antd";
import { Link, useLocation } from "react-router-dom";

//import logo from "@images/logo.png";

import {
  DeploymentUnitOutlined,
  FileSearchOutlined,
  HomeOutlined,
  FormOutlined,
  GlobalOutlined,
  PicLeftOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

function RenderMenu() {
  const location = useLocation();
  let selected = location.pathname;

  return (
    <Menu
      theme="dark"
      mode="inline"
      selectedKeys={[selected]}
      defaultOpenKeys={["appeal", "kind"]}
    >
      <Menu.Item key="/">
        <Link to="/">
          <HomeOutlined />
          <span className="nav-text">Home</span>
        </Link>
      </Menu.Item>

      <Menu.Item key="/volunteer" disabled>
        <Link to="/volunteer">
          <DeploymentUnitOutlined />
          <span className="nav-text"> Volunteer </span>
        </Link>
      </Menu.Item>

      <Menu.Item key="/kind">
        <Link to="/kind">
          <GlobalOutlined />
          <span className="nav-text">Support in Kind</span>
        </Link>
      </Menu.Item>

      <Menu.Item key="/appeal">
        <Link to="/appeal">
          <PicLeftOutlined />
          <span className="nav-text">Appeal</span>
        </Link>
      </Menu.Item>

      <Menu.Item key="/request">
        <Link to="/request">
          <FormOutlined />
          <span className="nav-text">Request for help</span>
        </Link>
      </Menu.Item>

      <Menu.Item key="/report">
        <Link to="/report">
          <FileSearchOutlined />
          <span className="nav-text">Reports</span>
        </Link>
      </Menu.Item>
    </Menu>
  );
}

const SideBar = ({ loggedIn }) => {
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
        <span className="logo-text"> Sankalpa </span>
        {/*
          <img className="logo-img" src={logo} alt="LOGO" />
        */}
      </div>
      <RenderMenu />
    </Sider>
  );
};

export default SideBar;
