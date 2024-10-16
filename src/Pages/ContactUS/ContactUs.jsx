import React from 'react';
import './ContactUs.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>If you have any questions, feel free to reach out to us!</p>

        <div className="contact-details">
          <p><strong>Address:</strong> 01, Aurora International School, Ghazipur,India</p>
          <p><strong>Email:</strong> auroraInfo@gmail.com</p>
          <p><strong>Phone:</strong> +91 8382802985</p>
        </div>

        {/* Optionally, add a map here using Google Maps or another service */}
      </div>

      <div className="contact-form">
        <h3>Send Us a Message</h3>
        <form>
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Your Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
