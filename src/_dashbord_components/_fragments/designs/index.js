import React from "react";
import './style.scss'
import GalleryComponent from "../../../_components/_molecules/gallery";
const DesignsComponent = () => {
  return (
    <section class="designs-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div class="section-title">
              <span>Choose the design you like </span>
            </div>{" "}
            <p>Discover our latest work by categories</p>
          </div>
        </div>
      </div>
      <GalleryComponent />
    </section>
  );
};

export default DesignsComponent;
