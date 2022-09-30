import React from "react";
import styles from "./UserModal.module.css";

const UserModal = (props) => {
  let state;
  if (props.errorState === "both") {
    state = "Please enter valid name and age";
  }
  if (props.errorState === "name") {
    state = "Please enter valid name";
  }
  if (props.errorState === "age") {
    state = "Please enter valid age";
  }

  const modalHandler = () => {
    props.onCloseModal();
  };
  const overlayHandler = () => {
    props.onCloseModal();
  };

  return (
    <div>
      <div
        className={`${styles.container} ${props.visible ? "" : styles.hidden}`}
      >
        <h2>Invalid input</h2>
        <div>
          <p>{state}</p>
          <button onClick={modalHandler}>Okay</button>
        </div>
      </div>
      <div
        className={`${styles.overlay} ${props.visible ? "" : styles.hidden}`}
        onClick={overlayHandler}
      ></div>
    </div>
  );
};

export default UserModal;
