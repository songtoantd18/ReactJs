
 import TodoItem from "./todoItem";
 import { STATUS } from "../constants";
const Body = ()=> {
    const { NEW, DOING, DONE } = STATUS; 
    const descriptionData = 
    'This is a task, This is a task, This is a task, This is a task, This is a task.'; 
    const todoList = [ 

        { 
    
          title: 'Task 1', 
    
          creator: 'Loc', 
    
          status: NEW, 
    
          description: descriptionData, 
    
        }, 
    
        { 
    
          title: 'Task 2', 
    
          creator: 'Loc', 
    
          status: DOING, 
    
          description: descriptionData, 
    
        }, 
    
        { 
    
          title: 'Task 3', 
    
          creator: 'Loc', 
    
          status: DONE, 
    
          description: descriptionData, 
    
        }, 
    
        { 
    
          title: 'Task 4', 
    
          creator: 'Loc', 
    
          status: NEW, 
    
          description: descriptionData, 
    
        }, 
    
        { 
    
          title: 'Task 5', 
    
          creator: 'Loc', 
    
          status: DOING, 
    
          description: descriptionData, 
    
        }, 
    
        { 
    
          title: 'Task 6', 
    
          creator: 'Loc', 
    
          status: NEW, 
    
          description: descriptionData, 
    
        }, 
    
        { 
    
          title: 'Task 7', 
    
          creator: 'Loc', 
    
          status: NEW, 
    
          description: descriptionData, 
    
        }, 
    
        { 
    
          title: 'Task 8', 
    
          creator: 'Loc', 
    
          status: DOING, 
    
          description: descriptionData, 
    
        }, 
    
      ]; 
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



// import TodoItem from './todoItem'

// import { STATUS } from '../constants'; 

 

// const Body = () => { 

//   const { NEW, DOING, DONE } = STATUS; 

//   const descriptionData = 

//     'This is a task, This is a task, This is a task, This is a task, This is a task.'; 

//   const todoList = [ 

//     { 

//       title: 'Task 1', 

//       creator: 'Loc', 

//       status: NEW, 

//       description: descriptionData, 

//     }, 

//     { 

//       title: 'Task 2', 

//       creator: 'Loc', 

//       status: DOING, 

//       description: descriptionData, 

//     }, 

//     { 

//       title: 'Task 3', 

//       creator: 'Loc', 

//       status: DONE, 

//       description: descriptionData, 

//     }, 

//     { 

//       title: 'Task 4', 

//       creator: 'Loc', 

//       status: NEW, 

//       description: descriptionData, 

//     }, 

//     { 

//       title: 'Task 5', 

//       creator: 'Loc', 

//       status: DOING, 

//       description: descriptionData, 

//     }, 

//     { 

//       title: 'Task 6', 

//       creator: 'Loc', 

//       status: NEW, 

//       description: descriptionData, 

//     }, 

//     { 

//       title: 'Task 7', 

//       creator: 'Loc', 

//       status: NEW, 

//       description: descriptionData, 

//     }, 

//     { 

//       title: 'Task 8', 

//       creator: 'Loc', 

//       status: DOING, 

//       description: descriptionData, 

//     }, 

//   ]; 

 

//   const renderTodoItem = () => { 

//     return todoList.map((item, index) => ( 

//       <TodoItem 

//         key={`${item.title}_${index}`} 

//         title={item.title} 

//         creator={item.creator} 

//         status={item.status} 

//         description={item.description} 

//       /> 

//     )); 

//   }; 

 

//   return <div className="containerBody">{renderTodoItem()}</div>; 

// }; 

 

// export default Body; 
