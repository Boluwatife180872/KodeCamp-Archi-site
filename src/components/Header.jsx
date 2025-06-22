"use client";

import { Link, Menu } from "lucide-react";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <div className="logo-icon">PA</div>
            <RouterLink to={"/"} className="logo-text">
              DIGITAL PROJECT
            </RouterLink>
          </div>

          <nav className="nav">
            <ScrollLink
              className="nav-link"
              to="about"
              href="#about"
              smooth={true}
              duration={500}
            >
              ABOUT
            </ScrollLink>
            <RouterLink className="nav-link" to={"/gallery"}>
              GALLERY
            </RouterLink>
            <RouterLink className="nav-link" to={"/projects"}>
              PROJECTS
            </RouterLink>
            <a href="#certifications" className="nav-link">
              CERTIFICATIONS
            </a>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              href="#contacts"
              className="nav-link"
            >
              CONTACTS
            </ScrollLink>
          </nav>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        <nav className={`mobile-nav ${isMenuOpen ? "open" : ""}`}>
          <div className="mobile-nav-links">
            <a href="#about" className="nav-link">
              ABOUT
            </a>
            <a href="#gallery" className="nav-link">
              GALLERY
            </a>
            <a href="#projects" className="nav-link">
              PROJECTS
            </a>
            <a href="#certifications" className="nav-link">
              CERTIFICATIONS
            </a>
            <a href="#contacts" className="nav-link">
              CONTACTS
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
