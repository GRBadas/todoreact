import axios from "axios";

const TODO_API_BASE_URL="http://localhost:8080/api/v1/todo";

class TodoService {

    getTasks(){
        return axios.get(TODO_API_BASE_URL);
    }

}