import Image from "next/image";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

const RelatedProduct: React.FC = () => {
  return (
    <div>



      {/* Related Products Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-center mb-8">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Product Card */}
          <div className="text-center">
            <Image
              src="/modular-sofa.png"
              alt="Trenton Modular Sofa"
              width={200}
              height={200}
              className="mx-auto mb-4 rounded-lg object-cover"
            />
            <h3 className="text-lg font-medium">Trenton modular sofa_3</h3>
            <p className="text-gray-600">Rs. 25,000.00</p>
          </div>

          <div className="text-center">
            <Image
              src="/granite-dining-table.png"
              alt="Granite Dining Table"
              width={200}
              height={200}
              className="mx-auto mb-4 rounded-lg object-cover"
            />
            <h3 className="text-lg font-medium">Granite dining table with dining chair</h3>
            <p className="text-gray-600">Rs. 25,000.00</p>
          </div>

          <div className="text-center">
            <Image
              src="/outdoor-bar-table.png"
              alt="Outdoor Bar Table"
              width={200}
              height={200}
              className="mx-auto mb-4 rounded-lg object-cover"
            />
            <h3 className="text-lg font-medium">Outdoor bar table and stool</h3>
            <p className="text-gray-600">Rs. 25,000.00</p>
          </div>

          <div className="text-center">
            <Image
              src="/plain-console.png"
              alt="Plain Console with Teak Mirror"
              width={200}
              height={200}
              className="mx-auto mb-4 rounded-lg object-cover"
            />
            <h3 className="text-lg font-medium">Plain console with teak mirror</h3>
            <p className="text-gray-600">Rs. 25,000.00</p>
          </div>
        </div>
        <div className="text-center mt-6">
          <button className="text-gray-700 hover:underline">View More</button>
        </div>
      </div>
    </div>
  );
};

export default RelatedProduct;
