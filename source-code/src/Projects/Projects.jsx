import React, { useState } from "react";
import "./Projects.css";
import { motion } from "framer-motion";
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { defaultItems, PROFILE } from "../Data/Data";
import { Link } from "react-router-dom";

function Projects({ items = defaultItems, title = "My Projects" }) {
    const [hover, setHover] = useState(false);

    return (
        <section id="projects" className="projected">
            <div className="projects">
                <h2 className="projects__title">{title}</h2>

                <ul className="projects__grid">
                    {items.slice(0, 6).map((p, i) => (
                        <li key={i}>
                            <Link to={p.link} className="project-card">
                                <div className="project-card__icon" aria-hidden="true">
                                    <img
                                        src={p.img}
                                        className={p.img === "/assets/hadaf.webp" ? "hadafpay" : ""}
                                        alt={p.title}
                                        style={{ width: 45 }}
                                    />
                                </div>

                                <div className="project-card__body">
                                    <div className="project-card__header">
                                        <h3 className="project-card__title">{p.title}</h3>
                                        {p.tag && <span className="project-card__tag">{p.tag}</span>}
                                    </div>

                                    <motion.p
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.2 }}
                                        className="tagline"
                                        style={{ width: "fit-content", padding: "0.25rem 0.75rem" }}
                                    >
                                        {p.type}
                                    </motion.p>

                                    <p className="project-card__desc">{p.description}</p>

                                    {p.link && (
                                        <p className="project-card__link">View Project →</p>
                                    )}
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>

                <div style={{ textAlign: "center", marginTop: "20px" }}>
                    <a
                        href={PROFILE.linkedin}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                            padding: "6px 16px",
                            border: "2px solid blue",
                            borderRadius: "8px",
                            color: "blue",
                            textDecoration: "none",
                            fontWeight: "500",
                            transition: "all 0.3s ease",
                            overflow: "hidden",
                        }}
                    >
                        More Projects
                        <span
                            style={{
                                width: hover ? "20px" : 0,
                                display: "inline-flex",
                                transform: hover ? "translateX(0)" : "translateX(-10px)",
                                opacity: hover ? 1 : 0,
                                transition: "all 0.3s ease",
                            }}
                        >
                            <NorthEastIcon style={{ fontSize: 18 }} />
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Projects;
