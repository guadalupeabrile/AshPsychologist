import React from "react";
import dataSocial from "../../data/Social/social-footer.json";
import Icofont from "react-icofont";

const FooterCopyright = () => (
  <div className="footer-copyright">
    <div className="container text-center">
      <div>
        <div className="text-center">
          <ul className="social-media">
            {dataSocial.filter((v, i) => i < 5).map((item) => (
              <li key={item.id}>
                <a href={item.link}>
                  <Icofont icon={item.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default FooterCopyright;
