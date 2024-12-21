import React from "react";

const Billing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-4">
      <div className="max-w-6xl bg-white rounded-lg shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Billing Details */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Billing details</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border rounded-lg p-3 w-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border rounded-lg p-3 w-full"
              />
            </div>
            <input
              type="text"
              placeholder="Company Name (Optional)"
              className="border rounded-lg p-3 w-full"
            />
            <select className="border rounded-lg p-3 w-full">
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
            </select>
            <input
              type="text"
              placeholder="Street Address"
              className="border rounded-lg p-3 w-full"
            />
            <input
              type="text"
              placeholder="Town / City"
              className="border rounded-lg p-3 w-full"
            />
            <select className="border rounded-lg p-3 w-full">
              <option value="Western Province">Western Province</option>
              <option value="Central Province">Central Province</option>
            </select>
            <input
              type="text"
              placeholder="ZIP Code"
              className="border rounded-lg p-3 w-full"
            />
            <input
              type="text"
              placeholder="Phone"
              className="border rounded-lg p-3 w-full"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border rounded-lg p-3 w-full"
            />
            <textarea
              placeholder="Additional information"
              className="border rounded-lg p-3 w-full"
            ></textarea>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Product</span>
              <span>Subtotal</span>
            </div>
            <div className="flex justify-between">
              <span>Asgaard Sofa x 1</span>
              <span>Rs. 250,000.00</span>
            </div>
            <hr />
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>Rs. 250,000.00</span>
            </div>
          </div>
          <div className="mt-6">
            <label className="flex items-center mb-4">
              <input type="radio" name="payment" className="mr-2" />
              Direct Bank Transfer
            </label>
            <label className="flex items-center mb-4">
              <input type="radio" name="payment" className="mr-2" />
              Cash On Delivery
            </label>
          </div>
          <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billing;
