import React, { forwardRef } from "react";
import HeadingSection from "../HeadingSection/HeadingSection";
import ContactFormThree from "./ContactFormThree";

const ContactArchitecture = forwardRef(({ title, tagline, classAppend }, ref) => (
  <section className="contact-us" id="contact" ref={ref}>
    <div className="container">
      <div className="row">
        <HeadingSection title={title} tagline={tagline}>
          <address>
            <abbr title="Phone">P:</abbr> (+61) 499 118-097
            <br />
            <a href="mailto:ashrecoverycoach@gmail.com">ashrecoverycoach@gmail.com</a>
          </address>
        </HeadingSection>
      </div>
      <div className={"row " + (classAppend || "")}>
        <div className="col-md-8 offset-md-2">
          <ContactFormThree />
        </div>
      </div>
    </div>
  </section>
));

export default ContactArchitecture;
