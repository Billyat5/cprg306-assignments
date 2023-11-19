"use client";
import React, { useState, useEffect } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-idea';
import { getItems, addItem } from '../_services/shopping-list-service';
import { useUserAuth } from '../_utils/auth-context'; 

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState('');
  const { user } = useUserAuth(); 

  useEffect(() => {
    async function loadItems() {
      if (user) {
        const fetchedItems = await getItems(user.uid);
        setItems(fetchedItems);
      }
    }

    loadItems();
  }, [user]); 

  const handleAddItem = async (newItem) => {
    if (user) {
      const newItemId = await addItem(user.uid, newItem);
      setItems(prevItems => [...prevItems, { ...newItem, id: newItemId }]);
    }
  };

  const handleItemSelect = (selectedItem) => {
    console.log(`Selected item: ${selectedItem.name}`);
    const sanitizedName = selectedItem.name.replace(/\p{Emoji}/gu, '').split(',')[0].trim().toLowerCase();
    console.log(`Sanitized item: ${sanitizedName}`);
    setSelectedItemName(sanitizedName);
  };

  return (
    <main className="m-4 bg-beige min-h-screen">
      <h1 className="text-4xl font-bold m-6 text-center font-serif">
        Shopping List
      </h1>
      <div className="flex justify-between">
        <div>
          <h2 className="text-2xl font-bold m-6 font-serif">
            Add New Item
          </h2>
          <NewItem onAddItem={handleAddItem} />
          <br />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="flex mt-2 mr-2 flex-col">
          <div className="bg-white-50 w-full max-w-md bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold m-6 font-serif">Meal Ideas</h2>
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </div>
      </div>
    </main>
  );
}
