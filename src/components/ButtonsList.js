import Button from "./Button";

export default function ButtonsList({ onClick }) {
  return (
    <>
      <Button value="1" type="number" onClick={onClick} />
      <Button value="2" type="number" onClick={onClick} />
      <Button value="3" type="number" onClick={onClick} />
      <Button value="4" type="number" onClick={onClick} />
      <Button value="5" type="number" onClick={onClick} />
      <Button value="6" type="number" onClick={onClick} />
      <Button value="7" type="number" onClick={onClick} />
      <Button value="8" type="number" onClick={onClick} />
      <Button value="9" type="number" onClick={onClick} />
      <Button value="0" type="number" onClick={onClick} />

      <Button value="+" type="operator" onClick={onClick} />
      <Button value="-" type="operator" onClick={onClick} />
      <Button value="*" type="operator" onClick={onClick} />
      <Button value="/" type="operator" onClick={onClick} />
      <Button value="=" type="operator" onClick={onClick} />
      <Button value="c" type="operator" onClick={onClick} />
    </>
  );
}
