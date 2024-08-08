import React from 'react';
import '../styles/PropertyDetail.css';

const PropertyDetail = ({ property }) => (
  <div className="property-detail">
    <h1>{property.title}</h1>
    <img src={property.image} alt={property.title} />
    <div className="property-info">
      <p>{property.description}</p>
      <p className="price">${property.price}</p>
      <p className="location">{property.location}</p>
    </div>
  </div>
);

export default PropertyDetail;
