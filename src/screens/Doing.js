import { useState, useEffect } from "react";

import { useSearchParams } from "react-router-dom";

import ListTodoItem from "../components/ListTodoItem";

import Footer from "../components/Footer";

import { LIST_TO_DO_KEY, STATUS } from "../constants";

import { localStorageUlti } from "../functions/localStorage";

const { get } = localStorageUlti(LIST_TO_DO_KEY, []);

const Doing = () => {
  const [todoItems, setTodoItems] = useState([]);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const listTodo = get().filter(
      (item) =>
        item.status === STATUS.DOING &&
        item.title.toLowerCase().includes(searchParams.get("keyword") || "")
    );

    setTodoItems(listTodo);
  }, [searchParams]);

  return (
    <>
      <ListTodoItem todoItems={todoItems} />

      <Footer />
    </>
  );
};

export default Doing;
