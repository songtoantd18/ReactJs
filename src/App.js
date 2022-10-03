import "./App.css";
import { useState } from 'react';
import Todolist from "./components/TodoList/TodoList";

function App() {
  const [todoList,setTodoList] =useState([
    {
      id:1,
      title: "ilove you"
    },
    {
      id:2,
      title: "i hate  you"
    },
    {
      id:3,
      title: "i dont care you"
    },
  ])
  return (
    <div>
      <Todolist todos={todoList}/>
  
    </div>
   
  );
}

export default App;
