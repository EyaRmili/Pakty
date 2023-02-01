import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

export default function BecomeProSection() {
  return (
    <div>
      <section class="become-pro spad">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div class="section-title">
                <span>You are pro ? join us !</span>
              </div>{" "}
              <p>
                Lorem ipsum dolor sit amet consectetur. Quam cras dignissim mi
                nibh. Id magna et phasellus ullamcorper. <br></br>
                <br></br>
                Neque tristique pretium in sed posuere adipiscing risus ligula.
                Quis vitae dapibus lectus id pretium nisl congue.
              </p>
              <button type="button" class="btn btn-pro">
                <Link to="">become pro</Link>
              </button>{" "}
            </div>
            <div className="img-pro col-md-6">
              <img
                class="img-fluid"
                src={require("../../../assets/img/become-pro.jpg")}
                alt="err"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
