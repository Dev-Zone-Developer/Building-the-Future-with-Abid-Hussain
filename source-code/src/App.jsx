import React, { lazy, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { PROFILE, categories, webLinks } from "./Data/Data"

// import Footer from './Footer/Footer';
const Footer = lazy(() => import('./Footer/Footer'))
import { Calculation } from './HomePage/calculation';
import HomePage from './HomePage/HomePage';
import ScrollToId from './Scroll/Scroll';
const SixTube = lazy(() => import("./sixtube/SixTube"));
const PrivacyPolicy = lazy(() => import("./Components/Privacy/privacypolicy"));
const Disclaimer = lazy(() => import("./Components/Disclaimer/Disclaimer"))




const App = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const [showWhatsapp, setShowWhatsapp] = useState(true);

  Calculation({ width, setWidth, scrolled, setScrolled, activeId, setActiveId, showWhatsapp, setShowWhatsapp });


  return (
    <>
      <Router>
        <ScrollToId />
        <Routes>
          <Route path={webLinks.Sixtube} element={<SixTube />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path='/Disclaimer' element={<Disclaimer />} />
          <Route path='*' element={<HomePage width={width} scrolled={scrolled} PROFILE={PROFILE} categories={categories} setScrolled={setScrolled} activeId={activeId} showWhatsapp={showWhatsapp} />} />
        </Routes>
        <Footer width={width} />
      </Router>
    </>
  )
}

export default App