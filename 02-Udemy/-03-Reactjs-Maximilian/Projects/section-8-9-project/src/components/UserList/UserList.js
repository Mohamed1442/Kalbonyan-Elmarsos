import React from "react";
import ListItem from "./ListItem";
import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <div className={styles.container}>
      <ul>
        {props.users.map((user) => (
          <ListItem
            name={user.username}
            age={user.userAge}
            key={Math.random()}
          />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
