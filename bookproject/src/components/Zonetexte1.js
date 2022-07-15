import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import logoeco from "../images/logoeco.png";
import arbreeco from "../images/arbreeco.jpg";

const Zonetexte1 = () => {
  return (
    <div className="zone1">
      <h4>Lisez plus, moins cher tout en préservant notre planète...</h4>
      <div className="container1">
        <img src={arbreeco} style={{ width: 100, marginTop: -1 }}></img>
        <div className="Para">
          <p className="font-weight-bold">
            Facile et économique, le troc de livres d'occasion vous permet de
            lire de nouveaux titres toute l'année. Inscrivez-vous gratuitement
            et ajoutez vos livres à notre catalogue composé de milliers
            d'ouvrages.
          </p>

          <p className="font-weight-bold">
            Facile et économique, le troc de livres d'occasion vous permet de
            lire de nouveaux titres toute l'année. Inscrivez-vous gratuitement
            et ajoutez vos livres à notre catalogue composé de milliers
            d'ouvrages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Zonetexte1;
