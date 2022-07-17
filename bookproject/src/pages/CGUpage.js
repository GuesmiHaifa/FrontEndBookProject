

import React from 'react';
import Connection from '../components/Connection';
import "../style/Homepage.css"
import CGUBook from './../components/CGUBook';
import Hero from './../components/Hero';


const CGUpage = () => {

    return (
        <div className="App">
        
        <div id="recherche"> 2 BARRE DE RECHERCHE</div>
        <div id="hero"> <Hero /> </div>
        <div id="connection"><Connection/> </div>
        <div id="cgu"> <CGUBook /> </div>
        
      </div>
    );
};

export default CGUpage;