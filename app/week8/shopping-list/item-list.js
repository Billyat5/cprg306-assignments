"use client";
import React, { useState } from 'react';
import Item from './item';

export default function ItemList({ items, onItemSelect }) {
    const [sortBy, setSortBy] = useState('name'); 
    
    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
            return a.category.localeCompare(b.category);
        } else {
            return 0;
        }
    });

    const groupAndSortItems = (items) => {
        const groupedItems = items.reduce((acc, item) => {
            (acc[item.category] = acc[item.category] || []).push(item);
            return acc;
        }, {});
          
        Object.keys(groupedItems).forEach(category => {
            groupedItems[category].sort((a, b) => a.name.localeCompare(b.name));
        });
    
        return groupedItems;
    };    

    return (
        <div>
            <div className="mb-4">
            <span className="font-bold capitalize mb-2">Sort By:</span>
            <button 
                onClick={() => setSortBy('name')} 
                className={`px-2 py-1 mr-2 ${sortBy === 'name' ? 'bg-blue-200' : 'bg-gray-200'}`}
            >
                Name
            </button>
            <button 
                onClick={() => setSortBy('category')} 
                className={`px-2 py-1 mr-2 ${sortBy === 'category' ? 'bg-blue-200' : 'bg-gray-200'}`}
            >
                Category
            </button>
            <button 
                onClick={() => setSortBy('groupCategory')} 
                className={`px-2 py-1 ${sortBy === 'groupCategory' ? 'bg-blue-200' : 'bg-gray-200'}`}
            >
                Group by Category
            </button>
            </div>
            
            {
                sortBy === 'groupCategory' ? (
                    Object.entries(groupAndSortItems(sortedItems))
                        .sort(([a], [b]) => a.localeCompare(b))
                        .map(([category, items]) => (
                        <div key={category} className="mb-4">
                            <h2 className="font-bold text-lg capitalize mb-2">{category}</h2>
                            <ul>
                                {items.map((item) => (
                                    <li key={item.id} className="mb-2">
                                        <Item
                                            name={item.name}
                                            quantity={item.quantity}
                                            category={item.category}
                                            onSelect={() => onItemSelect(item)}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
                ) : (
                    <ul>
                        {sortedItems.map((item) => (
                            <li key={item.id} className="mb-2">
                                <Item
                                    name={item.name}
                                    quantity={item.quantity}
                                    category={item.category}
                                    onSelect={() => onItemSelect(item)}
                                />
                            </li>
                        ))}
                    </ul>
                )
            }
        </div>
    );
}
