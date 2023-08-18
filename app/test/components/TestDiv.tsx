"use client";

import { BsChatRightDots } from "react-icons/bs";
import { FiHeadphones } from "react-icons/fi";
import { HiOutlineKey } from "react-icons/hi";
import Link from "next/link";

const TestDiv = () => {
  return (
    <div className="flex w-full h-[373px]">
      <div className="w-full bg-[url('../public/images/contato.jpg')]"></div>
      <div className="w-full flex items-center justify-center bg-white">
        <div className="w-1/3 mx-auto flex flex-col gap-y-4">
          <div className="flex flex-row items-center gap-x-8">
            <BsChatRightDots className="text-xl text-orange" />
            <Link href={`/fale-conosco`}>
              <p className="font-bold text-xl text-standard hover:text-orange cursor-pointer">
                Fale Conosco
              </p>
            </Link>
          </div>
          <div className="flex flex-row items-center gap-x-8">
            <FiHeadphones className="text-xl text-orange" />
            <p className="font-bold text-xl text-standard hover:text-orange cursor-pointer">
              Suporte Técnico
            </p>
          </div>
          <div className="flex flex-row items-center gap-x-8">
            <HiOutlineKey className="text-xl text-orange" />
            <p className="font-bold text-xl text-standard hover:text-orange cursor-pointer">
              Acesso Cliente IPM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestDiv;
