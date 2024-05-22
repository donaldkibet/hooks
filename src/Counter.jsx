import React, { useContext, useReducer } from "react";
import { AuthContext } from "./AuthContext";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      throw new Error();
  }
}
// Component to illustrate using useReducer Hook
function Counter() {
  const [count, updateState] = useReducer(reducer, initialState);
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div>
      <h4>
        Count: {count.count}{" "}
        {isLoggedIn ? <p>User is logged In</p> : <p>User is logged Out</p>}
      </h4>
      <button onClick={() => updateState({ type: "increment" })}>
        Increment (+)
      </button>
      <button onClick={() => updateState({ type: "decrement" })}>
        Decrement (-)
      </button>

      <button onClick={() => updateState({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default Counter;
