
import Image from 'next/image';
import React from 'react';

interface CardProps {
  image: string;
  title: string;
  price: string;
}

const Card: React.FC<CardProps> = ({ image, title, price }) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4">
      <Image src={image} alt={title} width={160} height={160} className="w-full h-40 object-cover rounded-md" />
      <h3 className="text-lg font-semibold mt-4">{title}</h3>
      <p className="text-gray-600 mt-2">{price}</p>
    </div>
  );
};

export default Card;