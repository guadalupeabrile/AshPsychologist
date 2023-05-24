import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./../../components/Loader/Loader";
import dataStartup from "../../data/Slider/startup-business-data.json";
import serviceOneImg from "../../assets/images/img2.jpg";
import HeaderOne from "../../components/Header/HeaderOne";
import HeaderTwo from "../../components/Header/HeaderTwo";
import HeaderThree from "../../components/Header/HeaderThree";
import HeroVideo from "../../components/Hero/HeroVideo";
import dataCorporate from "../../data/Slider/corporate-business-data.json";
import HeroSliderSingle from "../../components/Hero/HeroSliderSingle";
import Welcome from "../../components/WelcomeSection/Welcome";
import OurServices from "../../components/OurServices/OurServices";
import OurServicesFour from "../../components/OurServices/OurServicesFour";
import CounterOne from "../../components/Counters/CounterOne";
import OurServicesTwo from "../../components/OurServices/OurServicesTwo";
import TestimonialsTwo from "../../components/Testimonials/TestimonialsTwo";
import BlogSlider from "../../components/Blog/BlogSlider";
import FooterOne from "../../components/Footer/FooterOne";
import Portfolio from "../../components/Portfolio/Portfolio";
import HeadingSection from "../../components/HeadingSection/HeadingSection";
import TabsIconSection from "../../components/Tabs/TabsIconSection";
import ContactThree from "../../components/ContactUs/ContactThree";
import ContactFormArquitectur from "../../components/ContactUs/ContactArchitecture";
import ClassesGym from "../../components/GymFitness/ClassesGym";

const StartupBusiness = () => {


  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const welcome = useRef();
  const how = useRef();
  const isYou = useRef();
  const about = useRef();
  const testimonials = useRef();
  const contact = useRef();

  const scrollToSection = (e, content) => {
    e.preventDefault();
    switch (content) {
      case "welcome":
        welcome.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "how":
        how.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "isYou":
        isYou.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        about.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "testimonials":
        testimonials.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contact.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
    }
  };

  return (
    <Loader>
      <HeaderThree scrollToSection={scrollToSection} />
      <HeroSliderSingle ref={welcome} data={dataCorporate} />
      <Welcome title="Hi, I'm Ash" tagline="Recovery Coach">
        Life can be overwhelming. I work with my clients to take back control of their lives and figure out what they need and how they're going to get it.
      </Welcome>
      <OurServices
        ref={how}
        title="How can I help?"
        tagline="We'll work together to set clear goals, figure out what's holding you back and navigate any challenges that arise along the way."
        serviceImg={serviceOneImg}
      />
      <ClassesGym
        ref={isYou}
        title="Is this what you're going through?"
        tagline="Let's work together"
      />
      {/* <TabsIconSection ref={isYou} title="Is this you?" tagline="Let's work together" /> */}
      <OurServicesFour
        ref={how}
        title="Boys' Club"
        tagline="Ash is passionate about supporting boys to grow into great men."
        serviceImg={serviceOneImg}
      />
      <OurServicesTwo
        ref={about}
        scrollToSection={scrollToSection}
        title="About Ash"
        tagline="" />
      {/* <Portfolio columns="4" layout="wide" filter="true">
        <HeadingSection title="Our Work" />
      </Portfolio> */}
      <TestimonialsTwo ref={testimonials} title="Testimonials" tagline="Empowered clients" />
      {/* <BlogSlider /> */}
      <ContactFormArquitectur
        ref={contact}
        title="Contact Me!"
        tagline="">
      </ContactFormArquitectur>
      {/* <FooterOne ref={contact} /> */}
    </Loader >
  );
};

export default StartupBusiness;
