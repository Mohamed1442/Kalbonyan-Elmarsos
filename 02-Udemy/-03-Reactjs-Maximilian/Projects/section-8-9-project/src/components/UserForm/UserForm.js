import React, { useRef } from "react";
import styles from "./UserForm.module.css";

const UserForm = (props) => {
  // const [username, setUsername] = useState("");
  // const [userAge, setUserAge] = useState("");

  const usernameRef = useRef();
  const userAgeRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const user = {
      username: usernameRef.current.value,
      userAge: userAgeRef.current.value,
    };
    props.onSave(user);
    usernameRef.current.value = "";
    userAgeRef.current.value = "";
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <label>Username</label>
      <input ref={usernameRef} type="text" />
      <label>Age(Years)</label>
      <input ref={userAgeRef} type="number" />
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
