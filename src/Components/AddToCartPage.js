import React, { useState } from 'react';

const AddToCartPage = () => {
  // State to manage items in the cart
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to the cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-black mb-4">Your Cart</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Display cart items */}
        {cartItems.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.name}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
      {/* Add items to cart */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-black mb-4">Add Items to Your Cart</h2>
        <button onClick={() => addToCart({ name: 'Product 1', description: 'Description of Product 1' })} className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md mr-4">Add Product 1</button>
        <button onClick={() => addToCart({ name: 'Product 2', description: 'Description of Product 2' })} className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md">Add Product 2</button>
        {/* Add more buttons for other products */}
      </div>
    </div>
  );
};

export default AddToCartPage;
