import axios from "axios";

class CategoryService {
    getCategoryService() {

        return axios.get('http://localhost:8090/api/categories');
    }

}

export default new CategoryService();