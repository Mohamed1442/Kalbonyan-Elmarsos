import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false,
  },
  reducers: {
    replace(state, action) {
      state.items = action.payload.items;
      state.totalQuantity = action.payload?.totalQuantity;
    },
    increase(state, action) {
      state.changed = true;
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          totalPrice: newItem.price,
          name: newItem.title,
          quantity: 1,
        });
        state.totalQuantity++;
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
        state.totalQuantity++;
      }
    },
    decrease(state, action) {
      state.changed = true;
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem.quantity > 1) {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
        state.totalQuantity--;
      } else {
        const removedIndex = state.items.findIndex((item) => item.id === id);
        state.items.splice(removedIndex, 1);
        state.totalQuantity--;
      }
    },
  },
});

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Loading...",
        message: "Waiting for response",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-20b47-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("Cannot fetch data");
      }

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Data sent successfully",
        })
      );
    };

    sendRequest().catch((error) => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: error.message,
        })
      );
    });
  };
};

export const getCartData = () => {
  return async (dispatch) => {
    const response = await fetch(
      "https://react-20b47-default-rtdb.firebaseio.com/cart.json"
    );
    const responseData = await response.json();
    dispatch(
      cartActions.replace({
        items: responseData?.items || [],
        totalQuantity: responseData?.totalQuantity || 0,
      })
    );
  };
};

export const cartActions = cartSlice.actions;
export default cartSlice;
