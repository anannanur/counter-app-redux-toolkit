import React from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { decrement, increment, incrementByFive, reset } from './counterSlice';
import styles from './button.module.css'

const CounterView = () => {

    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch();

    return (
        <div>
           <h2>Count : {count}</h2>
           <button className={styles.myButton} onClick={()=>{dispatch(increment())}}>Increment</button>
           <button className={styles.myButton} onClick={()=>{dispatch(decrement())}}>Decrement</button>
           <button className={styles.myButton} onClick={()=>{dispatch(reset())}}>Reset</button>
           <button className={styles.myButton} onClick={()=>{dispatch(incrementByFive(5))}}>IncreaseByFive</button>
        </div>
    );
};

export default CounterView;