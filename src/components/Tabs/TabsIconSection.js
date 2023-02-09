import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import dataTabs from "../../data/TabsIconSection/tabs-icon-section.json";
import HeadingSection from "../HeadingSection/HeadingSection";
import Icofont from "react-icofont";

const TabsIconSection = ({ title, tagline, classes }) => {
  return (
    <section className={classes || ""}>
      <div className="container">
        <div className="row">
          <HeadingSection title={title} tagline={tagline} />
        </div>
        <div className="row mt-40 tabs-section">
          <div className="col-md-8">
            <Tabs className="icon-tabs">
              <TabList className="nav nav-tabs text-center">
                {dataTabs.map((tab) => (
                  <Tab key={tab.id} role="presentation">
                    <span>
                      <Icofont icon={tab.icon} />
                      <span className="tab-content text-center opacity-75">{tab.text}</span>
                    </span>
                  </Tab>
                ))}
              </TabList>

            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabsIconSection;
