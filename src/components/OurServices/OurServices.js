import React, { forwardRef } from "react";
import dataServices from "../../data/Services/our-services-two.json";
import dataServices2 from "../../data/Services/our-services-three.json";
import ServiceBox from "./ServiceBox";

const OurServices = forwardRef(({ serviceImg, title, tagline, font }, ref) => (
  <section id="how" ref={ref}>
    <div className="col-md-6 col-sm-4 bg-flex bg-flex-left">
      <div
        className="bg-flex-holder bg-flex-cover"
        style={{ backgroundImage: `url(${serviceImg})` }}
      ></div>
    </div>
    <div className="container">
      <div className="col-md-5 col-sm-7 offset-md-7 offset-sm-5">
        <h2
          className="font-700"
          data-aos={"fade-up"}
          data-aos-delay={100}
          data-aos-duration={1000}
        >
          {title}
        </h2>
        <h4
          className="mt-10 line-height-26 fw-light"
          data-aos={"fade-up"}
          data-aos-delay={200}
          data-aos-duration={1000}
        >
          {tagline}
        </h4>
        <h4
          className={"col-sm-8 mt-40 text-uppercase fw-semibold lh-base opacity-90" + (font ? font : "")}
          data-aos-delay={200}
          data-aos={"fade-up"}
          data-aos-duration={700}
        >
          Not sure where to start?
        </h4>
        <h4
          className="line-height-26 mb-40 fw-light"
          data-aos={"fade-up"}
          data-aos-delay={200}
          data-aos-duration={1000}
        >
          Here are a few things that I can suport you with:
        </h4>

        <div className="left-service-box pt-40 pb-20 row">

          <div className="col">
            {dataServices.map((service, i) => (
              <ServiceBox
                key={service.id}
                icon={service.icon}
                title={service.title}
                index={i}
              >
                {service.text}
              </ServiceBox>
            ))}
          </div>
          <div className="col">
            {dataServices2.map((service, i) => (
              <ServiceBox
                key={service.id}
                icon={service.icon}
                title={service.title}
                index={i}
              >
                {service.text}
              </ServiceBox>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
));

export default OurServices;
