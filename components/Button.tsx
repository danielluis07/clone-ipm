"use client";

import { FiArrowUpRight } from "react-icons/fi";

interface ButtonProps {
  label: string;
  classname: string;
}

const Button: React.FC<ButtonProps> = ({ label, classname }) => {
  return (
    <button
      className={`flex items-center gap-x-1 py-4 px-10 border-2 rounded-lg bg-transparent hover:bg-white transition duration-300 ${classname}`}>
      {label}
      <FiArrowUpRight />
    </button>
  );
};

export default Button;
