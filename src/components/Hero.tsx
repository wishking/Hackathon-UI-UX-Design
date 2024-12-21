import Image from "next/image";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div>
        <Navbar />
     
    <div className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen bg-[#FFF4C3] px-6 md:px-20">
      
      {/* Left Section: Text */}
      <div className="text-center md:text-left md:w-1/2 lg:pl-16 mb-10 md:mb-0">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black leading-snug">
          Rocket single <br /> seater
        </h1>
        <div className="mt-6">
          <a
            href="#"
            className="inline-block text-lg font-medium text-black border-b-2 border-black hover:text-gray-700 hover:border-gray-700 transition duration-300"
          >
            Shop Now
          </a>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <Image
          src="/heroimage.png" // Replace with your image path
          alt="Rocket single seater"
          width={500}
          height={500}
          className="max-w-full h-auto drop-shadow-2xl"
          priority
        />
      </div>
    </div>
    </div>
  );
}
