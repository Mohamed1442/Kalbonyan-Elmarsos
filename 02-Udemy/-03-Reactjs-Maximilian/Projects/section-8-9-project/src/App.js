import React, { useState } from "react";
import UserForm from "./components/UserForm/UserForm";
import UserList from "./components/UserList/UserList";
import UserModal from "./components/UserModal/UserModal";

const users = [
  {
    username: "Magdy",
    userAge: 55,
  },
  {
    username: "Marwa",
    userAge: 49,
  },
];

function App() {
  const [userData, setUserData] = useState(users);
  const [visible, setVisible] = useState(false);
  const [errorState, setErrorState] = useState("");
  const saveHandler = (data) => {
    if (data.username.trim() === "" && data.userAge.trim() === "") {
      setErrorState("both");
      setVisible(true);
      return;
    }

    if (data.username.trim() === "") {
      setErrorState("name");
      setVisible(true);
      return;
    }

    if (data.userAge.trim() === "" || +data.userAge.trim() < 0) {
      setErrorState("age");
      setVisible(true);
      return;
    }

    setUserData((prevData) => [data, ...prevData]);
  };

  const closeModalHandler = () => {
    setVisible(false);
  };
  console.log(errorState);
  return (
    <div>
      <UserForm onSave={saveHandler} />
      <UserList users={userData} />
      <UserModal
        visible={visible}
        onCloseModal={closeModalHandler}
        errorState={errorState}
      />
    </div>
  );
}

export default App;
