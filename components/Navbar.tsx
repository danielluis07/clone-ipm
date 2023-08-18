"use client";

import impLogo from "../public/images/ipmlogo.png";
import Image from "next/image";
import { BiSearchAlt2 } from "react-icons/bi";
import selo from "../public/images/selo.png";
import { RiArrowDownSLine } from "react-icons/ri";
import NavMobile from "./NavMobile";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";

import Link from "next/link";
import TestDiv from "@/app/test/components/TestDiv";

interface NavbarProps {
  classname: string;
}

const Navbar: React.FC<NavbarProps> = ({ classname }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      {isContactOpen && (
        <div className="hidden md:flex transition-all ease-in-out absolute z-20 w-full top-[120px]">
          <TestDiv />
        </div>
      )}
      <div
        className={`${
          isMenuOpen ? "absolute z-10 h-full" : "h-[120px]"
        } w-full ${classname} px-4 xl:px-20 2xl:px-48 transition-all duration-300 ${
          isContactOpen ? "bg-standard" : "bg-orange"
        }`}>
        <div className="flex max-w-[1536px] mx-auto justify-between items-center">
          <div>
            <Link href={`/`}>
              <Image src={impLogo} alt="logo" />
            </Link>
          </div>
          <div className="hidden lg:flex items-center pr-28">
            <div className="flex gap-1 items-center py-10 lg:px-2 xl:px-6">
              <p className="group transition-all ease-linear text-white font-extrabold cursor-pointer">
                <span className="bg-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-200 ease-out">
                  Soluções
                </span>
              </p>
              <div className="text-white font-extrabold">
                <RiArrowDownSLine />
              </div>
            </div>
            <div className="py-12 lg:px-4 xl:px-6">
              <p className="group transition-all ease-linear text-white font-extrabold cursor-pointer">
                <Link href={`/institucional`}>
                  <span className="bg-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-200 ease-out">
                    Institucional
                  </span>
                </Link>
              </p>
            </div>
            <div className="flex gap-1 items-center py-12 lg:px-2 xl:px-6">
              <p className="group transition-all ease-linear text-white font-extrabold cursor-pointer">
                <span className="bg-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-200 ease-out">
                  Conteúdo
                </span>
              </p>
              <div className="text-white font-extrabold">
                <RiArrowDownSLine />
              </div>
            </div>
            <div className="flex gap-1 items-center py-12 lg:px-2 xl:px-6">
              <p className="group transition-all ease-linear text-white font-extrabold cursor-pointer">
                <span className="bg-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-200 ease-out">
                  Carreira
                </span>
              </p>
              <div className="text-white font-extrabold">
                <RiArrowDownSLine />
              </div>
            </div>
            <div
              onClick={() => setIsContactOpen(!isContactOpen)}
              className="flex gap-1 items-center py-12 lg:px-2 xl:px-6">
              <p className="group transition-all ease-linear text-white font-extrabold cursor-pointer">
                <span className="bg-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-200 ease-out">
                  Contato
                </span>
              </p>
              <div className="text-white font-extrabold">
                <RiArrowDownSLine />
              </div>
            </div>
            <div className="p-2 text-xl text-white font-extrabold">
              <BiSearchAlt2 className="cursor-pointer" />
            </div>
            <div className="absolute top-4 lg:right-14 xl:right-20 2xl:right-44">
              <Image src={selo} width={85} height={85} alt="selo" />
            </div>
          </div>
          <div
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex lg:hidden">
            <NavMobile />
          </div>
        </div>
        {isMenuOpen && (
          <>
            <div className="flex justify-center relative text-[150px] font-extrabold opacity-20">
              menu
            </div>
            <div className="flex flex-col gap-y-14 py-24 items-center justify-center">
              <div className="flex absolute bottom-40 flex-col gap-y-4">
                <div className="flex justify-center gap-1 items-center">
                  <p className="group transition-all ease-linear text-white text-3xl font-extrabold cursor-pointer">
                    <span className="bg-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-200 ease-out">
                      Soluções
                    </span>
                  </p>
                  <div className="text-white text-xl font-extrabold">
                    <AiOutlinePlus />
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <p className="group transition-all ease-linear text-white text-3xl font-extrabold cursor-pointer">
                    <span className="bg-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-200 ease-out">
                      Institucional
                    </span>
                  </p>
                </div>
                <div className="flex justify-center gap-1 items-center">
                  <p className="group transition-all ease-linear text-white text-3xl font-extrabold cursor-pointer">
                    <span className="bg-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-200 ease-out">
                      Conteúdo
                    </span>
                  </p>
                  <div className="text-white text-xl font-extrabold">
                    <AiOutlinePlus />
                  </div>
                </div>
                <div className="flex justify-center gap-1 items-center">
                  <p className="group transition-all ease-linear text-white text-3xl font-extrabold cursor-pointer">
                    <span className="bg-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-200 ease-out">
                      Carreira
                    </span>
                  </p>
                  <div className="text-white text-xl font-extrabold">
                    <AiOutlinePlus />
                  </div>
                </div>
                <div className="flex justify-center gap-1 items-center">
                  <p className="group transition-all ease-linear text-white text-3xl font-extrabold cursor-pointer">
                    <span className="bg-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-200 ease-out">
                      Contato
                    </span>
                  </p>
                  <div className="text-white text-xl font-extrabold">
                    <AiOutlinePlus />
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <p className="group transition-all ease-linear text-white text-3xl font-extrabold cursor-pointer">
                    <span className="bg-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-200 ease-out">
                      Calculadora
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex absolute bottom-14 flex-row gap-x-8">
                <div className="text-white text-3xl">
                  <CiTwitter />
                </div>
                <div className="text-white text-3xl">
                  <CiFacebook />
                </div>
                <div className="text-white text-3xl">
                  <CiInstagram />
                </div>
                <div className="text-white text-3xl">
                  <CiLinkedin />
                </div>
                <div className="text-white text-3xl">
                  <CiYoutube />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
