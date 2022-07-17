import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const BookParam = () => {

    const api_url = 'http://localhost:8090/api/books/';

    const[book, setBook] = useState({});
    
    const{id} = useParams(); //Version raccourcis avec la decomposition

    const getBook = async () => {
        const {data} = await axios.get(api_url + id); 
        setBook(data);
    }

    useEffect(() => {
        getBook();
    }, [])

    return(
        <>
            {
                
                    <div>
                        <h1>Profile de {book.title}</h1>
                        <p>Email : {book.pointBook}</p>
                    </div>
                
            }
        </>
    )
}

export default BookParam;