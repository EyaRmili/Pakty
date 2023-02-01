import React from "react";
import Projects from "../../_dashbord_components/_fragments/projects";
import DesignsComponent from "../../_dashbord_components/_fragments/designs";
import DashbordHeader from "../../_dashbord_components/_fragments/header";
import "./style.scss";
import BecomePro from "../../_dashbord_components/_fragments/become-pro";
import ContactUs from "../../_dashbord_components/_fragments/contact_us";
const DashbordLandingPage = () => {
  return (
    <div>
      <DashbordHeader />
      <Projects />
      <DesignsComponent />
      <BecomePro />
      <ContactUs />
    </div>
  );
};

export default DashbordLandingPage;
