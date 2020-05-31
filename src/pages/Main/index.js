import React, { lazy, Suspense } from "react";

import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import { Layout } from "antd";
//import { HeartOutlined } from "@ant-design/icons";
import { Spin } from "antd";

import * as styles from "./index.module.less";

import store from "@store/root";
import { connecter } from "@store/common";

import PageFooter from "@components/Footer";

import Home from "./Home";
import Login from "./Login";
import Logout from "./Logout";
import LoginRequired from "./LoginRequired";
import Demo from "./Demo";
import Authorize, { Fallback } from "@components/Authorize";

const PrivacyPolicy = lazy(() => import("@components/Content/PrivacyPolicy"));
const Terms = lazy(() => import("@components/Content/Terms"));
const About = lazy(() => import("@components/Content/About"));

const TopBar = lazy(() => import("@components/Navigation/TopBar"));

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
        <TopBar
          loggedIn={loggedIn}
          user={user}
          volunteerCount={volunteerCount}
        />
        <Switch>
          <Route exact path="/">
            <Home {...pageProps} />
          </Route>
          <Route path="/privacy-policy">
            <PrivacyPolicy />
          </Route>
          <Route path="/terms">
            <Terms />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route>
            <Layout>
              <Layout>
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

                    <Route path="/demo">
                      <LoginRequired loggedIn={loggedIn}>
                        <Authorize
                          roles={["ngo", "admin", "staff"]}
                          fallback={<Fallback.Page />}
                        >
                          <Demo />
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
              </Layout>
            </Layout>
          </Route>
        </Switch>
        <Footer style={{ textAlign: "center" }}>
          <PageFooter />
        </Footer>
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
