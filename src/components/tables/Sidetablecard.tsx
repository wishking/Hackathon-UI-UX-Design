import Image from "next/image";

type SideTableCardProps = {
  imageSrc: string;
  title: string;
};

const SideTableCard = ({ imageSrc, title }: SideTableCardProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-sm overflow-hidden rounded-md">
        <Image
          src={imageSrc}
          alt={title}
          width={300}
          height={300}
          className="w-full object-cover"
        />
      </div>
      <h2 className="mt-4 text-2xl font-medium">{title}</h2>
      <a
        href="#"
        className="mt-2 text-base font-normal text-gray-600 hover:underline"
      >
        View More
      </a>
    </div>
  );
};

export default SideTableCard;
