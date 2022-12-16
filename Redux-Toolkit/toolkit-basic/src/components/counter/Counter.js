import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../features/counter/counterSlice";
import styles from "./Counter.module.css";

export function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  return (
    <div>
      <div className={styles.row}>
        <button
          onClick={() => dispatch(decrement(10))}
          className={styles.button}
          aria-label="Decrement value"
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          onClick={() => dispatch(increment(5))}
          className={styles.button}
          aria-label="Increment value"
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input className={styles.textbox} aria-label="Set increment amount" />
        <button className={styles.button}>Add Amount</button>
        <button className={styles.asyncButton}>Add Async</button>
        <button className={styles.button}>Add If Odd</button>
      </div>
    </div>
  );
}
