import React from "react";
import "./style.scss";
import GalleryComponent from "../../../_components/_molecules/gallery";
const DesignsComponent = (props) => {
  return (
    <section class="designs-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div class="section-title">
              <span>{props.title}</span>
            </div>{" "}
            <p>{props.texte}</p>
            <p> {props.texte2}</p>
          </div>
        </div>
      </div>
      <GalleryComponent />
    </section>
  );
};

export default DesignsComponent;
