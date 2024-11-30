import React from "react";

interface CardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const Card = ({ title, description, image, link }: CardProps) => {
  return (
    <div className="max-w-sm mx-auto m-[1rem] rounded-lg shadow-md overflow-hidden">
      <img src={image} alt="image" className="w-full h-48 object-cover" />

      <div className="p-3">
        <h2 className="text-2xl font-medium mb-1">{title}</h2>
        <p className="text-gray-700 mb-2">{description}</p>

        <a
          href={link}
          className="inline-block px-4 py-2 bg-white text-black font-semibold rounded-lg shadow hover:bg-gray-600 hover:text-white transition duration-200"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Card;
