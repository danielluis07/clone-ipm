import { useState } from "react";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hamburguer = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;
  return (
    <button
      className="flex flex-col h-12 w-12 rounded justify-center items-center group"
      onClick={() => setIsOpen(!isOpen)}>
      <div className={`${hamburguer} ${isOpen && "rotate-45 translate-y-3"}`} />
      <div className={`${hamburguer} ${isOpen && "opacity-0"}`} />
      <div
        className={`${hamburguer} ${
          isOpen && "-rotate-45 -translate-y-3 opacity-100"
        }`}
      />
    </button>
  );
};

export default NavMobile;
