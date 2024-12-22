import React from "react";

const Total: React.FC = () => {
  return (
    <section className="bg-white py-10 px-6 lg:px-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Cart Items Table */}
        <div className="col-span-2">
          <table className="w-full border-separate border-spacing-y-4">
            <thead>
              <tr className="bg-yellow-100 text-left text-sm text-gray-700">
                <th className="py-3 px-4">Product</th>
                <th className="py-3 px-4">Price</th>
                <th className="py-3 px-4">Quantity</th>
                <th className="py-3 px-4">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white rounded-lg shadow-md">
                <td className="flex items-center py-4 px-4">
                  <img
                    src="/asgaard-sofa.png"
                    alt="Asgaard Sofa"
                    className="w-16 h-16 rounded-md bg-yellow-100"
                  />
                  <span className="ml-4 text-gray-600 text-sm">Asgaard sofa</span>
                </td>
                <td className="py-4 px-4 text-sm text-gray-600">Rs. 250,000.00</td>
                <td className="py-4 px-4">
                  <input
                    type="number"
                    className="w-12 h-8 border rounded text-center"
                    defaultValue={1}
                  />
                </td>
                <td className="py-4 px-4 text-sm text-gray-600">Rs. 250,000.00</td>
                <td className="py-4 px-4 text-center text-yellow-500 cursor-pointer">
                  <i className="fas fa-trash-alt"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Cart Totals */}
        <div className="bg-yellow-50 p-6 rounded-md shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Cart Totals</h3>
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Subtotal</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between text-sm font-semibold text-gray-800 mb-4">
            <span>Total</span>
            <span className="text-yellow-600">Rs. 250,000.00</span>
          </div>
          <button className="w-full py-3 bg-white border border-yellow-600 rounded-md text-yellow-600 font-medium hover:bg-yellow-600 hover:text-white transition">
            Check Out
          </button>
        </div>
      </div>
    </section>
  );
};

export default Total;
