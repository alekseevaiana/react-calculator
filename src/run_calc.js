export const run_calc = (left, right, operator, value) => {
  // if value is operator
  console.log("==========================");
  if (
    value === "+" ||
    value === "-" ||
    value === "/" ||
    value === "*" ||
    value === "="
  ) {
    if (value === "=") {
      if (right === "") {
        return;
      } else if (left !== "" && right !== "") {
        console.log("value is '='");
        left = eval(left + operator + right) + "";
        operator = null;
        right = "";
      }
    } else {
      if (left !== "" && right === "") {
        console.log("left is NOT empty and right is empty");
        operator = value;
      } else if (left !== "" && right !== "") {
        console.log(
          "if left is NOT empty and right is NOT empty and operator is " +
            operator
        );
        left = eval(left + operator + right) + "";
        right = "";
        if (operator !== null && operator !== "=") {
          operator = value;
        } else {
          console.log("reset operator");
          operator = null;
        }
      }
    }
    // else if it is a number
  } else if (parseInt(value) >= 0 || parseInt(value) <= 9) {
    if (operator === null) {
      left = left + value;
      console.log("operator null and value is number");
    } else {
      right = right + value;
    }
  } else if (value === "c") {
    console.log("value is c");
    left = "";
    right = "";
    operator = null;
  }
  return { left, right, operator, value };
};
