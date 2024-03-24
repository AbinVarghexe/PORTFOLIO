import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import ShowCase from './components/ShowCase/ShowCase';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
        <ShowCase />
        <Contact />
      </div>
    </>
  );
};

export default App