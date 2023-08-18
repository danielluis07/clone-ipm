"use client";

import Image, { StaticImageData } from "next/image";
import { IconType } from "react-icons";

interface NewsBoxProps {
  image: string;
  title: string;
  description: string;
  icon: IconType;
}

const NewsBox: React.FC<NewsBoxProps> = ({
  image,
  title,
  description,
  icon: Icon,
}) => {
  return (
    <div className="flex flex-col w-[351px] h-[400px] mx-auto rounded-lg overflow-hidden">
      <div className={`h-[300px] ${image} bg-cover`}></div>
      <div className="flex flex-col gap-y-4">
        <p className="uppercase">{title}</p>
        <p>{description}</p>
        <Icon className="text-orange" />
      </div>
    </div>
  );
};

export default NewsBox;
