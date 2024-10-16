import React, { useState } from "react";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for toggling menu visibility
  const navigate = useNavigate();

  const navList = [
    { title: "Home", link: "/" },
    { title: "About Us", link: "about" },
    { title: "Classes", link: "classes" },
    { title: "Admission", link: "admission" },
    { title: "Contact Us", link: "contact" },
  ];

  const handleToggle = () => {
    setIsOpen(!isOpen); // Toggle the state for the menu
  };
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="Aurora International School Logo" />
        {/* Hamburger Menu Icon */}
        <div className="hamburger" onClick={handleToggle}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h1>Aurora International School</h1>
      </div>
    {/* Links */}
    <ul className={`navbar-links ${isOpen ? 'show' : ''}`}>
    {navList.map((item, index) => (
      <li key={index} onClick={() => navigate(item.link)}>
        <p>{item.title}</p>
      </li>
    ))}
  </ul>
    </nav>
  );
};

export default Navbar;
