import React, { useState, useEffect, useCallback } from "react";
import Scrollspy from "react-scrollspy";
import Icofont from "react-icofont";
import DropdownMenu from "../Navs/DropdownMenu";
import SearchOverlay from "../../elements/SearchOverlay";
import AttributeNav from "../Navs/AttributeNav";
import MainLogo from "../MainLogo";
import CartSearchTop from "../Navs/CartSearchTop";
import dataNav from "../../data/Navbar/nav-construction.json";

const HeaderOne = ({ scrollToSection, type }) => {
  const [show, setShow] = useState(false);
  const [fixed, setFixed] = useState(false);
  const [collapse, setCollapse] = useState(false);

  const showMenu = () => {
    setCollapse(!collapse);
    const menu = document.getElementById("navbar-menu");
    collapse ? menu.classList.remove("in") : menu.classList.add("in");
  };

  const handleScroll = useCallback(() => {
    if (window.pageYOffset > 34) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  }, []);

  const resizeForm = useCallback(() => {
    var wHeight = window.innerHeight;
    const searchForm = document.getElementById("fullscreen-searchform");
    searchForm.style.top = wHeight / 2 + "px";
  }, []);

  const showSearchForm = (e) => {
    e.preventDefault();
    setShow(true);
    resizeForm();
  };

  const hideSearchForm = (e) => {
    e.preventDefault();
    setShow(false);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeForm);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", resizeForm);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [resizeForm, handleScroll]);

  return (
    <>
      <nav
        className={
          "navbar navbar-expand-lg navbar-light navbar-fixed white bootsnav on no-full " +
          (fixed || type === "white" ? "" : "navbar-transparent")
        }
      >
        <SearchOverlay show={show} onClick={hideSearchForm} />
        <div className="container">
          <button
            type="button"
            className={"navbar-toggler " + (collapse ? "collapsed" : "")}
            data-toggle="dropdown"
            data-target="#navbar-menu"
            onClick={showMenu}
          >
            <Icofont icon="navigation-menu" />
          </button>
          <MainLogo showMenu={showMenu} />
          <div
            className="navbar-collapse collapse"
            id="navbar-menu"
            aria-expanded="false"
          >
            <Scrollspy
              items={["welcome", "how", "isYou", "about", "testimonials", "contact"]}
              currentClassName="active"
              className="nav navbar-nav navbar-right nav-scrollspy-onepage"
              data-in="fadeInLeft"
            >
              {dataNav.map((item) => (
                <li key={item.id}>
                  <a
                    // href={item.link}
                    onClick={(e) => scrollToSection(e, item.link)}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </Scrollspy>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderOne;
