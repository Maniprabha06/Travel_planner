
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h2>Contact Us</h2>
        <p>
          Have questions, suggestions, or need assistance? Feel free to reach out to us. We are
          here to help you plan your next adventure.
        </p>
        
        <div className="contact-info">
          <ul>
            <li>
              <strong>Email:</strong> <a href="mailto:info@travelplanner.com">info@travelplanner.com</a>
            </li>
            <li>
              <strong>Phone:</strong> <a href="tel:+11234567890">+1 (123) 456-7890</a>
            </li>
            <li>
              <strong>Address:</strong> 123 Travel Ave, Wanderland, WL 56789
            </li>
          </ul>
        </div>

        <form className="contact-form">
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />

          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Write your message here" rows="4" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
