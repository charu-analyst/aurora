import React from 'react';
import './Footer.css';
import {useNavigate} from "react-router-dom"



const Footer = () => {
  let footerList=[
    {
      title:"Home",
      link:"/"
    },
    {
      title:"About Us",
      link:"about"
    },
    {
      title:"Classes",
      link:"classes"
    },
    {
      title:"Admission",
      link:"admission"
    },
    {
      title:"Contact Us",
      link:"contact"
    },
  ]
  const navigate=useNavigate()
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h2>Aurora International School</h2>
          <p>
            Providing quality education for students from Nursery to Class 8. 
            Our mission is to nurture future leaders with a strong foundation in academics and character.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul className="footer-links">
          {footerList.map((item)=>{
            return (<li onClick={()=>navigate(item.link)}>
              {item.title}
              </li>)
          })}
        </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>01, Aurora International School, Ghazipur,India</p>
          <p>Email: auroraInfo@gmail.com</p>
          <p>Phone: +91 8382802985</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2015 Aurora International School. All rights reserved.</p>
        <div className="footer-socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i> Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
