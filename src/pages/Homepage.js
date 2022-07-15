import React from 'react';
import Logo from '../components/Logo';
import Recherche from '../components/Recherche';
import Zonelivres12 from '../components/Zonelivres12';
import Footer1 from '../components/Footer1';
import Footer2 from '../components/Footer2';
import "../style/Homepage.css"

const Homepage = () => {
    return (
        <div className="App">
        <div id="logo"><Logo/> </div>
        <div id="recherche"> 
          <div className='header'>
            <h1> Livre Troc </h1>
          </div>
          <div className='header'>
                    <Recherche/></div>
          </div>
 
        <div id="connection"> Connexion </div>
        <div id="hero"> 4 HERO BANNER </div>
        <div id="inscription"> 5 INSCRIPTION </div>
        <div id="zone-texte-1"> 6 ZONE DE TEXTE 1</div>
        <div id="categorie-1"> 7 ZONE DES CATEGORIES 1</div>
        <div id="zone-texte-2-3">8 ZONE DE TEXTE 2 - 3</div>
        <div id="categorie-2">9 ZONE DES CATEGORIES 2</div>
        <div id="zone-livres-1-2"> 
          
        <Zonelivres12/> </div>
        <div id="footer-1"></div>
        <div id="footer-2"><Footer2/></div>
      </div>
    );
};

export default Homepage;