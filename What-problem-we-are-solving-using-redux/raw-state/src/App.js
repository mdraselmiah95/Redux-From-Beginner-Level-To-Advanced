import "./App.css";
import { createContext, useState } from "react";
import Parents from "./pages/Parents";
import ShortForm from "./pages/ShortForm";
import Counter from "./pages/Counter";

export const COUNTER_CONTEXT = createContext();

function App() {
  const [count, setCount] = useState(0);
  const value = { count, setCount };

  return (
    <COUNTER_CONTEXT.Provider value={value}>
      <div>
        <Parents />
        <br /> <br /> <br />
        <ShortForm />
        <br /> <br /> <br />
        <Counter />
      </div>
    </COUNTER_CONTEXT.Provider>
  );
}

export default App;

// Always the top of the game and also the find the nice and cool nice and cool
