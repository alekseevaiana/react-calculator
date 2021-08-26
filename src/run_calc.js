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
  const OPERATOR_SYMBOL =
    value === "+" ||
    value === "-" ||
    value === "/" ||
    value === "*" ||
    value === "=";
  const RESET_SYMBOL = value === "c";
  const EMPTY = "";
  const NUMBER = parseInt(value) >= 0 || parseInt(value) <= 9;

  if (OPERATOR_SYMBOL) {
    if (value === "=") {
      if (right === EMPTY) {
        return { left, right, operator, value };
      } else if (left !== EMPTY && right !== EMPTY) {
        left = calculate_result(left + operator + right);
        operator = "=";
        right = EMPTY;
      }
    } else {
      if (left !== EMPTY && right === EMPTY) {
        operator = value;
      } else if (left !== EMPTY && right !== EMPTY) {
        left = calculate_result(left + operator + right);
        right = EMPTY;
        if (operator !== null && operator !== "=") {
          operator = value;
        } else {
          operator = null;
        }
      }
    }
  } else if (NUMBER) {
    if (operator === null) {
      if (left.length > 14) {
        return { left, right, operator, value };
      } else {
        left = left + value;
      }
    } else if (operator === "=") {
      left = value;
      right = "";
      operator = null;
    } else {
      right = right + value;
    }
  } else if (RESET_SYMBOL) {
    left = EMPTY;
    right = EMPTY;
    operator = null;
  }
  return { left, right, operator, value };
};
