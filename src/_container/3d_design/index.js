import React, { useState } from "react";
import Navbar3D from "../../_dashbord_components/_molecules/3d_Design_Navbar";
import "./style.scss";
export default function CustomizeDesign() {
  const [isActive, setIsActive] = useState(true);

  return (
    <div>
      <Navbar3D />
      <div className="container d-flex mt-5">
        <div className="customize-title">
          <span>Customize this 3D design</span>
        </div>
        <div className="offset-md-4 ms-auto complete-btn">
          <span>COMPLETE</span>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 p-0">
            <img
              src={require("../../assets/img/3d_img.png")}
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-md-6 box-products p-0">
            <span className="box-title">Products</span>
            <div class="card">
              <div class="card-body pb-2 d-flex">
                <img
                  src={require("../../assets/img/chair.png")}
                  className="img-fluid"
                  alt="err"
                />{" "}
                <div className="">
                  <h5 class="card-title">Chair</h5>
                  <p class="card-text">
                    Wooden bedside table featuring a raised design
                  </p>
                  <span>200$</span>
                </div>
                <div>
                  {isActive ? (
                    <img
                      src={require("../../assets/icons/up.png")}
                      alt="up-icon"
                      onClick={() => {
                        setIsActive(!isActive);
                      }}
                    ></img>
                  ) : (
                    <img
                      src={require("../../assets/icons/down.png")}
                      alt="down-icon"
                      onClick={() => {
                        setIsActive(!isActive);
                      }}
                    ></img>
                  )}
                </div>
              </div>
              {isActive && (
                <div className="row align-items-center">
                  <div
                    className="col-md-4 btn"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <img
                      src={require("../../assets/icons/edit.png")}
                      alt="error-edit"
                    />
                    <span className="ms-2"> edit</span>
                  </div>
                  <div className="col-md-4">
                    <img
                      src={require("../../assets/icons/replace.png")}
                      alt="error-replace"
                    />
                    <span className="ms-2">replace</span>
                  </div>
                  <div className="col-md-4">
                    <img
                      src={require("../../assets/icons/pannier.png")}
                      alt="error-replace"
                    />
                    <span className="ms-2">ADD TO CARD</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Modal */}
          <div
            class="modal fade right"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">...</div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
