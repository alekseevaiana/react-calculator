import Button from "./Button";

export default function ButtonsList({ onClick }) {
  const numbers = ["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*"];

  let numberButton = numbers.map((numberValue) => {
    return (
      <Button
        value={numberValue}
        className="item button"
        onClick={onClick}
        key={numberValue}
      />
    );
  });

  return (
    <>
      {numberButton}
      <Button value="c" className="item button reset-btn" onClick={onClick} />
      <Button value="0" className="item button" onClick={onClick} />
      <Button value="=" className="item button count-btn" onClick={onClick} />
      <Button value="/" className="item button" onClick={onClick} />
    </>
  );
}
