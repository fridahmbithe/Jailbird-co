import React, { useState } from 'react';

export const AdminHomePage = () => {
  // State to manage the list of items and their variants
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', variants: [] },
    { id: 2, name: 'Item 2', variants: [] },
    // Add more items as needed
  ]);

  // Function to add a variant to an item
  const addVariant = (itemId, variant) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, variants: [...item.variants, variant] } : item
      )
    );
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-black mb-4">Admin Home Page</h2>
      <div>
        {/* Display list of items */}
        {items.map(item => (
          <div key={item.id} className="mb-4">
            <h3 className="text-xl font-semibold">{item.name}</h3>
            {/* Add variants for the item */}
            <div className="flex flex-wrap">
              {item.variants.map((variant, index) => (
                <span key={index} className="inline-block bg-gray-200 text-gray-800 px-2 py-1 rounded-md mr-2 mb-2">
                  {variant}
                </span>
              ))}
              {/* Add variant options */}
              <div>
                <input type="text" placeholder="Variant" />
                <button onClick={() => addVariant(item.id, "New Variant")} className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded-md ml-2">Add Variant</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
