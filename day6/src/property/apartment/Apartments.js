import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PropertyList from '../../components/PropertyList1';
import SearchBar from '../../components/SearchBar';
import onebhk from '../../assets/images/one-bhk-brown1.webp';
import onebhk1 from '../../assets/images/one-bhk-grey.jpeg';
import onebhk2 from '../../assets/images/one-bhk-orange.jpeg';
import twobhk1 from '../../assets/images/two-bhk-blue.jpeg';
import twobhk2 from '../../assets/images/two-bhk-red.jpeg';
import threebhk1 from '../../assets/images/three- bhk-grey.jpeg';
import threebhk2 from '../../assets/images/three-bhk-white.jpeg';
import fourbhk1 from '../../assets/images/four-bhk-orange.jpeg';
import fourbhk2 from '../../assets/images/four-bhk-red.jpeg';
import fivebhk1 from '../../assets/images/five-bhk-brown.jpeg';
import fivebhk2 from '../../assets/images/five-bhk-green.jpeg';
import fivebhk3 from '../../assets/images/five-bhk-white.jpeg';

const Apartments = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [properties, setProperties] = useState([
    { id: 1, title: 'Luxury villa With 1 BHK', description: 'A beautiful 1 BHK villa in brown Color', image: onebhk },
    { id: 2, title: 'Luxury villa With 1 BHK', description: 'A beautiful 1 BHK villa in Grey Color', image: onebhk1 },
    { id: 3, title: 'Luxury villa With 1 BHK', description: 'A beautiful 1 BHK villa in orange Color', image: onebhk2 },
    { id: 4, title: 'Luxury villa With 2 BHK', description: 'A beautiful 2 BHK villa in Blue Color', image: twobhk1 },
    { id: 5, title: 'Luxury villa With 2 BHK', description: 'A beautiful 2 BHK villa in Red Color', image: twobhk2 },
    { id: 6, title: 'Luxury villa With 3 BHK', description: 'A beautiful 3 BHK villa in Grey Color', image: threebhk1 },
    { id: 7, title: 'Luxury villa With 3 BHK', description: 'A beautiful 3 BHK villa in White Color', image: threebhk2 },
    { id: 8, title: 'Luxury villa With 4 BHK', description: 'A beautiful  4 BHK villa in Orange Color', image: fourbhk1 },
    { id: 9, title: 'Luxury villa With 4 BHK', description: 'A beautiful  4 BHK villa in Red Color', image: fourbhk2 },
    { id: 10, title: 'Luxury villa With 5 BHK', description: 'A beautiful 5 BHK villa in Brown Color', image: fivebhk1 },
    { id: 11, title: 'Luxury villa With 5 BHK', description: 'A beautiful  5 BHK villa in Green Color', image: fivebhk2 },
    { id: 12, title: 'Luxury villa With 5 BHK', description: 'A beautiful  5 BHK villa in White Color', image: fivebhk3 },
  
  ]);

  const filteredProperties = properties.filter(property =>
    property.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home">
      <Header />
      <div className="main-content">
        
        <div className="content">
          <SearchBar onSearch={setSearchTerm} />
          <PropertyList properties={filteredProperties} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Apartments;
