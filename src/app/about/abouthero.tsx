import Image from "next/image";
import React from "react";

const AboutHeroSection: React.FC = () => {
  return (
    <section className="bg-gray-100 relative">
      {/* Background Image */}
      <div className="h-60 bg-cover bg-center" style={{ backgroundImage: "url('/shop-image.png')" }}>
        <div className="h-full w-full bg-black bg-opacity-20 flex items-center justify-center">
          <div className="text-center">
            <Image src="/logo.png" alt="logo" width={100} height={100} className="gap-0" w-full h-auto />
            <h1 className="text-4xl font-bold text-black">About us</h1>
            <nav className="mt-2">
              <ul className="flex justify-center space-x-2 text-black text-sm">
                <li>Home</li>
                <li>&gt;</li>
                <li className="text-black font-medium">About</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default AboutHeroSection;
