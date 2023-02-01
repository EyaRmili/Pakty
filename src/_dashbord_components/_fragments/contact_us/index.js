import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
export default function ContactUs() {
  return (
    <div>
      <section class="contact-us spad">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                class="img-fluid"
                src={require("../../../assets/img/contact_img.jpg")}
                alt="err"
              />
            </div>
            <div className="form-section col-md-6">
              <div class="section-title">
                <span>Contact us</span>
                <p>Pakty team can help you</p>
              </div>{" "}
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  id=""
                  placeholder="Full name"
                />
              </div>
              <div class="mb-3">
                <input
                  type="email"
                  class="form-control"
                  id=""
                  placeholder="Email address"
                />
              </div>
              <div class="mb-3">
                <textarea
                  class="form-control"
                  id=""
                  placeholder="Message"
                  rows="2"
                ></textarea>
              </div>
              <button type="button" class="btn btn-contact">
                <Link to="">CONTACT US</Link>
              </button>{" "}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
