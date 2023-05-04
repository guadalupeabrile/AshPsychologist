import React, { forwardRef, useState } from "react";
import "react-image-lightbox/style.css";
import dataPortfolio from "../../data/Portfolio/portfolio-gym-data.json";
import Icofont from "react-icofont";

const classNameesGym = forwardRef((props, ref) => {

  return (
    <section id="classes" ref={ref}>
      <div className="container">
        <div className="row pb-5">
          <div className="col-sm-8 section-heading py-2">
            <h2 className="font-400 ">Is this you?</h2>
            <h4 className="text-uppercase mb-20">- Let's work together -</h4>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="portfolio-container text-center">
            <ul id="portfolio-grid" className="three-column">
              {dataPortfolio.map((item) => (
                <li
                  className="portfolio-item gutter-space"
                  data-groups='["all", "print", "branding"]'
                  key={item.id}
                >
                  <div className="portfolio">

                    <img
                      src={require("../../assets/images/" + item.image)}
                      alt=""
                    />

                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
});

export default classNameesGym;
