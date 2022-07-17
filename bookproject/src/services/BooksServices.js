import axios from "axios";


class BooksServices {

   
    getBookById(id){

        return axios.get('http://localhost:8090/api/books/'+id);
    }
}

export default new BooksServices ();