import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

import Alert from "react-bootstrap/Alert";

const Zonetexte23 = () => {
  return (
    <div className="alert">
      <Alert variant="success">
        <Alert.Heading>
          <i>L'échange...comment ça marche?</i>
        </Alert.Heading>
        <p className="font-weight-light">
          Une fois que je suis inscrit, j'indique les livres que je possède en
          recherchant un livre et en cliquant sur le bouton "Je le possède".
          Lorsqu'un membre souhaite un de mes livres, je le lui expédie et je
          gagne <strong>les points correspondant à la valeur du livre</strong>. Avec mes points
          je commande les livres que je désire. Je garde les livres que je
          reçois car ils sont à moi.
        </p>
        <p class="text-muted">
          <a href="{CGU}" class="text-reset">
            en savoir plus{" "}
          </a>
          
        </p>
        <hr />
        <p className="mb-0">
          Donner un livre permet de redonner vie à un objet que l'on a apprécié
          (ou pas), en en faisant profiter quelqu'un d'autre, le tout sans coût
          pour l'environnement. Pour peu que l'on surmonte quelques barrières
          psychologiques, l'échange de livre est une évidence : tout le monde y
          gagne.
        </p>
      </Alert>
    </div>
  );
};

export default Zonetexte23;
