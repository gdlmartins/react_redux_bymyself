import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./couterSlice";


export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const { increment, decrement, incrementByAmount, decrementByAmount ,reset } =
    actions;
  const [amountEntered, setAmountEntered] = React.useState(0);

  return (
    <div>
      {/* {console.log(actions)} */}
      <div>
        <button
          aria-label='Increment value'
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          style={{ background: "red", margin: 100 }}
          aria-label='incremente by '
          onClick={() => dispatch(decrementByAmount(amountEntered))}
        >
          Decrement by {amountEntered}
        </button>
        <span>{count}</span>
        <input 
        type="number" 
        onChange={(e) => setAmountEntered(Number(e.target.value))} />
        <button
          style={{ background: "red", margin: 100 }}
          aria-label="Increment by "
          onClick={() => dispatch(incrementByAmount(amountEntered))}
        >
          Increment by {amountEntered}
        </button>

        <button onClick={()=>dispatch
        (reset())}>
          Reset
        </button>
      </div>
    </div>
  );
}
