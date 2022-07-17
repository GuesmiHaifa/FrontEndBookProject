import React from 'react';
import Connection from '../components/Connection';
import "../style/Homepage.css"

import Hero from '../components/Hero';
import Zonetexte1 from './../components/Zonetexte1';
import Zonetexte23 from '../components/Zonetexte23';
import Recherche from './../components/Recherche';


const Homepage = () => {
  <Homepage />
    return (
        <div className="App">
        <div id="logo">1 LOGO </div>
        <div id="recherche"> <Recherche /></div>
        <div id="connection"> <Connection/> </div>
        <div id="hero"> <Hero /> </div>
        <div id="inscription"> 5 INSCRIPTION </div>
        <div id="zone-texte-1"><Zonetexte1 /></div>
        <div id="categorie-1"> 7 ZONE DES CATEGORIES 1</div>
        <div id="zone-texte-2-3"><Zonetexte23 /></div>
        <div id="categorie-2">9 ZONE DES CATEGORIES 2</div>
        <div id="zone-livres-1-2"> 10 ZONE DES LIVRES 1 - 2</div>
        <div id="footer-1">11 FOOTER</div>
        <div id="footer-2">11 FOOTER</div>
      </div> 
    );
};

export default Homepage;