import React from 'react';
import Connection from '../components/Connection';
import "../style/Homepage.css"

const Homepage = () => {
    return (
        <div className="App">
        <div id="logo">1 LOGO </div>
        <div id="recherche"> 2 BARRE DE RECHERCHE</div>
        <div id="connection"> <Connection/> </div>
        <div id="hero"> 4 HERO BANNER </div>
        <div id="inscription"> 5 INSCRIPTION </div>
        <div id="zone-texte-1"> 6 ZONE DE TEXTE 1</div>
        <div id="categorie-1"> 7 ZONE DES CATEGORIES 1</div>
        <div id="zone-texte-2-3">8 ZONE DE TEXTE 2 - 3</div>
        <div id="categorie-2">9 ZONE DES CATEGORIES 2</div>
        <div id="zone-livres-1-2"> 10 ZONE DES LIVRES 1 - 2</div>
        <div id="footer-1">11 FOOTER</div>
        <div id="footer-2">11 FOOTER</div>
      </div>
    );
};

export default Homepage;