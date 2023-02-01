import React from "react";
import { Link } from "react-router-dom";

export default function Navbar3D() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <Link class="navbar-brand" to="/">
            <img
              src={require("../../../assets/img/logo.png")}
              alt="err"
              erreur
            />
          </Link>
          <Link to="collection" class="nav-link">
            <img
              src={require("../../../assets/img/cart.png")}
              alt="erreur-cart"
            />{" "}
          </Link>
        </div>
      </nav>
    </div>
  );
}
