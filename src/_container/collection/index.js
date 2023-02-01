import Navigation from "../../_dashbord_components/_molecules/Navbar";
import React, { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import "./style.scss";

export default function CollectionPage() {
  const filterItems = [
    "All rooms",
    "Living room",
    "Bedroom",
    "Kitchen",
    "Dining room",
  ];
  const [minValue, set_minValue] = useState(25);
  const [maxValue, set_maxValue] = useState(75);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  return (
    <div>
      <div className="collection-banner">
        <Navigation />

        <div className="text-header container text-start">
          <h1 className="title">Select your favourite design Now ! </h1>
          <p className="text">
            Choose your favourite room and send it to us.<br></br>
            Send us photos and your home will be transformed.
          </p>
        </div>
      </div>

      {/*  */}
      <div className="filter-section">
        <div className="container">
          <div className="row">
            <p className="title-collection">Choose the type of the room :</p>
          </div>
          <div className="row p-0">
            <div className="col-md-10 p-0">
              {filterItems.map((item, index) => (
                <div key={index} type="button" class="btn btn-filter ms-2">
                  {item}
                </div>
              ))}
            </div>

            <div className="col-md-1 btn-options me-5">
              <img src={require("../../assets/icons/btn_options.png")} alt="" />
            </div>
            <div className="col-md-1 filter-icon">
              <img src={require("../../assets/icons/filter.png")} alt="" />
            </div>
          </div>
          <div className="row">
            <p className="title-collection">Your badget</p>
          </div>
          <div className="row">
            <div className="range-section col-md-5">
              <div className="d-flex justify-content-between">
                <span className="min-value">{minValue} $</span>
                <span className="max-value">{maxValue} $</span>
              </div>

              <MultiRangeSlider
                min={0}
                max={100}
                step={5}
                minValue={minValue}
                maxValue={maxValue}
                barInnerColor="rgb(151, 218, 10)"
                onInput={(e) => {
                  handleInput(e);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
