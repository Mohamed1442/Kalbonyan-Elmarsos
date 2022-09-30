import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const removeHandler = (id) => {
    ctx.removeItem(id);
  };
  const addHandler = (item) => {
    ctx.addItem({ ...item, amount: 1 });
  };

  const ctx = useContext(CartContext);
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {ctx.items.map((order) => (
        <CartItem
          key={order.id}
          name={order.name}
          price={order.price}
          amount={order.amount}
          onRemove={removeHandler.bind(null, order.id)}
          onAdd={addHandler.bind(null, order)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${ctx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {ctx.items.length > 0 && (
          <button className={classes.button}>Order</button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
