import Image from "next/image";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

const ProductPage: React.FC = () => {
  return (
    <section className="bg-[#FCF9F4] min-h-screen py-8 px-4 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section: Product Images */}
        <div className="flex flex-col md:flex-row items-center">
          {/* Thumbnails */}
          <div className="flex lg:flex-col items-center space-x-2 lg:space-x-0 lg:space-y-2 mb-4 lg:mb-0">
            <Image
              src="/Asgarad-1.png"
              alt="Thumbnail 1"
              width={96}
              height={96}
              className="w-24 h-24 border rounded-lg object-cover cursor-pointer"
            />
            <Image
              src="/Asgarad-2.png"
              alt="Thumbnail 2"
              width={96}
              height={96}
              className="w-24 h-24 border rounded-lg object-cover cursor-pointer"
            />
            <Image
              src="/Asgarad-3.png"
              alt="Thumbnail 3"
              width={96}
              height={96}
              className="w-24 h-24 border rounded-lg object-cover cursor-pointer"
            />
            <Image
              src="/Asgarad-4.png"
              alt="Thumbnail 4"
              width={96}
              height={96}
              className="w-24 h-24 border rounded-lg object-cover cursor-pointer"
            />
          </div>
          {/* Main Image */}
          <Image
            src="/asgaard-sofa.png"
            alt="Product"
            width={700}
            height={600}
            className="w-full max-w-lg rounded-lg shadow-lg"
          />
        </div>

        {/* Right Section: Product Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Asgaard Sofa</h1>
          <p className="text-2xl font-semibold text-gray-600 mb-2">Rs. 250,000.00</p>

          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex space-x-1 text-yellow-400">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <p className="text-gray-500 text-sm ml-2">5 Customer Reviews</p>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            Setting the bar as one of the loudest speakers in its class, the Asgaard sofa is a compact,
            cloud-hearted hero with a well-balanced audio system which boasts a clear midrange and extended highs for a clean sound.
          </p>

          {/* Sizes */}
          <div className="mb-6">
            <h3 className="text-gray-700 font-medium mb-2">Size</h3>
            <div className="flex space-x-2">
              <button className="border px-3 py-1 rounded-md hover:border-black">L</button>
              <button className="border px-3 py-1 rounded-md hover:border-black">XL</button>
              <button className="border px-3 py-1 rounded-md hover:border-black">XS</button>
            </div>
          </div>

          {/* Colors */}
          <div className="mb-6">
            <h3 className="text-gray-700 font-medium mb-2">Color</h3>
            <div className="flex space-x-2">
              <button className="w-6 h-6 rounded-full bg-purple-500 border"></button>
              <button className="w-6 h-6 rounded-full bg-black border"></button>
              <button className="w-6 h-6 rounded-full bg-yellow-500 border"></button>
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center space-x-4 mb-8">
            <div className="flex items-center border rounded-md px-2">
              <button className="text-gray-500 px-2">-</button>
              <span className="px-4">1</span>
              <button className="text-gray-500 px-2">+</button>
            </div>
            <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
              Add To Cart
            </button>
          </div>

          {/* SKU, Category, Tags */}
          <div className="text-gray-600 text-sm space-y-2">
            <p>
              <span className="font-semibold">SKU:</span> S5001
            </p>
            <p>
              <span className="font-semibold">Category:</span> Sofas
            </p>
            <p>
              <span className="font-semibold">Tags:</span> Sofa, Chair, Home, Shop
            </p>
          </div>

          {/* Social Share */}
          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-gray-500 hover:text-black"><FaFacebookF /></a>
            <a href="#" className="text-gray-500 hover:text-black"><FaLinkedin /></a>
            <a href="#" className="text-gray-500 hover:text-black"><AiFillTwitterCircle /></a>
          </div>
        </div>
      </div>

      <div>
        Reviews
      </div>
    </section>
  );
};

export default ProductPage;
