import React from "react";
import "./style.scss";
import Navigation from "../../_molecules/Navbar";
export default function DashbordHeader(props) {
  return (
    <div>
      <div className="bannerimage">
        <Navigation />

        <div className="text-header container text-start">
          <h1 className="title">Welcome Sarah Mezrani !</h1>
          <p className="text">
            Explore your creativity and start creating your <br></br>project
            with PAKTY
          </p>
          <button type="button" class="btn btn-header">
            <a href="/">Design my project</a>
          </button>
        </div>
      </div>
    </div>
  );
}
