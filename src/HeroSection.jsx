import React from "react";

import { BsSearch } from "react-icons/bs";

function HeroSection() {
  return (
    <div className="text-center text-white hero-section">
      <div className="Hero">
        <h1>
          <b>zomato</b>
        </h1>
      </div>

      <div className="Hero1">
        <h2>Discover the best food & drink in Pune</h2>
      </div>

      <div className="search-container mt-4">
        <div className="input-group w-75 mx-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Search for restaurant, cuisine or a dish"
          />
          <button className="btn btn-primary">
            <BsSearch />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
