import Image from "next/image";

export default function TopPicks() {
  const products = [
    {
      id: 1,
      name: "Trenton modular sofa_3",
      price: "Rs. 25,000.00",
      image: "/modular-sofa.png", // Replace with the correct path
    },
    {
      id: 2,
      name: "Granite dining table with dining chair",
      price: "Rs. 25,000.00",
      image: "/granite-dining-table.png", // Replace with the correct path
    },
    {
      id: 3,
      name: "Outdoor bar table and stool",
      price: "Rs. 25,000.00",
      image: "/outdoor-bar-table.png", // Replace with the correct path
    },
    {
      id: 4,
      name: "Plain console with teak mirror",
      price: "Rs. 25,000.00",
      image: "/teak-mirror.png", // Replace with the correct path
    },
  ];

  return (
    <section className="w-full px-6 md:px-12 lg:px-20 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">
          Top Picks For You
        </h2>
        <p className="text-gray-500 text-sm md:text-base max-w-lg mx-auto">
          Find a bright idea to suit your taste with our great selection of
          suspension, floor, and table lights.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center text-center"
          >
            <div className="w-48 h-48 relative mb-4">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">
              {product.name}
            </h3>
            <p className="text-lg font-bold text-black">{product.price}</p>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-10">
        <a
          href="#"
          className="inline-block text-base font-medium text-black border-b-2 border-black hover:text-gray-600 hover:border-gray-600 transition duration-300"
        >
          View More
        </a>
      </div>
    </section>
  );
}
