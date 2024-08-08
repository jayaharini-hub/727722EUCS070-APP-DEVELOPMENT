import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Property.css';

const PropertyCard = ({ property }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/property/${property.id}`);
  };

  return (
    <div className="property-card" onClick={handleClick}>
      <img src={property.image} alt={property.title} className="property-image" />
      <div className="property-details">
        <h3>{property.title}</h3>
        <p>{property.description}</p>
       
      </div>
    </div>
  );
};

export default PropertyCard;
