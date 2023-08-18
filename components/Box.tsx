"use client";

import { IconType } from "react-icons";

interface BoxProps {
  icon: IconType;
  selected?: boolean;
  onClick: () => void;
}

const Box: React.FC<BoxProps> = ({ icon: Icon, selected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`p-8 w-[154px] h-[135px] mx-auto flex justify-center items-center hover:bg-sky-500 hover:text-white rounded-xl shadow-minibox ${
        selected ? "text-white" : "text-sky-500"
      } ${selected ? "bg-sky-500" : "bg-white"}`}>
      <Icon className="text-5xl" />
    </div>
  );
};

export default Box;
