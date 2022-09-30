import React, { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [isCloseModal, setIsCloseModal] = useState(false);

  const closeModalHandler = () => {
    setIsCloseModal(false);
  };
  const openModalHandler = () => {
    setIsCloseModal(true);
  };
  return (
    <CartProvider>
      {isCloseModal && <Cart onClose={closeModalHandler} />}
      <Header onOpen={openModalHandler} />
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
