import React, { useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_sh2suam';
    const templateID = 'template_nv974r9';
    const publicKey = '1u3zmRCc5LIVK6KXE';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Maniprabha',
      message: message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent SUCCESSFULLY!', response);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.log('EMAIL SENDING FAILED...', error);
      });
  };

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

        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message here"
            rows="4"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
