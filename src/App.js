import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

function App() {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  // console.log(AC);
  return (
    <div className="App">
      <h1>{`Account Balance: ${account}`}</h1>
      <button onClick={() => depositMoney(500)}>Deposit</button>
      <button onClick={() => withdrawMoney(100)}>Withdraw</button>
    </div>
  );
}

export default App;
