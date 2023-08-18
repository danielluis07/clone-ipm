import React from "react";

import { IconType } from "react-icons";

interface LargeBoxProps {
  icon: IconType;
  title: string;
  description: string;
}

const LargeBox: React.FC<LargeBoxProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col gap-y-4 w-[263px] sm:mx-auto min-h-[330px] py-[30px] px-[25px] bg-white shadow-largebox rounded-xl">
      <div className="p-6 shadow-minibox rounded-full w-min">
        <Icon className="text-xl text-sky-500" />
      </div>
      <div className="text-strong font-bold">{title}</div>
      <div className="text-standard">{description}</div>
    </div>
  );
};

export default LargeBox;
