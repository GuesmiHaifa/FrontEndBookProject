import React from 'react';
import { useNavigate } from 'react-router';
import '../style/Inscription.css';

const InscriptionC = () => {
    const navigate= useNavigate ();
    const toInscription = () =>  navigate('/inscriptionp');
    
    
    return (
        <div className='menu-ionscriptionC'>
            <div className='menu-inscription'>
          Nouveau sur Livres sans Frontières?  
        </div>

            <button onClick={toInscription
            } type='submit' className='btn btn-success btn-block' > Veuillez vous inscrire</button>
        
        </div>
    );
};

export default InscriptionC;