import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../cart-slice";
import { useEffect } from "react";

const ProductItem = (props) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { title, price, description, id } = props;

  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch(
  //       "https://react-20b47-default-rtdb.firebaseio.com/cart.json"
  //     );

  //     const data = await response.json();
  //     console.log(data);
  //   })();
  // }, [cart]);

  const addHandler = () => {
    dispatch(
      cartActions.increase({
        id,
        price,
        title,
        description,
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
