
import CGU from './components/CGU';
import React from 'react';
import Connection from '../components/Connection';
import "../style/Homepage.css"

const CGUpage = () => {

    return (
        <div className="App">
        <div id="logo">1 LOGO </div>
        <div id="recherche"> 2 BARRE DE RECHERCHE</div>
        <div id="connection"> <Connection/> </div>
        <div id="hero"> <CGU /> </div>
        <div id="inscription"> 5 INSCRIPTION </div>
        <div id="categorie-1"> 7 ZONE DES CATEGORIES 1</div>
        <div id="categorie-2">9 ZONE DES CATEGORIES 2</div>
        <div id="footer-1">11 FOOTER</div>
        <div id="footer-2">11 FOOTER</div>
      </div>
    );
};

export default CGUpage;