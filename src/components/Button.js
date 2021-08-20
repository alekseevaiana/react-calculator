export default function Button({ value, onClick, type }) {
  return (
    <button value={value} type={type} onClick={onClick}>
      {value}
    </button>
  );
}
