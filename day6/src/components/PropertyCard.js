import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/PropertyCard.css';

const PropertyCard = ({ property }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/property/${property.id}`);
  };

  return (
    <div className="property-card1" onClick={handleClick}>
      <img src={property.image} alt={property.title} className="property-image1" />
      <div className="property-details1">
        <h3>{property.title}</h3>
        <p>{property.description}</p>
       
      </div>
    </div>
  );
};

export default PropertyCard;
