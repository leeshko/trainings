import React, { useEffect, useState } from "react";
import styles from './dataTable.module.css'
import TableItem from "./TableItem";

export type Todo = {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
};

const DataTable = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_start=50&_limit=50")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, []);


  return (
    <div className={styles.table}>
      {todos.map((t: Todo) => {
        return (
         <TableItem key={t.id} {...t}/>
        );
      })}
    </div>
  );
};

export default DataTable;
