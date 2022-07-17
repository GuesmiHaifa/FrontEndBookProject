import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CGU = () => {
  return (
 <>
          <h2>Conditions Générales d'Utilisation (CGU) ..</h2>
          <h4>le prêt avec retour</h4>
          <p className="font-weight-bold">
            le prêt avec retour nécessite que le livre revienne au prêteur, le
            retour doit être déclenché par l’emprunteur et confirmé par le
            prêteur. Si le livre est retenu par l'emprunteur, ce dernier perd un
            solde de points équivalent à la valeur du livre (la caution au
            prêt), ce solde sera crédité au compte du prêteur.
          </p>
          <h4>le prêt sans retour</h4>
          <p className="font-weight-bold">
            le prêt sans retour nécessite que le livre soit remis en circulation
            (à nouveau disponible au prêt). Le compte du prêteur zéro est
            crédité d’un nombre de points déterminé en fonction de la valeur du
            livre). L’emprunteur devra perdre des points en décidant de ne pas
            remettre le livre en circulation.
          </p>
          <h2>LES conditions d'un emprunt</h2>
          <p className="font-weight-bold">
            Pour emprunter, il faut d’abord avoir un solde de points suffisant,
            la demande doit être envoyée par l’emprunteur au prêteur, puis elle
            devra être validée par ce dernier. L’emprunteur qui ne respecte pas
            les conditions imposées perdra des points à conditions qu'il ne rend
            pas le livre dans les délais
          </p>
          <h2>LES CONDITIONS D’UN DÉPÔT</h2>
          <p className="font-weight-bold">L’utilisateur doit préciser:</p>
          <ol>
            <li>le type de dépôt qu’il souhaite faire (avec ou sans retour)</li>
            <li>l’état physique du livre </li>
            <p className="font-weight-bold">Ces informations serviront à déterminer le nombre de points à créditer.</p>
          </ol>

 </>
  );
};

export default CGU;
