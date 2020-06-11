import React from "react";
import { Layout } from "antd";

import { LogoutOutlined } from "@ant-design/icons";

import { Menu } from "antd";
const { SubMenu } = Menu;
import { NavLink, Link, useLocation } from "react-router-dom";

import {
  HomeOutlined,
  SafetyOutlined,
  SettingOutlined,
  //StarOutlined,
  FileSearchOutlined,
  DeploymentUnitOutlined,
  FormOutlined,
  GlobalOutlined,
  PicLeftOutlined,
  FileProtectOutlined,
} from "@ant-design/icons";

const { Header } = Layout;
const TopBar = ({ loggedIn, user }) => {
  const location = useLocation();
  let selected = location.pathname;

  return (
    <Header style={{ minHeight: "auto", padding: 0 }}>
      <div className="home-nav-bar">
        <Menu selectedKeys={[selected]} mode="horizontal" theme="dark">
          <Menu.Item key="/">
            <Link to="/">
              <HomeOutlined />
              <span className="nav-text">Home</span>
            </Link>
          </Menu.Item>

          <Menu.Item key="/about">
            <Link to="/about">
              <SafetyOutlined />
              <span className="nav-text">About</span>
            </Link>
          </Menu.Item>

          <SubMenu icon={<FileProtectOutlined />} title="Policies">
            <Menu.Item key="/terms">
              <Link to="/terms">
                <FileProtectOutlined />
                <span className="nav-text">Terms and Conditions</span>
              </Link>
            </Menu.Item>

            <Menu.Item key="/privacy-policy">
              <Link to="/privacy-policy">
                <FileProtectOutlined />
                <span className="nav-text">Privacy Policy</span>
              </Link>
            </Menu.Item>
          </SubMenu>

          {/*
         <SubMenu icon={<StarOutlined />} title="Quick Links">
            <Menu.Item key="ql:womens_helpline">
              Women&apos;s Helpline
            </Menu.Item>
            <Menu.Item key="ql:travel_assistance">Travel Assistance</Menu.Item>
          </SubMenu>
          */}

          {loggedIn ? (
            <SubMenu icon={<SettingOutlined />} title="Admin">
              <Menu.Item key="/profile" disabled>
                Hello, {user.name}
              </Menu.Item>

              <Menu.Item key="/volunteer" disabled>
                <Link to="/volunteer">
                  <DeploymentUnitOutlined />
                  <span className="nav-text">Volunteer</span>
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

              <Menu.Item key="logout" icon={<LogoutOutlined />}>
                <NavLink to="/logout">Logout</NavLink>
              </Menu.Item>
            </SubMenu>
          ) : null}
        </Menu>
      </div>
    </Header>
  );
};

export default TopBar;
