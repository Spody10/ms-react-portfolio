import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header></Header>
      <main>
      <About />
      <Portfolio />
      </main>
      <Footer />
    </div>
  );
}

export default App;
