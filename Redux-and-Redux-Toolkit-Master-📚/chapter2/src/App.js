import { useSelector } from "react-redux";
import "./App.css";
import Account from "./components/Account";
import Bonus from "./components/Bonus";
import Reward from "./components/Reward";

function App() {
  const account = useSelector((state) => state.account.amount);
  const points = useSelector((state) => state.bonus.points);

  return (
    <div className="App">
      <h4>App</h4>

      <h3>Current Amount : {account} </h3>

      <h3>Total Bonus : {points} </h3>
      <Account />
      <Bonus />
      <Reward />
    </div>
  );
}

export default App;
