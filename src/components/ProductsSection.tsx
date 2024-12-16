import Image from "next/image";
import React from "react";

const ProductsSection = () => {
  return (
    <section className="bg-[#fefaf5] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Product Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
          {/* Product 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] mb-6">
              <Image
                src="/table-image.png"
                alt="Side Table"
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Side Table</h3>
            <p className="text-sm text-gray-600 hover:underline cursor-pointer">
              View More
            </p>
            <hr className="w-16 mt-2 border-t-2 border-gray-700" />
          </div>

          {/* Product 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] mb-6">
              <Image
                src="/sofa-image.png"
                alt="Sofa"
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Sofa</h3>
            <p className="text-sm text-gray-600 hover:underline cursor-pointer">
              View More
            </p>
            <hr className="w-16 mt-2 border-t-2 border-gray-700" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
