import { createPortal } from "react-dom";
import React, { ReactNode, useEffect, useState } from "react";
import styles from "./modal.module.css";

type ModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
};

const Modal = ({ isModalOpen, setIsModalOpen, children }: ModalProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, setIsModalOpen]);
  

  if (!isModalOpen || !isMounted) return null;

  return createPortal(
    <div
      className={styles.modalBackground}
      onClick={() => setIsModalOpen(false)}
    >
      <div
        className={styles.modalWindow}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
        <button onClick={() => setIsModalOpen(false)}>x</button>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
