import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { Layout } from "antd";
import { HeartOutlined } from "@ant-design/icons";

import VolunteerSignup from "./VolunteerSignup";
import Report from "./Report";
import Login from "./Login";
import { TopBar, SideBar } from "@components/Navigation";

import * as styles from "./index.module.less";

import store from "@store/root";
import { connecter } from "@store/common";
import classnames from "classnames";
import Home from "./Home";
import Logout from "./Logout";
import LoginRequired from "./LoginRequired";
import Appeal from "./Appeal";
import Kind from "./Kind";

const { Content, Footer } = Layout;

function App({ loggedIn, user, volunteerCount }) {
  const pageProps = {};

  return (
    <Router>
      <Layout>
        <SideBar loggedIn={loggedIn} />
        <Layout className={classnames({ [styles.layout]: loggedIn })}>
          <TopBar
            loggedIn={loggedIn}
            user={user}
            volunteerCount={volunteerCount}
          />
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <div className={styles.contentWrapper}>
              <Route exact path="/">
                <Home {...pageProps} />
              </Route>
              <Route path="/volunteer">
                <VolunteerSignup {...pageProps} />
              </Route>
              <Route path="/kind">
                <Kind {...pageProps} />
              </Route>
              <Route path="/report">
                <LoginRequired loggedIn={loggedIn}>
                  <Report {...pageProps} />
                </LoginRequired>
              </Route>
              <Route path="/appeal">
                <LoginRequired loggedIn={loggedIn}>
                  <Appeal {...pageProps} />
                </LoginRequired>
              </Route>
              <Route path="/login">
                <Login {...pageProps} />
              </Route>
              <Route path="/logout">
                <Logout {...pageProps} />
              </Route>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Volunteer and Support our community <HeartOutlined />
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
}

const AppHOC = connecter(App);

const AppWrapper = () => (
  <Provider store={store}>
    <AppHOC />
  </Provider>
);

export default AppWrapper;
