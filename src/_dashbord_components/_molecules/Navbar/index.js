import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export default function Navigation() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <Link class="navbar-brand" to="/dashbord">
            <img
              src={require("../../../assets/img/logo.png")}
              alt="err"
              erreur
            />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav  ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/collection" class="nav-link">
                  Our collection
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/customizedesign" class="nav-link">
                  Customize my space
                </Link>
              </li>
            </ul>
          </div>
          <div className="right-header">
            <button type="button" class="btn btn-header me-4">
              <Link to="design">Design my project</Link>
            </button>
            <img
              src={require("../../../assets/img/user.png")}
              alt="erreur-user "
              className="me-4"
            />
            <img
              src={require("../../../assets/img/cart.png")}
              alt="erreur-cart"
            />
          </div>
        </div>
      </nav>
    </div>
  );
}
