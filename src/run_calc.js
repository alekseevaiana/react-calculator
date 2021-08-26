function check_len(string) {
  if (string.length > 14) {
    return true;
  } else {
    return false;
  }
}

function calculate_result(string) {
  let result = eval(string);
  result = Math.round(result * 100000) / 100000;
  result = check_len(result) ? "Too long" : result + "";
  return result;
}

export const run_calc = (left, right, operator, value) => {
  let result = 0;
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
        console.log("right is empty");
        return { left, right, operator, value };
      } else if (left !== "" && right !== "") {
        console.log("value is '='");
        left = calculate_result(left + operator + right);
        operator = "=";
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
        left = calculate_result(left + operator + right);
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
      if (left.length > 14) {
        return { left, right, operator, value };
      } else {
        left = left + value;
      }
      console.log("left len is " + left.length);
      console.log("operator null and value is number");
    } else if (operator === "=") {
      left = value;
      right = "";
      operator = null;
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
