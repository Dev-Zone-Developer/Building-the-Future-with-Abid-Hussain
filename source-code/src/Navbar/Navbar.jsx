import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Nav = ({ width, scrolled, setScrolled, activeId }) => {

    const [clicked, setClicked] = useState(false);



    function handleClick() {
        setClicked(!clicked);
    }

    const links = [
        { href: "/#home", label: "Home" },
        { href: "/#projects", label: "Projects" },
        { href: "/#aboutus", label: width < 500 ? "About" : "About Us" },
        { href: "/#skills", label: "Skills" },
        { href: "/#testimonials", label: "Reviews" }
    ];

    return (
        <>
            {/* /* Full width navbar  */}
            {!scrolled && (
                <motion.div
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="navbar-wrapper full"
                    style={{ width: width }}
                >

                    <nav className="full-nav">
                        <div className="navbar">

                            <img src="assets/user.webp" alt="Header" className="navbar-logo" />

                            {width >= 769 ? (
                                <div className="navbar-links">
                                    {links.map((i) => (
                                        <motion.div
                                            key={i.href}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Link
                                                to={i.href}
                                                className={
                                                    (activeId === i.href.replace("/#", "") && width < 768) || i.href === "/#home"
                                                        ? "active-link"
                                                        : ""
                                                }
                                                style={{ textDecoration: "none" }}
                                            >
                                                {i.label}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                            ) : (
                                <IconButton onClick={() => setClicked(!clicked)}>
                                    <MenuIcon fontSize="large" sx={{ color: "blue" }} />
                                </IconButton>
                            )}
                        </div>
                    </nav>
                </motion.div>
            )}

            {/* /* Compact navbar (with active link highlight)  */}
            {scrolled && (
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="navbar-wrapper compact"
                    style={{ width: width }}
                >
                    <motion.nav
                        className="navbar compact-nav fancy-border"
                        style={{ width: "fit-content", padding: "12px" }}
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {links.map((i) => (
                            <motion.div
                                key={`scroll-${i.href}`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    to={i.href}
                                    className={activeId === i.href.replace("/#", "") ? "active-link" : ""}
                                    style={{ textDecoration: "none" }}
                                >
                                    {i.label}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.nav>
                </motion.div>
            )}

            <Drawer
                anchor="right"
                open={clicked}
                onClose={() => setClicked(false)}
                disableEnforceFocus
                disableAutoFocus
            >
                <div style={{ width: 250, padding: 16 }}>
                    {/* Close Button */}
                    <IconButton onClick={() => setClicked(false)}>
                        <ClearIcon fontSize="large" sx={{ color: "blue" }} />
                    </IconButton>

                    <h3 style={{ marginTop: "10px" }}>Menu</h3>

                    {/* Drawer Links */}
                    <div className="drawer-links">
                        {links.map((value) => (
                            <motion.a
                                key={`drawer-${value.href}`}
                                href={value.href}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={
                                    activeId === value.href.replace("#", "")
                                        ? "active-link"
                                        : ""
                                }
                            >
                                {value.label}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </Drawer>

        </>
    );
};

export default Nav;