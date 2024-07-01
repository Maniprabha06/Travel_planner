import React from 'react';
import { useParams } from 'react-router-dom';
import './DestinationDetails.css';

const destinations = [
  // Same destinations array from Destinations.js
];

const DestinationDetails = () => {
  const { id } = useParams();
  const destination = destinations.find((dest) => dest.id === parseInt(id));

  if (!destination) {
    return <div>Destination not found</div>;
  }

  return (
    <div className="destination-details">
      <img src={destination.image} alt={destination.title} className="destination-image" />
      <h2>{destination.title}</h2>
      <p>{destination.description}</p>
      <button className="book-button">Book Now</button>
    </div>
  );
};

export default DestinationDetails;
