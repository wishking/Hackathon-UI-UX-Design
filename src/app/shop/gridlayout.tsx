
import React from 'react';
import Card from './cardcomponent';

const items = [
  { image: '/modular-sofa.png', title: 'Trenton modular sofa_3', price: 'Rs. 25,000.00' },
  { image: '/granite-dining-table.png', title: 'Granite dining table with dining chair', price: 'Rs. 25,000.00' },
  { image: '/outdoor-bar-table.png', title: 'Outdoor bar table and stool', price: 'Rs. 25,000.00' },
  { image: '/teak-mirror.png', title: 'Plain console with teak mirror', price: 'Rs. 25,000.00' },
  { image: '/grain-coffe-table.png', title: 'Grain coffee table', price: 'Rs. 15,000.00' },
  { image: '/Kent-coffee-table.png', title: 'Kent coffee table', price: 'Rs. 225,000.00' },
  { image: '/Round-coffee-table_color 2.png', title: 'Round coffee table_color 2', price: 'Rs. 251,000.00' },
  { image: '/Reclaimed-teak-coffee-table 1.png', title: 'Reclaimed teak coffee table 1', price: 'Rs. 252,000.00' },
  { image: '/Plain-console.png', title: 'Plain console', price: 'Rs. 258,000.00' },
  { image: '/Reclaimed-teak-Sideboard.png', title: 'Reclaimed teak Sideboard', price: 'Rs. 20,000.00' },
  { image: '/SJP-0825.png', title: 'sjp-0825', price: 'Rs. 200,000.00' },
  { image: '/Bella-chair-and-table.png', title: 'Bella chair and table', price: 'Rs. 100,000.00' },
  { image: '/Granite-squarep-side-table.png', title: 'Granite squarep side table', price: 'Rs. 25,000.00' },
  { image: '/asgaard-sofa.png', title: 'Asgaard sofa 1', price: 'Rs. 250,000.00' },
  { image: '/Maya-sofa-three-seater.png', title: 'Maya sofa three seater', price: 'Rs. 115,000.00' },
  { image: '/Outdoor-sofa-set.png', title: 'Outdoor sofa set', price: 'Rs. 244,000.00' },
  
  // Add more items here...
];

const Grid: React.FC = () => {
  return (
    <div>
      {/* Filter and Sorting Section */}
      <div className="border-t border-b bg-white py-4 px-4 md:px-8 mt-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-1 text-sm text-gray-700 hover:text-black">
              <span>☰</span>
              <span>Filter</span>
            </button>
            <div className="hidden md:flex items-center space-x-1">
              <span className="text-gray-700">Showing</span>
              <span className="font-bold">1–16</span>
              <span>of 32 results</span>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="flex items-center space-x-2">
              <label className="text-gray-700 text-sm">Show</label>
              <select className="border rounded px-2 py-1 text-sm">
                <option value="16">16</option>
                <option value="32">32</option>
                <option value="64">64</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <label className="text-gray-700 text-sm">Short by</label>
              <select className="border rounded px-2 py-1 text-sm">
                <option value="default">Default</option>
                <option value="price">Price</option>
                <option value="popularity">Popularity</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>
        </div>
      </div>


    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {items.map((item, index) => (
        <Card key={index} image={item.image} title={item.title} price={item.price} />
        ))}
    </div>
  </div>
  );
};

export default Grid;