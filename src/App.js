import React from "react";

import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "./feature/couterSlide";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [enteredNumber, setEnterdNumber] = React.useState(0);
  const { increase, decrease, increaseby, decreaseby } = actions;

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          margin: "100px auto",
          width: "50%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            width: "20%",
            border: " 1px solid black",
            fontSize: "3rem",
            justifySelf: "flex-end",
            alignSelf: "center",
          }}
          onClick={() => dispatch(decrease())}
        >
          -
        </button>
        <div
          style={{
            margin: "100px auto",
            padding: 20,
            border: " 1px solid black",
            fontSize: "4rem",
          }}
        >
          {count}
        </div>
        <button
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            width: "20%",
            border: " 1px solid black",
            fontSize: "3rem",
            justifySelf: "flex-end",
            alignSelf: "center",
          }}
          onClick={() => dispatch(increase())}
        >
          +
        </button>
      </div>
      <div
        style={{
          display: "flex",
          margin: "0 auto",
          width: "50%",
          border: "1px  solid black",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            width: "20%",
            border: " 1px solid black",
            fontSize: "3rem",
            justifySelf: "flex-end",
            alignSelf: "center",
          }}
          onClick={() => dispatch(decreaseby(enteredNumber))}
        >
          -
        </button>
        <input
          placeholder='Amount'
          style={{
            margin: 10,
            padding: 10,
            width: "30%",
            textAlign: "center",
            fontSize: "2rem",
          }}
          onChange={(e) => setEnterdNumber(Number(e.target.value))}
        />
        <button
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            width: "20%",
            border: " 1px solid black",
            fontSize: "3rem",
            justifySelf: "flex-end",
            alignSelf: "center",
          }}
          onClick={() => dispatch(increaseby(enteredNumber))}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;
