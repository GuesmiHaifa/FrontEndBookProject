import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Categorie1 = () => {

    const[categories,setCategories] = useState([]);

    useEffect(() => {
        axios
        .get('http://localhost:8090/api/categories')
        .then((res) => setCategories(res.data));
    },[]);
    
    //FONCTION DE TRI POUR ELIMINER LES DOUBLONS
    const sortedCategories = categories.reduce(
        (acc,cat) => 
            acc.includes(cat.categoryName) ? acc : acc.concat(cat.categoryName),
            []
    )

    return (
        <div>
            <ul>
                {sortedCategories.map((catName) =>
                (<li key={catName}>{catName}</li>
                ) )}
            </ul>
            
        </div>
    );
};

export default Categorie1;