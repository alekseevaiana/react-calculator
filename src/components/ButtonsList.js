import Button from "./Button";

export default function ButtonsList({ onClick }) {
  return (
    <>
      <Button value="1" type="number" onClick={onClick} />
      <Button value="+" type="operator" onClick={onClick} />
      <Button value="=" type="operator" onClick={onClick} />
    </>
  );
}
