export default function Item({ name, quantity, category, onSelect }) {
  const handleItemClick = () => {
    onSelect(name);
  };

  return (
    <ul>
      <li 
        className="border-4 border-sky-500 w-full max-w-xs m-4 p-2 cursor-pointer"
        onClick={handleItemClick}
      >
        <h3 className="text-2xl font-bold">{name}</h3>
        <p>Buy {quantity} in {category}</p>
      </li>
    </ul>
  );
}
