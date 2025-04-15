import React, { useState } from "react";
import { Todo } from "./DataTable";
import styles from "./dataTable.module.css";
import Modal from "../modal/Modal";

const TableItem = ({ completed, title, userId }: Todo) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        {title}
      </Modal>
      <div className={styles.tableItem} onClick={() => setIsModalOpen(true)}>
        <div>{completed ? "+" : "-"}</div>
        <div>{title}</div>
        <div>{userId}</div>
      </div>
    </>
  );
};

export default TableItem;
