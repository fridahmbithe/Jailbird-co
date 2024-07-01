import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Fridah Mbithe. All rights reserved.
        </div>
        <div className="text-sm">
          Built with <span className="text-red-500">♥</span> by Fridah Mbithe
        </div>
      </div>
    </footer>
  );
};

export default Footer;