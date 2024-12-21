import React from "react";

const Delivery: React.FC = () => {
  return (
    <section className="bg-[#FAF4F4] py-16">
      <div className="container mx-auto py-6 px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {/* Feature 1 */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold text-black mb-3">Free Delivery</h3>
            <p className="text-gray-600 leading-relaxed">
              For all orders over $50, consectetur adipiscing elit.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold text-black mb-3">90 Days Return</h3>
            <p className="text-gray-600 leading-relaxed">
              If goods have problems, consectetur adipiscing elit.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold text-black mb-3">Secure Payment</h3>
            <p className="text-gray-600 leading-relaxed">
              100% secure payment, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
