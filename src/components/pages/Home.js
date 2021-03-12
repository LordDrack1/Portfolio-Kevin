import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import HeroSection from '../HeroSection';
import Languages from '../Languages';
import Form from '../Form';

function Home(){
    return(
    <>
    <HeroSection/>
    <Cards/>
    <Languages/>    
      <Form/>
    <Footer/>
    </>
)}
export default Home;