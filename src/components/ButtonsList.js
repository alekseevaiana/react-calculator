import Button from "./Button";

export default function ButtonsList({ onClick }) {
  return (
    <>
      <Button value="1" className="item" onClick={onClick} />
      <Button value="2" className="item " onClick={onClick} />
      <Button value="3" className="item " onClick={onClick} />
      <Button value="+" className="item" onClick={onClick} />

      <Button value="4" className="item " onClick={onClick} />
      <Button value="5" className="item " onClick={onClick} />
      <Button value="6" className="item " onClick={onClick} />
      <Button value="-" className="item" onClick={onClick} />

      <Button value="7" className="item " onClick={onClick} />
      <Button value="8" className="item " onClick={onClick} />
      <Button value="9" className="item " onClick={onClick} />
      <Button value="*" className="item" onClick={onClick} />

      <Button value="c" className="item " onClick={onClick} />
      <Button value="0" className="item " onClick={onClick} />
      <Button value="=" className="item" onClick={onClick} />
      <Button value="/" className="item" onClick={onClick} />
    </>
  );
}
