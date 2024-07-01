import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <h2>About Us</h2>
        <p>Welcome to TravelX, your ultimate destination for personalized travel experiences!</p>
      </div>

      <div className="about-card">
        <h3>Our Mission</h3>
        <p>At TravelX, we believe that travel is more than just visiting new places; it's about creating unforgettable memories and connecting with different cultures. Our mission is to empower travelers like you to explore the world with confidence and ease.</p>
      </div>

      <div className="about-card">
        <h3>Our Values</h3>
        <ul>
          <li><strong>Customer-Centric:</strong> Your satisfaction is our priority. We tailor our services to meet your unique travel needs.</li>
          <li><strong>Reliability:</strong> Count on us for accurate information, transparent pricing, and reliable support throughout your journey.</li>
          <li><strong>Passion for Travel:</strong> We're passionate about exploring the world and sharing our expertise to help you create unforgettable travel experiences.</li>
          <li><strong>Community Engagement:</strong> We support sustainable tourism practices and contribute to local communities in the destinations we serve.</li>
        </ul>
      </div>

      <div className="about-card">
        <h3>Why Choose Us?</h3>
        <ul>
          <li><strong>Expert Guidance:</strong> Our team of travel experts provides personalized recommendations and insider tips to enhance your trip.</li>
          <li><strong>Customized Itineraries:</strong> We create bespoke itineraries tailored to your preferences, ensuring every detail meets your expectations.</li>
          <li><strong>24/7 Support:</strong> Enjoy peace of mind with round-the-clock customer support available before, during, and after your trip.</li>
          <li><strong>Global Reach:</strong> With a wide network of partners worldwide, we offer access to exclusive deals and unique experiences.</li>
        </ul>
      </div>

      <div className="about-card">
        <p>Thank you for choosing TravelX. Wherever your next adventure takes you, we're here to make it extraordinary!</p>
      </div>
    </div>
  );
};

export default About;
