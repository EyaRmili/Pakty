import React from "react";
import "./style.scss";
export default function Projects() {
  return (
    <div>
      <section class="projects spad">
        <div class="container">
          <div class="row">
            <div class="section-title">
              <span>My projects</span>
            </div>
          </div>{" "}
          <div className="row align-items-center">
            <div className="col-md-3">
              <img
                class="img-fluid"
                src={require("../../../assets/img/projet1.png")}
                alt="err"
              />
            </div>
            <div className="col-md-3">
              <img
                class="img-fluid"
                src={require("../../../assets/img/projet1.png")}
                alt="err"
              />
            </div>
            <div className="col-md-3">
              <img
                class="img-fluid"
                src={require("../../../assets/img/projet1.png")}
                alt="err"
              />
            </div>
            <div className="col-md-3">
              <img
                class="img-fluid"
                src={require("../../../assets/img/plus_icon.png")}
                alt="err"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
