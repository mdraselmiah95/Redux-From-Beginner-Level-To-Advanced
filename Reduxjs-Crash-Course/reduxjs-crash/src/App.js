import "./App.css";
import { Provider } from "react-redux";
import store from "./components/store";
import Counts from "./components/store/Counts";
import Control from "./components/Control";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Counts />
        <Control />
      </div>
    </Provider>
  );
}

export default App;

//47:46 ai
