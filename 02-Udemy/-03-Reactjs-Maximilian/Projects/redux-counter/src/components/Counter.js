import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { counterActions } from "../store";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase());
  };

  const increaseVarHandler = () => {
    dispatch(counterActions.increaseVal(5));
  };

  const decreaseHandler = () => {
    dispatch(counterActions.decrease());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <div>
        <button onClick={increaseHandler}>Increase</button>
        <button onClick={increaseVarHandler}>Increase by 5</button>
        <button onClick={decreaseHandler}>Decrease</button>
      </div>
    </main>
  );
};

export default Counter;
