import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CollectionPage from "../_container/collection";
import DashbordLandingPage from "../_container/dashbord_landing_page";
import DetailsCollection from "../_container/details-collection";

const LandingPage = lazy(() => import("../_container/landing-page"));
const MainRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/dashbord" element={<DashbordLandingPage />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/detailcollection" element={<DetailsCollection />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoute;
