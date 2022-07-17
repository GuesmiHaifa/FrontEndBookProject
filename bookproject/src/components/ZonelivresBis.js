import React, { useState ,useEffect} from "react";
import axios from "axios";


const ZonelivresBis =() => {


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




return (

        <div>

            <div className="row m-3">
                
            
            {
                books.map(b => 
                    <div className="col-md-2" key ={books.id}>

                        <div className="card">

                            <div className="card-header" >
                                <h6> {b.title}</h6>  
                            </div>
                            <div className="card-body">
                                <img className="card-img" src={b.picturUrl} alt="" height={200}/>
                            </div>
                            <div className="m-2">
                               <button className="btn- btn btn-success" > Détails de livre  </button>
                            </div>
                        </div>
                        
                    </div>
                    
                    )


            }


</div>

        </div>
)







}


export default ZonelivresBis;