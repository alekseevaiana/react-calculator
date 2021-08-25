import { render, screen } from "@testing-library/react";
import App from "./App";
import { run_calc } from "./run_calc";

// const run_calc = require("./run_calc");
//const sum = require('./sum');

test("renders learn react link", () => {
  render(<App />);
});

test("1: press first time number 1 => put 1 to the left", () => {
  expect(run_calc("", "", null, "1")).toEqual({
    left: "1",
    right: "",
    operator: null,
    value: "1",
  });
});

test("2: press '+' after number 1 => operator is '+'", () => {
  expect(run_calc("1", "", null, "+")).toEqual({
    left: "1",
    right: "",
    operator: "+",
    value: "+",
  });
});

test("3: press number 1 after '+' => put 1 str to the right", () => {
  expect(run_calc("1", "", "+", "1")).toEqual({
    left: "1",
    right: "1",
    operator: "+",
    value: "1",
  });
});

test("4: press '=' if left '1' and right '1' => get '2' and put to the left", () => {
  expect(run_calc("1", "1", "+", "=")).toEqual({
    left: "2",
    right: "",
    operator: "=",
    value: "=",
  });
});

test("5: press '1' after '1' => get '11' and put to the left", () => {
  expect(run_calc("1", "", null, "1")).toEqual({
    left: "11",
    right: "",
    operator: null,
    value: "1",
  });
});

test("6: press '1' after '+' => get '1' and put to the right", () => {
  expect(run_calc("11", "", "+", "1")).toEqual({
    left: "11",
    right: "1",
    operator: "+",
    value: "1",
  });
});

test("7: press '=' after '1' => get '12' and put to the left", () => {
  expect(run_calc("11", "1", "+", "=")).toEqual({
    left: "12",
    right: "",
    operator: "=",
    value: "=",
  });
});

test("8: press 'c' => reset", () => {
  expect(run_calc("11", "1", "+", "c")).toEqual({
    left: "",
    right: "",
    operator: null,
    value: "c",
  });
});

test("9: '+' after evaluation left", () => {
  expect(run_calc("11", "", "+", "+")).toEqual({
    left: "11",
    right: "",
    operator: "+",
    value: "+",
  });
});
