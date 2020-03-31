import React from "react";
import { Layout } from "antd";

import VolunteerSingup from "./VolunteerSingup";
import Report from "./Report";

import { HeartOutlined } from "@ant-design/icons";

import { TopBar, SideBar } from "@components/Navigation";
import * as styles from "./index.module.less";
import { Provider } from "react-redux";
import store from "@store/root";

import { HashRouter as Router, Route } from "react-router-dom";

const { Content, Footer } = Layout;

function App() {
  const pageProps = {};

  return (
    <Router>
      <Layout>
        <SideBar />
        <Layout style={{ marginLeft: 200 }}>
          <TopBar />
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <div className={styles.contentWrapper}>
              <Provider store={store}>
                <Route path="/volunteer">
                  <VolunteerSingup {...pageProps} />
                </Route>
                <Route path="/report">
                  <Report {...pageProps} />
                </Route>
              </Provider>
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

export default App;
