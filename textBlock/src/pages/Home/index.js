import React from "react";
import { Layout } from "antd";
import AppHeader from "../../components/Header/index.js";
import Dashboard from "../../components/Dashboard/index.js";

function Home() {
  const { Header, Content } = Layout;

  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <Dashboard />
      </Content>
    </Layout>
  );
}

export default Home;
