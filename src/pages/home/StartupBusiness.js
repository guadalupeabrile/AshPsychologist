import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./../../components/Loader/Loader";
import dataStartup from "../../data/Slider/startup-business-data.json";
import serviceOneImg from "../../assets/images/startup-bg-left.jpg";
import HeaderOne from "../../components/Header/HeaderOne";
import HeaderTwo from "../../components/Header/HeaderTwo";
import HeroVideo from "../../components/Hero/HeroVideo";
import dataCorporate from "../../data/Slider/corporate-business-data.json";
import HeroSliderSingle from "../../components/Hero/HeroSliderSingle";
import Welcome from "../../components/WelcomeSection/Welcome";
import OurServices from "../../components/OurServices/OurServices";
import CounterOne from "../../components/Counters/CounterOne";
import OurServicesTwo from "../../components/OurServices/OurServicesTwo";
import TestimonialsTwo from "../../components/Testimonials/TestimonialsTwo";
import BlogSlider from "../../components/Blog/BlogSlider";
import FooterOne from "../../components/Footer/FooterOne";
import Portfolio from "../../components/Portfolio/Portfolio";
import HeadingSection from "../../components/HeadingSection/HeadingSection";
import TabsIconSection from "../../components/Tabs/TabsIconSection";
import HeaderThree from "../../components/Header/HeaderThree";

const StartupBusiness = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Loader>
      <HeaderOne />
      <HeroSliderSingle data={dataCorporate} />
      <Welcome title="Hi, I'm Ash" tagline="Empowering you to become your best version">
        Life can be overwhelming. I empower my clients to take back control of their lives and figure out what they want and how they are going to get it.
      </Welcome>
      <OurServices
        title="How can I help?"
        tagline="We'll work together to set clear goals, figure out what's holding you back and work out how to move through challenges that arise."
        serviceImg={serviceOneImg}
      />
      <TabsIconSection title="Is this you?" tagline="Let's work together" />
      <OurServicesTwo title="About Ash" tagline="Part of your success" />
      {/* <Portfolio columns="4" layout="wide" filter="true">
        <HeadingSection title="Our Work" />
      </Portfolio> */}
      <TestimonialsTwo title="Testimonials" tagline="Empowered clients" />
      {/* <BlogSlider /> */}
      <FooterOne />
    </Loader>
  );
};

export default StartupBusiness;
