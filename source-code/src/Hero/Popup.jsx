import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Github, Linkedin, X } from "lucide-react";
import "./Popup.css";

const ContactPopup = ({ isOpen, onClose, profile }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="popup-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="popup-content"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.3 }}
          >
            <button className="popup-close" onClick={onClose}>
              <X size={20} />
            </button>
            <h2 className="popup-title">Contact Me</h2>
            <div className="popup-links">
              <a href={`mailto:${profile.email}`}>
                <Mail size={18} /> {profile.email}
              </a>
              <a href={`tel:${profile.phone}`}>
                <Phone size={18} /> {profile.phone}
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                <Github size={18} /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactPopup;
