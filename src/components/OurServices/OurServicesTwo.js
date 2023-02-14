import React, { forwardRef } from "react";
import serviceImg from "../../assets/images/startup-bg-right.jpg";

const OurServicesTwo = forwardRef(({ title, tagline }, ref) => (
  <section className="white-bg" ref={ref} id="about" >
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
        <div data-aos={"fade-up"} data-aos-delay={300} data-aos-duration={1000}>
          <p className="mt-20">
            Ash has experiencing with International clients who are on a path to recovery. Some of them lack purpose in their career, are challenged with depression, are struggling with a divorce or struggle to find the motivation to take back control of their life. Others want to find more depth in their relationships with friends and family.
          </p>
          <p>
            Ash has an empathetic approach, he is sensitive to your needs and holds your hand whilst he walks with you on your path to recovery. It can be a scary journey, one that he knows too well. He has experienced loss, depression, career changes, relationship breakups and loss of identity and knows how to take back control of your life when it all falls apart. He has years of experience mentoring and coaching high performing individuals and also has extensive experience working with individuals who are on the NDIS.
          </p>
          <p>
            Ash is often found at the beach surfing, socialising with his friends, reading a book or spending time with his partner.
          </p>
          <p>
            As your life coach, I will help you to to build a better and more meaningful life.
          </p>
          <p>
            We will explore what's holding you back, who you want to be and how we're going to get you there. I'll be by your side, helping you to navigate this wonderful journey that you're about to embark on.
          </p>
          <p>
            You'll learn to tap into your intuition and emotional navigation system and use this to get what you want.
          </p>
        </div>
        <p
          className="mt-30"
          data-aos={"fade-up"}
          data-aos-delay={400}
          data-aos-duration={1000}
        >
          <a
            href={`${process.env.PUBLIC_URL}/service-simple`}
            className="btn btn-color btn-circle"
          >
            Contact Me!
          </a>
        </p>
      </div>
    </div>
  </section>
));

export default OurServicesTwo;
