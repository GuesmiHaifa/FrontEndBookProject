import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router';
import BooksServices from "../services/BooksServices";
import axios from "axios";

// import Card from "./Card";

// import AuthorService from "../services/AuthorService";
// import CardAuthor from "./CardAuthor";


const Zonelivres12 = () => {

    const api_book_url = "http://localhost:8090/api/books";
    const [books, setBooks] = useState([]);

    function getBooks(){

        axios.get(api_book_url)
        .then(({data}) => {
            setBooks(data);
        })
    }
    useEffect(() => {

        getBooks();
    }, []); 

    // let id_livre;
    // let api_book_id ;

    // api_book_id=BooksServices.getBookById(id_livre);


    const navigate= useNavigate ();
    const toBookpage = () =>   navigate('/books:id');
    

//**************************************************************************************************** */

        
return (

        <div>

            <div className="row m-3">
                
            
            {
                books.map(b => 
                    <div className="col-md-2" key ={books.id}  book={b}>

                        <div className="card">

                            <div className="card-header" >
                                <h6> {b.title}</h6>  
                            </div>
                            <div className="card-body">
                                <img className="card-img" src={b.picturUrl} alt="" height={200}/>
                            </div>
                            <div className="m-2">
                               {/* <button className="btn- btn btn-success" onClick={() => getBookById(b.id)} > Détails du livre  */}
                               <button className="btn- btn btn-success" onClick={toBookpage} > Détails du livre 
                                </button>
                            </div>
                        </div>
                        
                    </div>
                    
                    )


            }


</div>

        </div>
)

        };

export default Zonelivres12;



//     const api_book_url = "http://localhost:8090/api/books";
//     // const api_author_url = "http://localhost:8090/api/authors";

//     const [books, setBooks] =  useState([]);

//     const [authors, setAuthors] = useState([]);




//         function getBooks() {
//             axios.get(api_book_url)
//             .then(({data}) => {
//                 setBooks(data);
//             })
//         }
        


//         useEffect(() => {

//             getBooks();
//         }, []); 

        


// //    const getAuthors = () => {
// //     axios.get(api_author_url)
// //     .then(({data}) => {
// //         setAuthors(data);

// //    })
// // }

// //    useEffect ( () => {
// //     getAuthors();
// //    }, []) 



//     console.log("les ids ")
//    console.log(authors)

//    return (

//        <>
       
       
      

//         <div className="grid"> 
      
//         <h2> Quelques livres de Livre Troc</h2>
//          <br></br>     
     
//        {books.map(sh => <Card key={sh.id} title={sh.title}  img = {sh.image} availability={sh.availability} picturUrl={sh.picturUrl}  /> )}
    
//          </div>
   
//       </> 
       
//    )

// };



