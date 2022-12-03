import "./App.css";
import { createContext } from "react";
import LongForm from "./pages/LongForm";

export const COUNTER_CONTEXT = createContext();

function App() {
  return (
    <>
      <LongForm />
    </>
  );
}

export default App;
