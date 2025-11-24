import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  Smartphone,
  CheckCircle,
  ArrowDown,
  Play,
  Music,
  Video,
  Shield,
  Star
} from 'lucide-react';
import { PROFILE } from '../Data/Data';
import ContactPopup from "../Hero/Popup";
import './SixTube.css'; // Import the CSS file

// Main Component
const SixTube = () => {
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [info, setInfo] = useState(null);
  const [timer, setTimer] = useState(7);

  useEffect(() => {
    if (timer === 0) return;

    const interval = setTimeout(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(interval);
  }, [timer]);


  const features = [
    {
      title: 'Download Videos',
      description: 'Save videos from TikTok, Facebook, YouTube and more with just one click.',
      icon: <Download size={30} />
    },
    {
      title: 'Audio Extraction',
      description: 'Extract audio from any video and save as MP3 files.',
      icon: <Music size={30} />
    },
    {
      title: 'High Quality',
      description: 'Download videos in the highest available quality.',
      icon: <Video size={30} />
    },
    {
      title: 'Safe & Secure',
      description: 'No data collection. Your privacy is our priority.',
      icon: <Shield size={30} />
    },
    {
      title: 'Easy to Use',
      description: 'Simple and intuitive interface for everyone.',
      icon: <Star size={30} />
    },
    {
      title: 'Status Saver',
      description: 'Save status updates from WhatsApp and WhatsApp Business.',
      icon: <Smartphone size={30} />
    }
  ];

  const steps = [
    {
      title: 'Download',
      description: 'Click the download button to get the APK file',
      icon: <Download size={30} />
    },
    {
      title: 'Install',
      description: 'Open the APK file and install the application',
      icon: <ArrowDown size={30} />
    },
    {
      title: 'Enjoy',
      description: 'Open 6Tube and start downloading videos',
      icon: <Play size={30} />
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    async function fetchLatestVersion() {
      try {
        const res = await fetch("https://dev-zone-developer.github.io/6tube/config.json");
        const data = await res.json();

        // get all versions
        const versions = Object.keys(data.version);

        // sort numerically and get the latest
        const latest = versions.sort((a, b) => parseFloat(b) - parseFloat(a))[0];

        // prepare info
        setInfo({
          version: latest,
          url: data.version[latest],
          size: data.size[latest]
        });
      } catch (error) {
        console.error("Failed to load version info:", error);
      }
    }

    fetchLatestVersion();
  }, []); // runs only once on mount

  return (
    <div className="six-tube-container">
      <header className="six-tube-header">
        <h1 className="six-tube-logo" style={{ cursor: "pointer" }}>
          <img src="/assets/SixTube.webp" alt="SixTube App Icon" style={{ width: 40, height: 40 }} />
          6Tube
        </h1>
        <nav className="six-tube-nav">
          <a href="#features" className="six-tube-nav-button">Features</a>
          <a href="#howtoinstall" className="six-tube-nav-button">How to Install</a>
          <button className="six-tube-nav-button" onClick={() => setShowPopup(true)}>Support</button>
        </nav>
      </header>
      <ContactPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        profile={PROFILE}
      />
      <main className="six-tube-main-content">
        <section className="six-tube-hero-section">
          <div className="six-tube-hero-text">
            <h2 className="six-tube-hero-title">Download 6Tube App</h2>
            <p className="six-tube-hero-subtitle">
              The ultimate video downloader for Android. Download videos from TikTok, SnackVideo,
              Facebook, Likee, YouTube, WhatsApp Business, and WhatsApp Messenger.
              Extract audio from videos and save status updates with ease.
            </p>

            <motion.a
              href={timer === 0 && info ? info.url : "#"}
              download={timer === 0 && info ? "6Tube.apk" : undefined}
              className="six-tube-download-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                if (timer !== 0) e.preventDefault(); // stop clicks before timer ends
              }}
            >

              {timer === 0 && info ? (
                <>
                  <Download size={24} /> Download APK (v{info.version})
                </>
              ) : (
                <>Download ready in {timer}s</>
              )}
            </motion.a>


            <p style={{ marginTop: '15px', opacity: 0.8, fontSize: '0.9rem' }}>
              APK File • {info ? info.size : "Unknown"} • Android 5.0+
            </p>
          </div>

          <motion.div
            className="six-tube-hero-image six-tube-hero-image-animated"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{
              y: { duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
            }}
          >
            <div className="six-tube-phone-mockup">
              <div className="six-tube-phone-screen">
                <div className="six-tube-app-icon">
                  <img src="/assets/SixTube.webp" alt="SixTube App" style={{ width: 80, height: 80 }} />
                </div>
                <h3 style={{ margin: '10px 0' }}>6Tube</h3>
                <p style={{ opacity: 0.8, marginBottom: '30px' }}>Video Downloader</p>

                <div style={{
                  width: '80%',
                  height: '4px',
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  borderRadius: '10px',
                  marginBottom: '10px'
                }}>
                  <div style={{
                    width: `${downloadProgress}%`,
                    height: '100%',
                    backgroundColor: '#ff8a00',
                    borderRadius: '10px',
                    transition: 'width 0.3s ease'
                  }}></div>
                </div>
                <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>
                  {downloadProgress === 0 ? 'Ready to download' : `Downloading... ${downloadProgress}%`}
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="six-tube-features-section" id='features'>
          <h3 className="six-tube-section-title">
            <CheckCircle size={32} />
            App Features
          </h3>

          <div className="six-tube-feature-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="six-tube-feature-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  color: '#ff8a00'
                }}>
                  {feature.icon}
                </div>
                <h4 style={{ margin: '0 0 15px 0', fontSize: '1.3rem' }}>{feature.title}</h4>
                <p style={{ margin: 0, opacity: 0.8, lineHeight: 1.5 }}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="six-tube-how-to-section" id='howtoinstall'>
          <h3 className="six-tube-section-title">
            <ArrowDown size={32} />
            How to Install
          </h3>

          <div className="six-tube-steps-container">
            {steps.map((step, index) => (
              <div key={index} className="six-tube-step">
                <div className="six-tube-step-icon">
                  {step.icon}
                </div>
                <h4 style={{ margin: '0 0 15px 0', fontSize: '1.3rem' }}>Step {index + 1}: {step.title}</h4>
                <p style={{ margin: 0, opacity: 0.8 }}>{step.description}</p>
              </div>
            ))}
          </div>

          <div style={{
            backgroundColor: 'rgba(255, 138, 0, 0.1)',
            padding: '20px',
            borderRadius: '15px',
            marginTop: '40px',
            border: '1px solid rgba(255, 138, 0, 0.3)'
          }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: 0 }}>
              <Shield size={24} color="#ff8a00" />
              Enable Unknown Sources
            </h4>
            <p style={{ opacity: 0.8, margin: 0 }}>
              To install 6Tube, you need to enable "Unknown Sources" in your Android settings.
              Go to Settings → Security → Unknown Sources and enable it. This allows installation of apps outside the Play Store.
            </p>
          </div>
        </section>
      </main>


    </div>
  );
};

export default SixTube;