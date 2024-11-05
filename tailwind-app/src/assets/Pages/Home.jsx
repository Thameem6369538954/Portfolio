import React from 'react'
import Header from '../../Components/Header';
import About from '../../Components/about';
import Skills from '../../Components/Skills';
import Projucts from '../../Components/Projucts';

const Home = () => {
  return (
    <div>
        <Header />
        <About />
        <Skills />
        <Projucts />  
    </div>
  );
}

export default Home