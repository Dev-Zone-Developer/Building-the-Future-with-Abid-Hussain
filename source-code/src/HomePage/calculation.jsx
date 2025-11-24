import React, {useEffect, useState} from "react";
export const Calculation = ({width, setWidth,scrolled, setScrolled, activeId, setActiveId, showWhatsapp, setShowWhatsapp}) => {
    useEffect(() => {
        const handleresize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleresize);
        return () => {
            window.removeEventListener("resize", handleresize);
        }
    }, [])
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;

            // Hide WhatsApp when near bottom
            if (scrollTop + windowHeight >= docHeight - 100) {
                setShowWhatsapp(false);
            } else {
                setShowWhatsapp(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    useEffect(() => {
        const sections = document.querySelectorAll("section"); // each section has unique id
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.4, // 60% of section visible to be considered active
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id);
                }
            });
        }, options);

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

}