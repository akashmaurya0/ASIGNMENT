import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setShowServices(false);
  };

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact-form");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };

  return (
    <nav className="nevigation-bar">
      <div className="nav-container">
        {/* Logo */}
        <div className="logo">MyLogo</div>

      
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className="route">

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={closeMenu}> <span className="text">Home</span></Link>
          </li>

          <li
            className="dropdown"
            onClick={() => setShowServices(!showServices)}
          >
            <span className="dropdown-toggle">
              Services <span className="arrow">▼</span>
            </span>
            
            <ul className={`dropdown-menu ${showServices ? "show" : ""}`}>
              <li><Link to="/services/ai" onClick={closeMenu}>AI</Link></li>
              <li><Link to="/services/ml" onClick={closeMenu}>ML</Link></li>
              <li><Link to="/services/quantum" onClick={closeMenu}>Quantum Computing</Link></li>
            </ul>
          </li>

          <li>
            <Link to="/blog" onClick={closeMenu}><span className="text">Blog</span></Link>
          </li>
        </ul>
        </div>
        

      

        <div className="button">
<button type="button" className="btn contact-btn" onClick={handleScrollToContact}>
          Contact
        </button>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
