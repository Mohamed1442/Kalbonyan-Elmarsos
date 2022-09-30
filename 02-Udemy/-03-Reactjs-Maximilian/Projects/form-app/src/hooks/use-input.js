import { useState } from "react";

const useInput = (valueCondition) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredValueIsValid, setEnteredValueIsValid] = useState(false);
  const [enteredValueIsTouched, setEnteredValueIsTouched] = useState(false);

  const valueIsInvalid = enteredValueIsTouched && !enteredValueIsValid;

  const valueInputClasses = !valueIsInvalid
    ? "form-control"
    : "form-control invalid";

  const inputHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const inputBlurHandler = (e) => {
    setEnteredValueIsTouched(true);

    if (valueCondition()) {
      setEnteredValueIsValid(true);
    }

    if (!valueCondition()) {
      setEnteredValueIsValid(false);
    }
  };
  // enteredValue.trim() !== ""
  return {
    enteredValue,
    setEnteredValue,
    enteredValueIsValid,
    setEnteredValueIsValid,
    enteredValueIsTouched,
    setEnteredValueIsTouched,
    valueIsInvalid,
    valueInputClasses,
    inputHandler,
    inputBlurHandler,
  };
};

export default useInput;
