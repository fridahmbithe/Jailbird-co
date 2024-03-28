import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import image from "../Assets/landing.png"
import NavBar from './NavBar';
import { useState } from 'react'

const LandingPage = (addToCart) => {
  const navigate = useNavigate('');

  const handleClick =()=>{
   navigate= '/services'
  }
  
  return (
    <>
     

     <div className='bg-orange-100 min-h-screen overflow-x-hidden'>
        <div className="container mx-auto py-8">
          <h2 className="text-3xl font-bold text-black mb-4">
            Welcome to Hillary's Thriftstore 
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Repeat the following div 12 times for each item */}
            {[...Array(12)].map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4">
                <img src={image} alt="Product" className="w-full h-32 object-cover mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Product Name</h3>
                <p className="text-gray-600">Product Description Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="mt-4">
                  <span className="text-gray-800 font-bold">$99.99</span>
                  <button onClick={() => addToCart({ name: 'Product Name', description: 'Product Description' })} className="ml-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded-md">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

     
    </>

  );


};

export default LandingPage;