import React from 'react';
import Footer2 from '../components/Footer2';
import Logo from '../components/Logo';
import Recherche from '../components/Recherche';
import ZonelivresBis from '../components/ZonelivresBis';
import '../style/Bookpage.css';
import '../style/Navigation.css'
import Navigation from '../components/Navigation';
import Zonelivre1Bis from '../components/Zonelivre1Bis';
const Bookpage = () => {
    return (
            <div className="App">
            <div id="logo"><Logo/> </div>
            <div id="recherche">
                <Navigation />
                <Recherche/></div>
            <div id="connection"> Connexion  </div>
            <div id="zonelivre1"> <Zonelivre1Bis/></div>
            <div id="inscription"> 5 INSCRIPTION </div>
            <div id="categorie-1"> Zone livres 2 Bis</div>
            <div id="categorie-2">9 ZONE DES CATEGORIES 2</div>
            <div id="zone-livres-1-2"> <ZonelivresBis/> </div>
            <div id="footer-1"> </div>
            <div id="footer-2"><Footer2/></div>
          </div>
        );
    };



export default Bookpage;