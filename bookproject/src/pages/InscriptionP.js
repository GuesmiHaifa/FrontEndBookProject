//contient le formulaire d'inscription 
//contient le formulaire d'inscription 
//la carde d'inscription ==Oumar
import axios from 'axios';
import React, { useState } from 'react';
import '../style/Inscription.css';

export default function InscriptionP(){
    const url ="http://localhost:8090/api/users/adduser"
    const [data, setData] = useState({
        username: "",
        firstName: "",
        nom: "",
        email: "",
        adresse: "",
        motDePasse: "",
        numéroDeTéléphone: "",
       

    })
function submit(e){
    e.preventDefault();
    axios.post(url, {
        username: data.username,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        adress: data.adress,
        password: data.password,
        numPhone: data.numPhone,
        
        
    })
    .then(res =>{
        console.log(res.data)
    })
}

function handle(e){
    const newdata={...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
}

    return(
        <div>
<div className='container'>

 <div>
     <h3><strong>Nouveau? On vous accompagne!</strong></h3>
     <h3 className='text-3xl text-success'>Veuillez remplir et valider le formulaire suivant</h3>
     </div> 

     <div>
     <p>L'inscription sur le site Livres Sans Frontières vous donne accès à de nombreux livres. Ces livres sont mis à disposition par d'autres utilisateurs.<br/>
     Pour pouvoir emprunter un livre il faut mettre au minium un livre vous appartenant à la disposition des autres.</p>
         </div>  
    <form onSubmit={(e) =>submit(e)} action="" className='mx-auto mt-60'  method="post">    

<div>
    <label htmlFor=''>Nom d'utilisateur</label>
    <input onChange={(e)=>handle(e)} id="username" value={data.username} type="username" className="form-control"/>
    
</div>

<div>
    <label htmlFor=''>Prenom</label>
    <input  onChange={(e)=>handle(e)} id="firstName" value={data.firstName} type="pfirstName" className="form-control"/>
    
</div> 

<div>
    <label htmlFor=''>Nom</label>
    <input  onChange={(e)=>handle(e)} id="lastName" value={data.lastName} type="lastName" className="form-control"/>
    
</div> 

<div>
    <label htmlFor=''>Email</label>
    <input  onChange={(e)=>handle(e)} id="email" value={data.email} type="email" className="form-control"/>
    
</div> 

<div>
    <label htmlFor=''>Mot de passe</label>
    <input  onChange={(e)=>handle(e)} id="password" value={data.mpassword} type="password" className="form-control"/>
    
</div> 

<div>
    <label htmlFor=''>Numéro de Téléphone</label>
    <input onChange={(e)=>handle(e)} id="numPhone" value={data.numPhone} type="numPhone" className="form-control"/>
    
</div> 

<div>
    <label htmlFor=''>Adresse</label>
    <input onChange={(e)=>handle(e)} id="adress" value={data.adress} type="adress" className="form-control"/>
    
</div> 


<div>
    <button className='btn btn-success btn-block mt-4'>
        Valider l'inscription
    </button>
</div>
        
    </form>
</div>
        </div>
    )
}