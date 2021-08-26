import { useState } from "react";
import ButtonsList from "./ButtonsList";
import "./Calculator.css";
import Result from "./Result";
import { run_calc } from "../run_calc";

export default function Calculator() {
  const [state, setState] = useState({
    left: "",
    right: "",
    operator: null,
    value: "",
  });

  const handleClickOnButton = (e) => {
    setState(run_calc(state.left, state.right, state.operator, e.target.value));
  };

  const result = (state) => {
    if (state.right != "") {
      return state.right;
    } else {
      return state.left === "" ? 0 : state.left;
    }
  };
  return (
    <div className="calculator container">
      <Result result={result(state)} />
      {console.log(state)}
      <ButtonsList onClick={handleClickOnButton} />
    </div>
  );
}
