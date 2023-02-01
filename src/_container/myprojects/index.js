import React from "react";
import DesignsComponent from "../../_dashbord_components/_fragments/designs";
import Projects from "../../_dashbord_components/_fragments/projects";
import Navigation from "../../_dashbord_components/_molecules/Navbar";

export default function MyProjects() {
  return (
    <div>
      <Navigation />
      <Projects />
      <DesignsComponent
        title={"Try, choose, and save your favorite furniture before shopping."}
        texte={
          "3D furniture models with different designs, colors, and textures are readily available."
        }
        texte2="Select what you want."
      />
    </div>
  );
}
