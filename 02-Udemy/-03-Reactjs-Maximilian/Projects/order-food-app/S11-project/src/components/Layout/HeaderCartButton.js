import React, { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);
  const [btnClasses, setButtonClasses] = useState(`${classes.button}`);
  const badgeNumber = ctx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  useEffect(() => {
    setButtonClasses(`${classes.button} ${isAnimated ? classes.bump : ""}`);

    const timer = setTimeout(() => {
      setButtonClasses(`${classes.button}`);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [ctx.items]);

  const isAnimated = ctx.items.length > 0;

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{badgeNumber}</span>
    </button>
  );
};

export default HeaderCartButton;
