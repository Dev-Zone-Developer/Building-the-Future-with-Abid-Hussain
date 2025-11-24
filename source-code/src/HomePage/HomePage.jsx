import { lazy } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "../Navbar/Navbar";

// Lazy imports
// const Nav = lazy(() => import("../Navbar/Navbar"));
const Hero = lazy(() => import("../Hero/Hero"));
const Projects = lazy(() => import("../Projects/Projects"));
const Skills = lazy(() => import("../Skills/Skills"));
const Reviews = lazy(() => import("../Reviews/Reviews"));
const AboutUs = lazy(() => import("../About/Aboutus"));


const HomePage = ({ width, scrolled, PROFILE, categories, setScrolled, activeId, showWhatsapp }) => {
  return (
    <>
      <Nav width={width} scrolled={scrolled} setScrolled={setScrolled} activeId={activeId} />
      <AnimatePresence>
        {scrolled && showWhatsapp && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            style={{ position: "fixed", bottom: 5, right: 5, zIndex: 99999, cursor: "pointer" }}
            onClick={() => window.open(PROFILE.whatsapp)}
          >
            <WhatsAppIcon style={{ fontSize: 50, color: "green" }} />
          </motion.div>
        )}
      </AnimatePresence>
      <Hero width={width} scrolled={scrolled} PROFILE={PROFILE} />

      <Projects PROFILE={PROFILE} />
      <AboutUs />
      <Skills categories={categories} />
      <Reviews width={width} />
    </>
  )
}

export default HomePage