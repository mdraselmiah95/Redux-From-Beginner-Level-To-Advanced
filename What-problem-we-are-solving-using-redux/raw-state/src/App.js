import "./App.css";
import { createContext, useState } from "react";
import Parents from "./pages/Parents";

export const COUNTER_CONTEXT = createContext();

function App() {
  const [count, setCount] = useState(0);

  const value = { count, setCount };
  return (
    <COUNTER_CONTEXT value={value}>
      <div>
        <Parents />
      </div>
    </COUNTER_CONTEXT>
  );
}

export default App;

// Not to obeay the rule
