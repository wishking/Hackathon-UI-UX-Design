import { CalendarIcon, ClockIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

interface BlogPost {
    id: string;
    image: string;
    title: string;
    readTime: string;
    date: string;
  }
  
const BlogCard: React.FC<BlogPost> = ({ image, title, readTime, date }) => {
    return (
      <div className="flex flex-col">
        <div className="relative h-64 mb-4">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <div className="flex items-center">
            <ClockIcon className="w-4 h-4 mr-1"/>
            <span>{readTime}</span>
          </div>
          <div className="flex items-center">
            <CalendarIcon className="w-4 h-4 mr-1" />
            <span>{date}</span>
          </div>
        </div>
        <button className="mt-4 text-left font-semibold hover:text-gray-600 transition-colors">
          Read More
        </button>
      </div>
    );
  };

  export default BlogCard;