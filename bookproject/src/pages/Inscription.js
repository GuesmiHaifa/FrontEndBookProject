import React from 'react';
import Footer2 from '../components/Footer2';
import Logo from '../components/Logo';
import Recherche from '../components/Recherche';
import '../style/Inscription.css';
import '../style/Navigation.css'
import Navigation from '../components/Navigation';

const Inscription = () => {
    return (
            <div className="App">
            <div id="logo"><Logo/> </div>
            <div id="recherche">
                {/* <h1> Livre Troc </h1> */}
                <Navigation/>
                <Recherche/></div>
            <div id="connection"> Connexion  </div>
            <div id="zonelivre1"> Zone Livres 1 Bis </div>
            <div id="inscription"> 5 INSCRIPTION </div>
            <div id="categorie-1"> </div>
            <div id="categorie-2">9 ZONE DES CATEGORIES 2</div>
            <div id="zone-livres-1-2"> Formulaire </div>
            <div id="footer-1"> </div>
            <div id="footer-2"><Footer2/></div>
          </div>

    );
};

export default Inscription;