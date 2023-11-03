"use client";
import { useState } from 'react';

export default function NewItem({ onAddItem }) { // 1. Add a new prop { onAddItem }
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = { name, quantity, category };
    console.log(item);

    // 2. Replace the alert functionality by calling the onAddItem prop with the item object
    onAddItem(item);
    
    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="border p-2 rounded w-64 h-10" placeholder="Item Name" />
      </label>
      <label className="block">
        <input type="number" min="1" max="99" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} required className="border p-2 rounded w-64 h-10" />
      </label>
      <label className="block">
        <select value={category} onChange={(e) => setCategory(e.target.value)} required className="border p-2 rounded w-64 h-10">
          <option value="" disabled>Category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Meat">Meat</option>
          <option value="Frozen Foods">Frozen Foods</option>
          <option value="Canned Goods">Canned Goods</option>
          <option value="Dry Goods">Dry Goods</option>
          <option value="Beverages">Beverages</option>
          <option value="Snacks">Snacks</option>
          <option value="HouseHold">Household</option>
          <option value="Others">Others</option>
        </select>
      </label>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-64 h-10">
        +
      </button>
    </form>
  );
};
