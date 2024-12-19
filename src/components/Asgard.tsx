import Image from "next/image";

export default function Asgaard() {
  return (
    <section className="relative bg-[#FFFAE9] w-full min-h-[70vh] flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-12 lg:px-20">
      {/* Left Section: Sofa Image */}
      <div className="w-full md:w-2/3 lg:w-3/4 flex justify-center">
        <Image
          src="/asgaard-sofa.png" // Replace with your image path
          alt="Asgaard Sofa"
          width={800}
          height={600}
          priority
          className="w-full max-w-[700px] md:max-w-[800px] lg:max-w-[900px] h-auto object-cover"
        />
      </div>

      {/* Right Section: Text and CTA */}
      <div className="w-full md:w-1/3 lg:w-1/4 text-center md:text-left py-6 md:py-0 flex flex-col justify-center">
        <h4 className="text-gray-600 text-xs md:text-sm uppercase mb-2 tracking-widest">
          New Arrivals
        </h4>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-black mb-4 leading-snug">
          Asgaard sofa
        </h1>
        <a
          href="#"
          className="inline-block border border-black text-black text-xs md:text-sm font-medium py-2 px-4 md:py-3 md:px-6 hover:bg-black hover:text-white transition duration-300"
        >
          Order Now
        </a>
      </div>
    </section>
  );
}
