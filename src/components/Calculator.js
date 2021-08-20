import { useState } from "react";
import ButtonsList from "./ButtonsList";
import "./Calculator.css";
import Result from "./Result";

export default function Calculator() {
  const [state, setState] = useState({
    left: "",
    right: "",
    operator: null,
  });

  //   const calculate = (left_value, right_value, operator) => {
  //     return eval(left_value + operator + right_value);
  //   };

  const run_calc = (left, right, operator, value) => {
    // if value is operator
    if (
      value === "+" ||
      value === "-" ||
      value === "/" ||
      value === "*" ||
      value === "="
    ) {
      if (value === "=") {
        if (right === "") {
          // do nothing go to the next char
          return { left, right, operator };
        } else if (left != "" && right != "") {
          left = eval(left + operator + right);
          operator = null;
          right = "";
        }
      } else {
        if (left != "" && right === "") {
          operator = value;
        } else if (left != "" && right != "") {
          left = eval(left + operator + right);
          operator = null;
          right = "";
        }
      }
      // else if it is a number
    } else {
      if (operator === null) {
        left = left + value;
      } else {
        right = right + value;
      }
    }

    return { left, right, operator };
  };

  const handleClickOnButton = (e) => {
    console.log("btn clicked " + e.target.value);
    console.log(run_calc("1", "2", "+", "="));
  };

  return (
    <div className="calculator">
      <Result result={state.left} />
      <ButtonsList onClick={handleClickOnButton} />
    </div>
  );
}
