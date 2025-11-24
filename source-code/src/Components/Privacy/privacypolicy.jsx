import React, { useEffect } from "react";
import "./Policy.css";
import { PROFILE } from "../../Data/Data";
import Nav from "../../Navbar/Navbar";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Nav width={window.innerWidth} />
      <div className="privacy-policy" style={{ paddingTop: "100px" }}>
        <h1>Privacy Policy — Building the Future with {PROFILE.name}</h1>
        <p><strong>Effective date:</strong> September 8, 2025</p>

        <p>
          This Privacy Policy explains how the website <strong>“Building the Future with {PROFILE.name}”</strong>
          and the apps published on it (for example, <strong>6Tube Video Downloader</strong> and
          <strong> Directory App</strong> etc) handle information.
        </p>

        <h2>1. Website</h2>
        <p>
          The website hosts information about projects and displays advertisements provided by
          third-party ad networks. These networks may collect data such as cookies, IP addresses,
          or browsing behavior to personalize and measure ads.
          We do not directly collect personal data on the website.
          For details, please review the privacy policies of the ad providers shown on the site.
        </p>

        <h2>2. Apps (6Tube, Directory App, and others)</h2>
        <p>
          Apps published on this website are designed to work on your device without collecting
          personal information. They do not require accounts, logins, or personal details.
        </p>
        <ul>
          <li>No names, emails, phone numbers, or payment details are collected.</li>
          <li>No contacts, messages, or files are uploaded to our servers.</li>
          <li>Permissions (such as storage access) are requested only when needed for app functionality, and are used locally on your device.</li>
        </ul>

        <h2>3. Data storage</h2>
        <p>
          Files created or downloaded through the apps are stored only on your device.
          We do not receive or keep copies of those files.
          Any data collected on the website comes from third-party ad providers, not us.
        </p>

        <h2>4. Cookies and technologies on the website</h2>
        <p>
          Third-party services may use cookies or similar technologies to deliver ads or measure
          traffic. You can manage or block cookies in your browser settings.
        </p>

        <h2>5. Children</h2>
        <p>
          The website and apps are not directed to children under 13.
          If you believe a child has submitted personal data, please contact us so we can take action.
        </p>

        <h2>6. Security</h2>
        <p>
          We use reasonable measures to keep the website secure.
          Apps process data only on your device, so security depends on your device and operating system.
          We cannot guarantee the practices of third-party ad providers.
        </p>

        <h2>7. Changes</h2>
        <p>
          This Privacy Policy may be updated from time to time.
          Any changes will be posted here with an updated effective date.
        </p>

        <h2>8. Contact</h2>
        <p>
          For questions, contact: <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
        </p>
      </div>
    </>
  );
};

export default PrivacyPolicy;
