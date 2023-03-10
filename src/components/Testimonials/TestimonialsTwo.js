import React, { forwardRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeadingSection from "../HeadingSection/HeadingSection";
import TestimonialItem from "./TestimonialItem";
import testimonialsData from "../../data/Testimonials/testimonials-data.json";

const TestimonialsTwo = forwardRef(({ title, tagline }, ref) => {
  const settings = {
    dots: true,
    centerMode: true,
    centerPadding: "0",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slick testimonial",
  };
  return (
    <section className="" ref={ref} id="testimonials">
      <div className="container">
        <div className="row">
          <HeadingSection
            title={title}
            tagline={tagline}
            classAppend=""
          />
        </div>
        <div className="row">
          <div className="col-md-12">
            <Slider {...settings}>
              {testimonialsData.map((testimonial) => (
                <TestimonialItem
                  key={testimonial.id}
                  avatar={testimonial.avatar}
                  name={testimonial.name}
                  role={testimonial.role}
                >
                  {testimonial.text}
                </TestimonialItem>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
});

export default TestimonialsTwo;