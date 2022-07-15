import axios from "axios";


class AuthorService {

   
    getAuthorsByIdBook(id){

        return axios.get('http://localhost:8090/api/authors/books/'+id);
    }
}

export default new AuthorService ();