import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PropertyList from '../components/PropertyList';
import SearchBar from '../components/SearchBar';
// import FilterSidebar from '../components/FilterSidebar';
import '../styles/Home.css';


import villa from '../assets/images/villa.jpg';
import download from '../assets/images/download.jpeg';
import house from '../assets/images/house.jpeg';
import penthouses from '../assets/images/penthouses.jpeg';
import condo from '../assets/images/condo.jpeg';
import cottage from '../assets/images/cottage.jpeg';
import Duplex from '../assets/images/Duplex.jpeg'
import mansion from '../assets/images/mansion.jpeg'
import triplex from '../assets/images/triplex.jpeg'
import townhouse from '../assets/images/townhouse.jpeg'
import rowhouse from '../assets/images/rowhouse.jpeg'
import ranch from '../assets/images/ranch.jpeg'


const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [properties, setProperties] = useState([
    { id: 1, title: 'Luxury Villa', description: 'A beautiful villa', image: villa},
    { id: 2, title: 'Modern Apartment', description: 'A modern apartment', price: 750000, image: download },
    { id: 3, title: 'House', description: 'A House', price: 40000, image: house},
    { id: 4, title: 'Condo', description: 'A Condo', price: 980000, image: condo },
    { id: 5, title: 'Cottage', description: 'A Cottage', price: 700000, image: cottage },
    { id: 6, title: 'Duplex', description: 'A Duplex', price: 700000, image: Duplex },
    { id: 7, title: 'Triplex', description: 'A Triplex', price: 700000, image: triplex},
    { id: 8, title: 'Ranch', description: 'A Ranch', price: 700000, image: ranch },
    { id: 9, title: 'RowHouse', description: 'A RowHouse', price: 700000, image: rowhouse},
    { id: 10, title: 'Mansion', description: 'A Mansion', price: 700000, image: mansion },
    { id: 11, title: 'TownHouse', description: 'A TownHouse', price: 700000, image: townhouse },
    { id: 12, title: 'penthouse', description: 'A penthose', price: 700000, image: penthouses },
  ]);

  const filteredProperties = properties.filter(property =>
    property.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home">
      <Header />
      <div className="main-content">
        {}
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
