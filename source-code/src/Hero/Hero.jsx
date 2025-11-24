import React, { useState } from "react";
import "./Hero.css";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { motion } from "framer-motion";
import { Sparkles, Laptop, Mail, Phone, Github, Linkedin, Download } from "lucide-react";
import ContactPopup from "./Popup";


const Hero = ({ width, scrolled, PROFILE }) => {

    const [showPopup, setShowPopup] = useState(false);


    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section id="home" className="hero">
            <div className="hero-wrapper">
                {/* Floating background blobs */}
                <div className="hero-bg">
                    <motion.div
                        animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
                        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                        className="blob blob-blue"
                    />
                    <motion.div
                        animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
                        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                        className="blob blob-indigo"
                    />
                </div>
                <ContactPopup
                    isOpen={showPopup}
                    onClose={() => setShowPopup(false)}
                    profile={PROFILE}
                />

                <div className="hero-container">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        className="hero-grid"
                    >
                        {/* Left column */}
                        <div>
                            <motion.p
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="tagline"
                            >
                                <Sparkles size={16} /> Available for freelance & remote
                            </motion.p>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="hero-title"
                            >
                                {PROFILE.name}
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="hero-subtitle"
                            >
                                I build fast, clean interfaces and helpful tools. Focused on React,
                                mobile UIs, and practical developer workflows.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                style={{
                                    display: "flex",
                                    gap: "14px",
                                    flexWrap: "wrap",
                                    marginTop: "24px",
                                    justifyContent: "left",
                                }}
                            >
                                {/* Primary Gradient Button */}
                                <a
                                    href="#projects"
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "8px",
                                        padding: "12px 22px",
                                        borderRadius: "999px",
                                        background: "linear-gradient(135deg, #4facfe 0%, #0061ff 100%)",
                                        color: "#fff",
                                        fontWeight: "600",
                                        fontSize: "15px",
                                        textDecoration: "none",
                                        boxShadow: "0 6px 18px rgba(0, 97, 255, 0.3)",
                                        transition: "all 0.3s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 97, 255, 0.5)";
                                        e.currentTarget.style.transform = "translateY(-2px) scale(1.03)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.boxShadow = "0 6px 18px rgba(0, 97, 255, 0.3)";
                                        e.currentTarget.style.transform = "translateY(0) scale(1)";
                                    }}
                                >
                                    <Laptop size={18} /> View my work
                                </a>

                                {/* Outline Glass Button */}
                                <motion.button
                                    onClick={() => setShowPopup(true)}
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "8px",
                                        padding: "12px 22px",
                                        borderRadius: "999px",
                                        border: "2px solid #4facfe",
                                        background: "rgba(255, 255, 255, 0.1)",
                                        backdropFilter: "blur(6px)",
                                        color: "#0061ff",
                                        fontWeight: "600",
                                        fontSize: "15px",
                                        cursor: "pointer",
                                        transition: "all 0.3s ease",
                                    }}
                                    whileHover={{
                                        backgroundColor: "#0061ff",
                                        color: "#fff",
                                        boxShadow: "0 8px 24px rgba(0, 97, 255, 0.4)",
                                        scale: 1.05,
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <WhatsAppIcon /> Contact
                                </motion.button>

                                {/* Outline with Hover Gradient */}
                                <a
                                    href={PROFILE.resume}
                                    target="_blank"
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "8px",
                                        padding: "12px 22px",
                                        borderRadius: "999px",
                                        border: "2px solid #4facfe",
                                        background: "transparent",
                                        color: "#0061ff",
                                        fontWeight: "600",
                                        fontSize: "15px",
                                        textDecoration: "none",
                                        transition: "all 0.3s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background =
                                            "linear-gradient(135deg, #4facfe 0%, #0061ff 100%)";
                                        e.currentTarget.style.color = "#fff";
                                        e.currentTarget.style.boxShadow =
                                            "0 8px 24px rgba(0, 97, 255, 0.4)";
                                        e.currentTarget.style.transform = "translateY(-2px) scale(1.03)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = "transparent";
                                        e.currentTarget.style.color = "#0061ff";
                                        e.currentTarget.style.boxShadow = "none";
                                        e.currentTarget.style.transform = "translateY(0) scale(1)";
                                    }}
                                >
                                    <Download size={18} /> Request Resume
                                </a>
                            </motion.div>


                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="hero-contact"
                                style={width < 768 ? { display: "flex", flexDirection: "column" } : ""}
                            >
                                <a href={`mailto:${PROFILE.email}`}>
                                    <Mail size={16} /> {PROFILE.email}
                                </a>
                                <a href={`tel:${PROFILE.phone}`}>
                                    <Phone size={16} /> {PROFILE.phone}
                                </a>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7 }}
                                className="hero-contact"
                                style={width < 768 ? { display: "flex", flexDirection: "column", marginTop: 12 } : { marginTop: 12 }}
                            >
                                <a href={PROFILE.github} className="truncate" target="_blank">
                                    <Github size={20} /> {PROFILE.github}
                                </a>
                                <a href={PROFILE.linkedin} className="truncate" target="_blank">
                                    <Linkedin size={20} /> {PROFILE.linkedin}
                                </a>
                            </motion.div>
                        </div>

                        {/* Right column */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
                            className="hero-image"
                        >
                            <img

                                src="assets/Background3.webp"
                                alt="Desk setup"

                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>

        </section>
    );
};

export default Hero;
