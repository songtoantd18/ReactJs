import React from 'react';
import PropTypes from 'prop-types';

// Todolist.propTypes = {
//     todos: PropTypes.array,
//     onTodoclick: PropTypes.func,
    
// };
// Todolist.defaultProps ={
//     todos:[],
//     onTodoclick :null,
// }



const Todolist = (props) => {
    const {todos,onTodoclick} =props;
    function handleClick(todo) {
        if (onTodoclick) {
            onTodoclick(todo)
        }
    }
    return (
        <div>
            <ul className='todo-list'>
                {
                    todos.map(todo=>(
                        <li key={todo.id}
                        onClick={()=> handleClick(todo)}
                        >{todo.title}</li>
                    ))
                }
               
            </ul>
            
        </div>
    );
};
Todolist.propTypes = {
    todos: PropTypes.array,
    onTodoclick: PropTypes.func,
    
};
Todolist.defaultProps ={
    todos:[],
    onTodoclick :null,
}


export default Todolist;