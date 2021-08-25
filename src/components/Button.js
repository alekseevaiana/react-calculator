export default function Button({ value, onClick, type, className }) {
  return (
    <button value={value} type={type} onClick={onClick} className={className}>
      {value}
    </button>
  );
}
