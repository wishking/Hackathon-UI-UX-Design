import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 py-10">
      {/* Top Section */}
      <div className="relative w-full h-[400px] mb-14">
        {/* Background Image */}
        <Image
          src="/insta-bg.png" // Replace with your actual image path
          alt="Instagram Background"
          layout="fill"
          objectFit="cover"
          quality={90}
          className="absolute"
        />

        {/* Background Overlay */}
        <div className="absolute inset-0 bg-[#FAF4F480] opacity-80"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <h2 className="text-4xl font-extrabold text-black mb-2">Our Instagram</h2>
          <p className="text-gray-500 text-lg">Follow our store on Instagram</p>
          <button className="mt-6 px-8 py-3 bg-white text-black border border-gray-300 rounded-full shadow-md hover:shadow-lg hover:bg-gray-100 transition duration-300">
            Follow Us
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* Address */}
        <div className="text-center md:text-left leading-relaxed text-gray-700">
          <p>400 University Drive Suite 200 Coral Gables,</p>
          <p>FL 33134 USA</p>
        </div>

        {/* Links & Help */}
        <div className="flex justify-around md:justify-evenly text-center">
          {/* Links */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-3">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-3">Help</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Payment Options
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policies
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="text-center md:text-right">
          <h3 className="text-gray-800 font-semibold mb-3">Newsletter</h3>
          <form className="flex items-center justify-center md:justify-end mt-2">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-gray-400 w-full md:w-auto"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-black text-white rounded-r-full hover:bg-gray-800 transition duration-300"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-14 text-center text-gray-400 text-xs">
        <hr className="mb-4 border-gray-200" />
        <p>2022 Meubel House. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
