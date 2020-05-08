import React, { lazy, Suspense } from "react";

import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import { Layout } from "antd";
//import { HeartOutlined } from "@ant-design/icons";
import { Spin } from "antd";

import * as styles from "./index.module.less";

import store from "@store/root";
import { connecter } from "@store/common";
import classnames from "classnames";

import PageFooter from "@components/Footer";

import Home from "./Home";
import Login from "./Login";
import Logout from "./Logout";
import LoginRequired from "./LoginRequired";
import NGO from "./NGO";
import Authorize, { Fallback } from "@components/Authorize";

const TopBar = lazy(() => import("@components/Navigation/TopBar"));
const SideBar = lazy(() => import("@components/Navigation/SideBar"));

const VolunteerSignup = lazy(() => import("./VolunteerSignup"));
const NgoSignup = lazy(() => import("./NgoSignup"));
const Kind = lazy(() => import("./Kind"));
const Appeal = lazy(() => import("./Appeal"));
const Report = lazy(() => import("./Report"));
const RequestForHelp = lazy(() => import("./RequestForHelp"));

const { Content, Footer } = Layout;

function App({ loggedIn, user, volunteerCount }) {
  const pageProps = {};

  return (
    <Router>
      <Suspense
        fallback={
          <div className={styles.spinner}>
            <Spin />
          </div>
        }
      >
        <Switch>
          <Route exact path="/">
            <Home {...pageProps} />
          </Route>
          <Route>
            <Layout>
              <SideBar loggedIn={loggedIn} />

              <Layout className={classnames({ [styles.layout]: loggedIn })}>
                <TopBar
                  loggedIn={loggedIn}
                  user={user}
                  volunteerCount={volunteerCount}
                />

                <Content className={styles.content}>
                  <div className={styles.contentWrapper}>
                    <Route path="/volunteer">
                      <VolunteerSignup {...pageProps} />
                    </Route>

                    <Route path="/ngosignup">
                      <NgoSignup {...pageProps} />
                    </Route>

                    <Route exact path="/kind">
                      <Kind {...pageProps} />
                    </Route>

                    <Route exact path="/appeal">
                      <LoginRequired loggedIn={loggedIn}>
                        <Appeal {...pageProps} />
                      </LoginRequired>
                    </Route>

                    <Route path="/report">
                      <LoginRequired loggedIn={loggedIn}>
                        <Report {...pageProps} />
                      </LoginRequired>
                    </Route>

                    <Route path="/request">
                      <RequestForHelp {...pageProps} />
                    </Route>

                    <Route path="/NGO">
                      <LoginRequired loggedIn={loggedIn}>
                        <Authorize
                          roles={["ngo", "admin"]}
                          fallback={<Fallback.Page />}
                        >
                          <NGO />
                        </Authorize>
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
                  <PageFooter />
                </Footer>
              </Layout>
            </Layout>
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

//  Volunteer and Support our community <HeartOutlined />

const AppHOC = connecter(App);

const AppWrapper = () => (
  <Provider store={store}>
    <AppHOC />
  </Provider>
);

export default AppWrapper;
