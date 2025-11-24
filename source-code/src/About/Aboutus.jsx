import React from "react";
import "./AboutUs.css";
import { About } from "../Data/Data";

export default function AboutUs() {
  return (
    <section className="about" id="aboutus">
      <div className="about-row">
        {/* Left Text Content */}
        <div className="about-text">
          <h1 style={{textAlign: "center"}}>About Us</h1>
          <p>
            {About.aboutus_text}
          </p>

        </div>

        {/* Right Image */}
        <div className="about-image ">
          <img
            src="/assets/Framework2.webp"
            alt="About our company"
          />
        </div>
      </div>
    </section>
  );
}
