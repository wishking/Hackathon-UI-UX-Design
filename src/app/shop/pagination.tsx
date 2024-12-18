import React from 'react';

const Pagination: React.FC = () => {
  return (
    <div className="flex justify-center items-center space-x-4 mt-6">
      <button className="px-4 py-2 bg-gray-200 rounded-md">1</button>
      <button className="px-4 py-2 bg-gray-200 rounded-md">2</button>
      <button className="px-4 py-2 bg-gray-200 rounded-md">3</button>
      <button className="px-4 py-2 bg-gray-200 rounded-md">Next</button>
    </div>
  );
};

export default Pagination;