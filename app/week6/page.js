"use client";
import React, { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './item.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (item) => {
    setItems(prevItems => [...prevItems, item]);
  };

  return (
    <main className="m-4 bg-beige min-h-screen">
      <h1 className="text-4xl font-bold m-6 text-center font-serif">
        Shopping List
      </h1>
      <h2 className="text-2xl font-bold m-6 font-serif">
        Add New Item
      </h2>
      <NewItem onAddItem={handleAddItem} />
      <br />
      <ItemList items={items} />
    </main>
  );
}
