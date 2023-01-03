import "./App.css";
import { createStore } from "redux";

function App() {
  /**
   * A reducer function must have two parameters
   * State ,Action
   */

  const reducer = (state = {}, action) => {
    if (action.type === "A") {
      return {
        A: "I am A",
      };
    }
    return state;
  };

  const store = createStore(reducer);

  store.subscribe(() => {
    console.log(store.getState());
  });

  store.dispatch({ type: "A" });
  store.dispatch({ type: "some" });

  return (
    <div>
      <h2>This is App.</h2>
    </div>
  );
}

export default App;

//27:46
