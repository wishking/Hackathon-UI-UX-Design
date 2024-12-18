import React from 'react'
import Image from 'next/image'

const Footertop = () => {
  return (
    <div>
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
    </div>
  )
}

export default Footertop;