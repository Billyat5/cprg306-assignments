export default function Item({ name, quantity, category }) {
    return (
      <div className="border-4 border-sky-500 w-full max-w-xs m-4 p-2">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p>Quantity: {quantity}</p>
        <p>Category: {category}</p>
      </div>
    );
}
  