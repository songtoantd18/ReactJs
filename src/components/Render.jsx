 import TodoItem from "./TodoItem";
 
 const todos = [ 
   { id: 1,

     title: 'Task 1', 

     creator: 'Loc', 

    
   }, 

   { 
      id: 2,

     title: 'Task 2', 

     creator: 'Loc', 

    

   }, 

   { 
      id: 3,

     title: 'Task 3', 

     creator: 'Loc', 

     
   }, 

   { 
      id: 4,

     title: 'Task 4', 

     creator: 'Loc', 

    
   }, 

   { 
      id: 5,

     title: 'Task 5', 

     creator: 'Loc', 

     
   }, 

   { 
      id: 6,
     title: 'Task 6', 

     creator: 'Loc', 

 

   }, 

   { 
      id: 7,

     title: 'Task 7', 

     creator: 'Loc', 


   }, 

   { 
      id: 8,

     title: 'Task 8', 

     creator: 'Loc', 

    

   }, 

 ]; 
 
 
 
 const ListTodos =()=>{
    return todos.map(item =>
      <TodoItem
      key={item.id}
      title={item.title}
      status={item.status}
      />

      
      )

 }

 export default ListTodos