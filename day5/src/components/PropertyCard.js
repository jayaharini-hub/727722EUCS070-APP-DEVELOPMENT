import React from 'react';
import '../styles/PropertyCard.css';

const PropertyCard = ({ property }) => (
  <div className="property-card">
    <img src={property.image} alt={property.title} />
    <div className="property-details">
      <h3>{property.title}</h3>
      <p>{property.description}</p>
    </div>
  </div>
);

export default PropertyCard;
