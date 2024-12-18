import React from "react";

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Grid Wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Free Delivery */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-bold text-black mb-2">Free Delivery</h3>
            <p className="text-gray-500 text-sm">
              For all orders over $50, consectetur adipim scing elit.
            </p>
          </div>

          {/* 90 Days Return */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-bold text-black mb-2">90 Days Return</h3>
            <p className="text-gray-500 text-sm">
              If goods have problems, consectetur adipim scing elit.
            </p>
          </div>

          {/* Secure Payment */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-bold text-black mb-2">Secure Payment</h3>
            <p className="text-gray-500 text-sm">
              100% secure payment, consectetur adipim scing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
