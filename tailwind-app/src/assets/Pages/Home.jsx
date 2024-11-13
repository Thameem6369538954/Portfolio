import React from 'react'
import Header from '../../Components/Header';
import About from '../../Components/about';
import Skills from '../../Components/Skills';
import Projucts from '../../Components/Projucts';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
        <Header />
        <About />
        <Skills />
        <Projucts />  
        <Footer />
    </div>
  );
}

export default Home