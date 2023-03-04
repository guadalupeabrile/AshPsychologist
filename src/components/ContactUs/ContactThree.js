import React, { forwardRef } from "react";
import ContactFormFive from "./ContactFormFive";

const ContactThree = forwardRef(({ }, ref) => {
  return (
    <section className="contact-us t-0" ref={ref} id="contact" >
      <div className="container">
        <div className="text-center">
          <div>
            <h3 className="">Postal Location</h3>
            <address>
              PO Box 16122 Toronto Eaton Centre,
              <br />
              220 The PATH Toronto, ON M5B 2H1, Canada
              <br />
              <abbr title="Phone">P:</abbr> (+1) 613 555-0105
              <br />
              <a href="mailto:#">alphadot@example.com</a>
            </address>
            <h3 className="r">Global Location</h3>
            <address>
              PO Box 16122 Toronto Eaton Centre,
              <br />
              220 The PATH Toronto, ON M5B 2H1, Canada
              <br />
              <abbr title="Phone">P:</abbr> (+1) 613 555-0105
            </address>
            <h3 className="">Work Timings</h3>
            <p>
              <span>Mon - Fri: 10am to 7pm</span> <br />
              <span>Sat : 8am to 12pm</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ContactThree;
