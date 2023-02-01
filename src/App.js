import React from "react";
import { Layout } from "antd";
import FooterComponent from "./_components/_fragments/_footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./_container/landing-page";
import DashbordLandingPage from "./_container/dashbord_landing_page";
import CollectionPage from "./_container/collection";
import DetailsCollection from "./_container/details-collection";
import CustomizeDesign from "./_container/3d_design";

const { Content } = Layout;
const App = () => {
  return (
    <Layout>
      <Content className="site-layout">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/dashbord" element={<DashbordLandingPage />} />
            <Route path="/collection" element={<CollectionPage />} />
            <Route path="/detailcollection" element={<DetailsCollection />} />
            <Route path="/customizedesign" element={<CustomizeDesign />} />
          </Routes>
        </BrowserRouter>{" "}
      </Content>
      <FooterComponent></FooterComponent>
    </Layout>
  );
};

export default App;
