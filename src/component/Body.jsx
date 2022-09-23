import { useState } from "react";
import {STATUS, todoList} from '../constants'
import TodoItem from "./todoItem";
const Body = ()=> {
    const [todoItem,setTodoItems] = useState(todoList)

    const renderTodoItem =()=> {
        return todoList.map ((item,index)=>{
            console.log('index :',index);
            console.log('item:',item);
            return <TodoItem 
            key ={`${item.title}_${index}`}
            title = {item.title}
            creator ={item.creator}
            status ={item.status}
            description ={item.description}/>

    });
    };
    return <div className="containerBody">{renderTodoItem()}</div>

    
}
export default Body; 


