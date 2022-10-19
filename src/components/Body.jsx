import { useState } from "react";

import TodoItem from "./TodoItem";

import { STATUS, todoList } from "../constants";

const Body = () => {
  const [todoItems, setTodoItems] = useState(todoList);

  const renderTodoItem = () => {
    return todoItems.map((item, index) => (
      <TodoItem
        key={`${item.title}_${index}`}
        title={item.title}
        creator={item.creator}
        status={item.status}
        description={item.description}
      />
    ));
  };

  return <div className="containerBody">{renderTodoItem()}</div>;
};

export default Body;
