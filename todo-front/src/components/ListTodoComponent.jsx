import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoService from "../services/TodoService";

function ListTodoComponent() {
    const [task, setTask] = useState([]);
    const navigate = useNavigate;


useEffect(() => {
    TodoService.getTask().then((res) => {
      setTask(res.data);
    });
  }, []);

  return (
    <div> oi </div>
  );
  }
export default ListTodoComponent;