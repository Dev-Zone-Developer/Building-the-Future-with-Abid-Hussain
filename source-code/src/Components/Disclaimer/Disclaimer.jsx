import React, { useEffect } from "react";
import "./Disclaimer.css";
import { PROFILE } from "../../Data/Data";
import Nav from "../../Navbar/Navbar";

const Disclaimer = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Nav width={window.innerWidth} />
      <div className="disclaimer" style={{ paddingTop: "100px" }}>
        <h1>Disclaimer — Building the Future with {PROFILE.name}</h1>
        <p><strong>Effective date:</strong> September 8, 2025</p>

        <h2>1. Purpose of the Website and Apps</h2>
        <p>
          <strong>Building the Future with {PROFILE.name}</strong> and the apps published on it
          (such as <strong>6Tube Video Downloader</strong> and the <strong>Directory App</strong>)
          are created to share useful tools, ideas, and resources.
          Our goal is to provide content and apps that are simple, accessible, and helpful.
        </p>

        <h2>2. Informational Use</h2>
        <p>
          The content on the Website and the features in our apps are intended for general
          informational and educational purposes. While we work to keep information clear and
          accurate, some details may change over time. We encourage users to use their own
          judgment and, if needed, seek additional guidance before making decisions.
        </p>

        <h2>3. External Links and Resources</h2>
        <p>
          To give you more value, the Website or apps may include links to other websites or
          resources. These are provided for your convenience and learning.
          We select them with care, but we encourage you to review their content and policies
          so you know how they work.
        </p>

        <h2>4. Advertisements</h2>
        <p>
          The Website may display ads to help support free access to our projects.
          Ads are provided by third-party partners. We focus on making sure ads are safe and
          relevant, but we recommend exploring them thoughtfully and checking each advertiser’s
          own policies if you’d like more details.
        </p>

        <h2>5. Our Approach</h2>
        <p>
          We design our apps to work directly on your device without collecting your personal data.
          Files you create or download stay with you. We believe this approach builds trust and
          keeps your experience simple and private.
        </p>

        <h2>6. Updates to this Disclaimer</h2>
        <p>
          As our projects grow, we may update this Disclaimer to keep it clear and current.
          Any updates will appear here along with a new effective date.
        </p>

        <h2>7. Contact</h2>
        <p>
          We value transparency and welcome questions.
          If you’d like to reach out, contact us at:
          <a href={`mailto:${PROFILE.email}`}> {PROFILE.email}</a>
        </p>
      </div>
    </>
  );
};

export default Disclaimer;
