import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PropertyList from '../components/PropertyList';
import SearchBar from '../components/SearchBar';
import FilterSidebar from '../components/FilterSidebar';
import '../styles/Home.css';

// Import images
import villa from '../assets/images/villa.jpg';
import download from '../assets/images/download.jpeg';
import house from '../assets/images/house.jpeg';
import penthouses from '../assets/images/penthouses.jpeg';
import condo from '../assets/images/condo.jpeg';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [properties, setProperties] = useState([
    { id: 1, title: 'Luxury Villa', description: 'A beautiful villa', image: villa},
    { id: 2, title: 'Modern Apartment', description: 'A modern apartment', price: 750000, image: download },
    { id: 2, title: 'House', description: 'A House', price: 40000, image: house},
    { id: 2, title: 'Condo', description: 'A Condo', price: 980000, image: condo },
    { id: 2, title: 'penthouse', description: 'A penthouse', price: 700000, image: penthouses },
  ]);

  const filteredProperties = properties.filter(property =>
    property.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home">
      <Header />
      <div className="main-content">
        <FilterSidebar />
        <div className="content">
          <SearchBar onSearch={setSearchTerm} />
          <PropertyList properties={filteredProperties} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
