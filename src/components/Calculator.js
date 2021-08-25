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

  return (
    <div className="calculator">
      <Result result={state.left === "" ? 0 : state.left} />
      {console.log(state)}
      <ButtonsList onClick={handleClickOnButton} />
    </div>
  );
}
