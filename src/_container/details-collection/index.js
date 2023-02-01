import React from "react";
import ItemCardComponent from "../../_components/_molecules/Item-card";
import Navigation from "../../_dashbord_components/_molecules/Navbar";
import "./style.scss";
export default function DetailsCollection() {
  return (
    <div>
      <Navigation />
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-12 ">
            <i class="fa-solid fa-arrow-left me-3"></i>
            <span>Back</span>
          </div>
        </div>
        {/* Caroussel */}
        <div id="carouselExampleIndicators" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src={require("../../assets/img/slider-collection.jpg")}
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src={require("../../assets/img/slider-collection.jpg")}
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src={require("../../assets/img/slider-collection.jpg")}
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        {/* End Caroussel */}
        <div className="row title-section d-flex justify-content-between align-items-center">
          <div className="col-md-8 title-detail-collection">
            <span>Simple ways to decorate your Room</span>
          </div>
          <div className="col-md-4 request-btn">
            <span>REQUEST THIS DESIGN</span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 p-0">
            <img src={require("../../assets/img/user-collection.png")} alt="" />
            <span className="designer-name">Emmanuel Gustave</span>
          </div>
        </div>
        <div className="row decoration-text">
          <p>
            Lorem ipsum dolor sit amet consectetur. Ullamcorper sed turpis
            sapien id mi id venenatis in id. Pretium massa amet sapien turpis
            quam turpis. Sit sed malesuada velit adipiscing urna pretium magna.
            Sit quis at diam et sed at eu. Sed non ut elit amet proin.
            Ullamcorper purus viverra odio a luctus. Lectus fringilla sed
            scelerisque in et dolor dictumst molestie. Quam nunc dolor
            pellentesque viverra nulla quam proin. Dignissim.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Justo auctor ut varius sit
            tristique. Egestas aliquet neque natoque lobortis. Eget lectus lorem
            pulvinar etiam sodales vel dictum vulputate amet. Tellus leo
            vulputate et aliquam. Fames ornare sed faucibus vitae donec ac
            consectetur penatibus. Sed feugiat at blandit augue non donec sit
            quam. Fermentum lectus nulla semper mauris. Ornare integer
            adipiscing aliquet dui. At quis sit maecenas ut sodales. Mauris
            donec at dolor gravida faucibus lacus. Dui amet suscipit
            pellentesque rhoncus mauris. Tristique lectus cras lorem nunc.
            Ornare mi dictum libero semper nunc ac. Tortor sem dignissim ut
            dignissim felis tempor purus id. Porttitor etiam netus egestas
            laoreet elementum dui volutpat id eu. Platea tempus aliquam aliquet
            nibh sit posuere risus justo enim. Facilisi adipiscing neque neque
            cras ullamcorper turpis pretium nisl. Proin quis felis a cras enim
            praesent enim eleifend justo.
          </p>
        </div>
        {/* Other produsts */}
        <div className="row inspiration-title">
          <span>Product in this inspiration</span>
        </div>
        <div className="row">
          <div className="col-md-3">
            <ItemCardComponent
              tite="test1"
              description="test2"
              price="100"
              src={require("../../assets/img/card-image.jpg")}
            />
          </div>
          <div className="col-md-3">
            <ItemCardComponent
              tite="test1"
              description="test2"
              price="100"
              src={require("../../assets/img/card-image.jpg")}
            />
          </div>
          <div className="col-md-3">
            <ItemCardComponent
              tite="test1"
              description="test2"
              price="100"
              src={require("../../assets/img/card-image.jpg")}
            />
          </div>
          <div className="col-md-3">
            <ItemCardComponent
              tite="test1"
              description="test2"
              price="100"
              src={require("../../assets/img/card-image.jpg")}
            />
          </div>
        </div>
        {/*  */}
        <div className="d-flex other-section">
          <div className="other-title">
            <span>You can also like</span>
          </div>
          <div className="offset-md-4 ms-auto  explore-btn">
            <span className="me-2">EXPLORE ALL</span>
            <i class="fa-solid fa-arrow-right"></i>{" "}
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img
              className="img-fluid"
              src={require("../../assets/img/other_img1.png")}
              alt=""
            />
          </div>
          <div className="col-md-4">
            <img
              className="img-fluid"
              src={require("../../assets/img/other_img1.png")}
              alt=""
            />
          </div>
          <div className="col-md-4">
            <img
              className="img-fluid"
              src={require("../../assets/img/other_img1.png")}
              alt=""
            />
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
}
