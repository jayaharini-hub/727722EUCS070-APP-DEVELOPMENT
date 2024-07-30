import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PropertyDetail from '../components/PropertyDetail';
import '../styles/PropertyPage.css';

const PropertyPage = () => {
  const { id } = useParams();
  const property = {
    // Sample data
    id,
    title: 'Luxury Villa',
    description: 'A beautiful villa',
    image: '/assets/images/villa.jpg',
    location: '123 Main St, Los Angeles, CA',
  };

  return (
    <div className="property-page">
      <Header />
      <PropertyDetail property={property} />
      <Footer />
    </div>
  );
};

export default PropertyPage;
