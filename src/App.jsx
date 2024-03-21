import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Works from './components/Works/Works';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
        <Works />
      </div>
    </>
  );
};

export default App