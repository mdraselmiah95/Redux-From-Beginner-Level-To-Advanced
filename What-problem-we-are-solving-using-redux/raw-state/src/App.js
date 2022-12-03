import "./App.css";
import { createContext, useState } from "react";
import Parents from "./pages/Parents";

export const COUNTER_CONTEXT = createContext();

function App() {
  const [count, setCount] = useState(0);
  const value = { count, setCount };

  return (
    <COUNTER_CONTEXT.Provider value={value}>
      <div>
        <Parents />
      </div>
    </COUNTER_CONTEXT.Provider>
  );
}

export default App;

// Always the top of the game and also the find the nice and cool nice and cool
