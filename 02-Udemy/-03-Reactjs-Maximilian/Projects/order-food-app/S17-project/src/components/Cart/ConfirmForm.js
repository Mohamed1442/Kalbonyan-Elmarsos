import { useRef, useState } from "react";
import classes from "./ConfirmForm.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveNums = (postal) => postal.trim().length === 5;

const Confirm = (props) => {
  const [formIsValid, setFormIsValid] = useState(true);

  const nameRef = useRef();
  const streatRef = useRef();
  const postalRef = useRef();
  const cityRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredStreat = streatRef.current.value;
    const enteredPostal = postalRef.current.value;
    const enteredCity = cityRef.current.value;

    const nameIsValid = !isEmpty(enteredName);
    const streatIsValid = !isEmpty(enteredStreat);
    const postalIsValid = isFiveNums(enteredPostal);
    const cityIsValid = !isEmpty(enteredCity);

    if (nameIsValid && streatIsValid && postalIsValid && cityIsValid) {
      setFormIsValid(true);
      props.onConfirm({
        enteredName,
        enteredCity,
        enteredPostal,
        enteredStreat,
      });
    } else {
      setFormIsValid(false);
    }
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streatRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="number" id="postal" ref={postalRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityRef} />
        {!formIsValid && <p>Please enter Valid inputs.</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Confirm;
