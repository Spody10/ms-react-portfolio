import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact'; 

import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentPage, handlePageChange] = useState('About');
  const renderPage = () => {
    switch(currentPage) {
      case 'Portfolio':
        return <Portfolio></Portfolio>;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <Header handlePageChange={handlePageChange}></Header>
      <main>
      {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
