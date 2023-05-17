import React, { forwardRef } from "react";
import ContactFormFive from "./ContactFormFive";

const ContactThree = forwardRef(({ }, ref) => {
  return (
    <section className="contact-us t-0" ref={ref} id="contact" >
      <div className="container">
        <div className="text-center">
          <div>
            <h3 className="">Contact Info</h3>
            <address>
              <abbr title="Phone">Ph:</abbr> (+61) 499 118-097
              <br />
              <a href="mailto:#">ashrecoverycoach@gmail.com</a>
            </address>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ContactThree;
