import React, { useState ,useEffect} from "react";
import axios from "axios";
import'../style/Zonelivre1Bis.css';


function Zonelivre1Bis({})  {


    const api_book_url = 'http://localhost:8090/api/books/7';
    const [book, setBook] = useState([]);



    function getBook(){

        axios.get(api_book_url)
        .then(({data}) => {
            setBook(data);
        })
    }
    useEffect(() => {

        getBook();
    }, []); 




return (

            <div className="Zone">
            <div id="Image_book">  <img src={book.picturUrl} alt=""/> </div>

            <div id="Text">
               <div className="Sub_Zone">
                <div id="details">
                <p> <h4 > {book.title} </h4> 
               
                <h5> En {book.language}</h5>
                <h6> Nombre de page : {book.pageNumber}</h6>
                <h6> Etat du livre  : {book.bookEtat}</h6>
                {book.availability}

                </p> 
                
                
                </div>
                <div id="boite">
                <div className="card">
                        <div className="card-header" >
                             Points de livres {book.pointBook}
                            </div>
                             <div className="card-body">
                              <form onSubmit="" id="emprunt">
                            <button > Je veux emprunter ce livre </button>
                         </form>
            </div>
                         </div>
                </div>
                <div id="description">
                <p> <h4> Description du livre : </h4>  { book.description } </p>
                </div>
               </div>
            </div>
            </div>
)
}


export default Zonelivre1Bis;