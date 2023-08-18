"use client";

import { IconType } from "react-icons";

interface MediumBoxProps {
  icon: IconType;
  title: string;
  description: string;
}

const MediumBox: React.FC<MediumBoxProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="relative p-12 bg-white w-[350px] max-w-[350px] h-[300px] max-h-[300px] rounded-xl mx-auto">
      <Icon className="absolute" />
      <p className="w-full mt-4 font-extrabold text-strong text-2xl text-center">
        {title}
      </p>
      <p className="w-full mt-8 text-standard text-center">{description}</p>
    </div>
  );
};

export default MediumBox;
