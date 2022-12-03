import { useState, useEffect } from "react";

import { useSearchParams } from "react-router-dom";

import ListTodoItem from "../components/ListTodoItem";

import Footer from "../components/Footer";
import { ITEM_PER_PAGE } from "../constants";

import usePagination from "../hooks/usePagination";

import clientServer from "../server/clientServer";

const All = () => {
  const [todoItems, setTodoItems] = useState([]);

  const [searchParams] = useSearchParams();

  const { jumpPage, currentData, currentPage, maxPage } = usePagination(
    todoItems,

    ITEM_PER_PAGE
  );

  useEffect(() => {
    clientServer
      .get("todoItems")

      .then((res) => {
        const listTodoItem = res.data.filter((item) =>
          item.title.toLowerCase().includes(searchParams.get("keyword") || "")
        );

        setTodoItems(listTodoItem);
      })

      .catch((err) => {
        console.error("error:", err);
      });
  }, [searchParams]);

  return (
    <>
      <ListTodoItem todoItems={currentData} />

      {maxPage > 1 && (
        <Footer
          currentPage={currentPage}
          jumpPage={jumpPage}
          maxPage={maxPage}
        />
      )}
    </>
  );
};

export default All;
