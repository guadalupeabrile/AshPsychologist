import React, { forwardRef } from "react";
import serviceImg from "../../assets/images/ash.JPG";
import Scrollspy from "react-scrollspy";

const OurServicesTwo = forwardRef(({ title, tagline, scrollToSection }, ref) => (
  <section className="" ref={ref} id="about" >
    <div className="col-md-6 col-sm-4 bg-flex bg-flex-right">
      <div
        className="bg-flex-holder bg-flex-cover"
        style={{ backgroundImage: `url(${serviceImg})` }}
      ></div>
    </div>
    <div className="container">
      <div className="col-md-5 col-sm-7">
        <h2
          className="font-700"
          data-aos={"fade-up"}
          data-aos-delay={100}
          data-aos-duration={1000}
        >
          {title}
        </h2>
        <h4
          className="mt-10 line-height-26"
          data-aos={"fade-up"}
          data-aos-delay={200}
          data-aos-duration={1000}
        >
          {tagline}
        </h4>
        <div data-aos={"fade-up"} data-aos-delay={300} data-aos-duration={1000} >
          <p className="mt-20 text-dark">
            Ash has extensive experience supporting others who are on a path to recovery. He works collaboratively with his clients, helping them to achieve optimal mental health and spiritual well being.
          </p>
          <p className="text-dark">
            It can be a scary journey, and Ash's lived experience along with his gentle approach, help to unshackle the chains that hold his clients back.
          </p>
          <p className="text-dark">
            Ash has spent the last decade coaching high performing teams, mentoring boys with behaviour challenges, running workshops focused on emotional intelligence and supporting individuals with psychosocial challenges. He also runs men's groups, online and in-person, focused on emotional and spiritual growth.
          </p>
          <p className="text-dark">
            Ash is a certified life coach and he has completed his Bachelor of Psychological Science. He has also completed leadership trainings and workshops embedded in rites of passage for boys along with emotional training through Evryman.
          </p>
        </div>
        <p
          className="mt-30"
          data-aos={"fade-up"}
          data-aos-delay={400}
          data-aos-duration={1000}
        >
          <Scrollspy
          >
            <a
              className="btn btn-color btn-circle"
              onClick={(e) => scrollToSection(e, "contact")}
            >
              Contact Me!
            </a>
          </Scrollspy>
        </p>
      </div>
    </div>
  </section>
));

export default OurServicesTwo;
