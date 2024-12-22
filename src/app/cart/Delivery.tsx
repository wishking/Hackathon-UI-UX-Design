import React from "react";

const Delivery: React.FC = () => {
  return (
    <section className="bg-[#FAF4F4] py-10">
      <div className="container mx-auto py-6 px-4 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {/* Feature 1 */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-2">Free Delivery</h3>
            <p className="text-gray-600">
              For all orders over $50, consectetur adipiscing elit.
            </p>
          </div>
          {/* Feature 2 */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-2">90 Days Return</h3>
            <p className="text-gray-600">
              If goods have problems, consectetur adipiscing elit.
            </p>
          </div>
          {/* Feature 3 */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-2">Secure Payment</h3>
            <p className="text-gray-600">
              100% secure payment, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
