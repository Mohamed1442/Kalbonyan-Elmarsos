import { useEffect, useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    enteredValue: enteredName,
    setEnteredValue: setEnteredName,
    enteredValueIsValid: enteredNameIsValid,
    setEnteredValueIsValid: setEnteredNameIsValid,
    setEnteredValueIsTouched: setEnteredNameIsTouched,
    valueInputClasses: nameInputClasses,
    valueIsInvalid: nameIsInvalid,
    inputHandler,
    inputBlurHandler,
  } = useInput(() => enteredName.trim() !== "");

  const {
    enteredValue: enteredEmail,
    setEnteredValue: setEnteredEmail,
    enteredValueIsValid: enteredEmailIsValid,
    setEnteredValueIsValid: setEnteredEmailIsValid,
    setEnteredValueIsTouched: setEnteredEmailIsTouched,
    valueInputClasses: emailInputClasses,
    valueIsInvalid: emailIsInvalid,
    inputHandler: emailHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput(() => enteredEmail.trim().includes("@"));

  // Form
  const [formIsInvalid, setFormIsInvalid] = useState(true);

  useEffect(() => {
    if (enteredName.trim() !== "") {
      setEnteredNameIsValid(true);
    }

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
    }

    if (enteredEmail.trim().includes("@")) {
      setEnteredEmailIsValid(true);
    }

    if (!enteredEmail.trim().includes("@")) {
      setEnteredEmailIsValid(false);
    }
  }, [enteredName, enteredEmail]);

  useEffect(() => {
    if (enteredNameIsValid && enteredEmailIsValid) {
      setFormIsInvalid(false);
    } else {
      setFormIsInvalid(true);
    }
  }, [enteredNameIsValid, enteredEmailIsValid]);

  // Form handler
  const submitHandler = (e) => {
    e.preventDefault();

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }

    if (enteredEmail.trim().includes("@")) {
      setEnteredEmailIsValid(false);
      return;
    }

    setEnteredName("");
    setEnteredEmail("");
    setEnteredNameIsTouched(false);
    setEnteredEmailIsTouched(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          onChange={inputHandler}
          onBlur={inputBlurHandler}
          value={enteredName}
          type="text"
          id="name"
        />
        {nameIsInvalid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          onChange={emailHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
          type="email"
          id="email"
        />
        {emailIsInvalid && <p className="error-text">Email must have '@'.</p>}
      </div>
      <div className="form-actions">
        <button disabled={formIsInvalid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

// Name
// const [enteredName, setEnteredName] = useState("");
// const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
// const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

// const nameIsInvalid = enteredNameIsTouched && !enteredNameIsValid;

// const nameInputClasses = !nameIsInvalid
//   ? "form-control"
//   : "form-control invalid";

// Email
// const [enteredEmail, setEnteredEmail] = useState("");
// const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(false);
// const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false);
// const emailIsInvalid = enteredEmailIsTouched && !enteredEmailIsValid;

// const emailInputClasses = !emailIsInvalid
//   ? "form-control"
//   : "form-control invalid";

// Name handlers
// const inputHandler = (e) => {
//   setEnteredName(e.target.value);
// };

// const inputBlurHandler = (e) => {
//   setEnteredNameIsTouched(true);

//   if (enteredName.trim() !== "") {
//     setEnteredNameIsValid(true);
//   }

//   if (enteredName.trim() === "") {
//     setEnteredNameIsValid(false);
//   }
// };

// Email handlers
// const emailHandler = (e) => {
//   setEnteredEmail(e.target.value);
// };

// const emailBlurHandler = (e) => {
//   setEnteredEmailIsTouched(true);

//   if (enteredEmail.trim().includes("@")) {
//     setEnteredEmailIsValid(true);
//   }

//   if (!enteredEmail.trim().includes("@")) {
//     setEnteredEmailIsValid(false);
//   }
// };
