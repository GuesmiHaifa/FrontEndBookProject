import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

import AuthorService from "../services/AuthorService";
import CardAuthor from "./CardAuthor";


const Zonelivres12 = () => {
 
    const api_book_url = "http://localhost:8090/api/books";
    // const api_author_url = "http://localhost:8090/api/authors";

    const [books, setBooks] =  useState([]);

    const [authors, setAuthors] = useState([]);




        function getBooks() {
            axios.get(api_book_url)
            .then(({data}) => {
                setBooks(data);
            })
        }
        


        useEffect(() => {

            getBooks();
        }, []); 

        


//    const getAuthors = () => {
//     axios.get(api_author_url)
//     .then(({data}) => {
//         setAuthors(data);

//    })
// }

//    useEffect ( () => {
//     getAuthors();
//    }, []) 



    console.log("les ids ")
   console.log(authors)

   return (

       <>
       
       
      

        <div className="grid"> 
      
        <h2> Quelques livres de Livre Troc</h2>
         <br></br>
       
     
       {books.map(sh => <Card key={sh.id} title={sh.title}  img = {sh.image} availability={sh.availability} picturUrl={sh.picturUrl}  /> )}
     

         </div>


  
   
      </> 
       
   )

};

export default Zonelivres12;






