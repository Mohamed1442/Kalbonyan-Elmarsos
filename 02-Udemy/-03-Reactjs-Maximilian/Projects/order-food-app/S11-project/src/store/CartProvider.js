import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedAmount =
      state.totalAmount + action.item.amount * action.item.price;
    let updatedItems;

    const mealIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    if (mealIndex === -1 || state.items.length === 0) {
      updatedItems = [...state.items, action.item];
    } else {
      updatedItems = [...state.items];
      updatedItems[mealIndex].amount += action.item.amount;
    }

    return {
      items: updatedItems,
      totalAmount: +updatedAmount,
    };
  }

  if (action.type === "REMOVE") {
    const itemIndex = state.items.findIndex((item) => {
      return item.id === action.id;
    });
    if (state.items[itemIndex].amount === 1) {
      const updatedAmount = state.totalAmount - state.items[itemIndex].price;
      const updatedItems = [...state.items];
      updatedItems.splice(itemIndex, 1);
      return {
        items: updatedItems,
        totalAmount: updatedAmount,
      };
    } else {
      const updatedItems = [...state.items];
      updatedItems[itemIndex].amount -= 1;
      const updatedAmount = state.totalAmount - state.items[itemIndex].price;
      return {
        items: updatedItems,
        totalAmount: updatedAmount,
      };
    }
  }
  ////
  if (action.type === "REMOVE") {
    const itemIndex = state.items.findIndex((item) => {
      return item.id === action.id;
    });
    const updatedAmount = state.totalAmount - state.items[itemIndex].price;
    const updatedItems = [...state.items];

    if (state.items[itemIndex].amount === 1) {
      updatedItems.splice(itemIndex, 1);
    } else {
      updatedItems[itemIndex].amount -= 1;
    }
    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }
  ////

  return defaultState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultState);
  const addItemHandler = (item) => {
    dispatchCart({ type: "ADD", item: item });
  };
  const removeItemHandler = (id) => {
    dispatchCart({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
