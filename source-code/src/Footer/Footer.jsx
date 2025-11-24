import React, { useState } from "react";
import "./Footer.css";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Facebook } from "@mui/icons-material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Linkedin } from "lucide-react"; // Lucide has LinkedIn
import { PROFILE, webLinks } from "../Data/Data";
import { Link } from "react-router-dom";
import ContactPopup from "../Hero/Popup";


// Custom TikTok SVG since it's missing
function TikTokIcon({ style }) {
  return (
    <img
      src="/assets/tiktok.webp"
      alt="TikTok Profile Link"
      style={{ width: 32, height: 32, ...style }}
    />
  );
}

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <footer className="footer" id="footer">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <ContactPopup
          isOpen={showPopup}
          onClose={() => setShowPopup(false)}
          profile={PROFILE}
        />
        <div className="parent">
          <div className="child">
            <h2 style={{ marginBottom: 20 }}>AB Developers</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              placeat obcaecati possimus illum accusamus fuga iure nisi sed?
            </p>
            <button
              onClick={() =>
                window.open("https://wa.me/+923436544231", "_blank")
              }
              style={{
                display: "inline-flex",
                gap: 10,
                backgroundColor: "blue",
                color: "white",
                marginTop: 15,
              }}
              aria-label="Start Live Chat on WhatsApp"
            >
              <WhatsAppIcon aria-hidden="true" />
              Start Live Chat
            </button>
          </div>
          <div className="child">
            <div className="sub-child">
              <h3>Resources</h3>
              <Link to="/" aria-label="Portfolio">Portfolio</Link>
              <a href="/#projects" aria-label="Projects">Projects</a>
              <a href="/#skills" aria-label="Skills">Skills</a>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  setShowPopup(true);
                }}
                aria-label="Support"
              >
                Support
              </a>
            </div>

            <div className="sub-child">
              <h3>Links</h3>
              <Link to={webLinks.Sixtube} aria-label="6Tube App">6Tube App</Link>
              <Link to="" aria-label="Directory App">Directory App</Link>
              <Link to="/Disclaimer" aria-label="Disclaimer">Disclaimer</Link>
              <Link to="/privacy-policy" aria-label="Privacy Policy">Privacy Policy</Link>
            </div>

            <div className="sub-child">
              <h3>Community</h3>
              <a
                href={PROFILE.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Profile"
              >
                Facebook
              </a>
              <a
                href={PROFILE.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Channel"
              >
                YouTube
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                LinkedIn
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                GitHub
              </a>
            </div>

            <div className="sub-child">
              <h3>Contact Us</h3>
              <a
                href={`mailto:${PROFILE.email}`}
                className="truncate"
                aria-label={`Email: ${PROFILE.email}`}
              >
                {PROFILE.email}
              </a>
              <a
                href={`tel:${PROFILE.phone}`}
                aria-label={`Phone: ${PROFILE.phone}`}
              >
                {PROFILE.phone}
              </a>
              <a
                href={PROFILE.location}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Location"
              >
                Location
              </a>
            </div>
          </div>
        </div>
        <hr style={{ width: "98%" }} />
        <div className="authordata">
          <p>
            &copy; Copyright 2025, All rights Reserved by Abid Hussain
          </p>
          <div className="social-icons">
            <a
              href={PROFILE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook fontSize="large" color="primary" aria-hidden="true" />
            </a>
            <a
              href={PROFILE.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <YouTubeIcon className="youtube-icon" aria-hidden="true" />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={32} color="#0A66C2" aria-hidden="true" />
            </a>
            <a
              href={PROFILE.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <TikTokIcon className="tiktok-icon" style={{}} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
