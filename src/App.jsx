import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import ShowCase from './components/ShowCase/ShowCase';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Education from './components/Education/Education';
import { Fade } from "react-awesome-reveal";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
        <Fade direction='up'delay={650} triggerOnce= {true} duration={900}>
        <Education />
        </Fade>
        <Fade direction='up'delay={750} triggerOnce= {true} duration={1000}>
        <ShowCase />
        </Fade>
        <Fade direction='up'delay={650} triggerOnce= {true} duration={900}>
        <Contact />
        </Fade>
      </div>
      <Footer />
    </>
  );
};

export default App