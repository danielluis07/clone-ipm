"use client";

import { useState } from "react";
import { GrPrevious } from "react-icons/gr";
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";
import { GrNext } from "react-icons/gr";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image, { StaticImageData } from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";

interface CategoryProps {
  title: string;
  description: string;
  image: StaticImageData;
}

const Categories: React.FC<CategoryProps> = ({ title, description, image }) => {
  return (
    <>
      <div className="flex flex-col gap-y-8 lg:flex-row pt-28 gap-x-8 transition">
        <div className="flex order-last lg:order-first flex-col gap-y-12 justify-center w-full">
          <p className="w-5/6 mx-auto text-strong text-2xl sm:text-5xl font-extrabold">
            {title}
          </p>
          <p className="w-5/6 mx-auto text-standard">{description}</p>
          <div className="w-5/6 mx-auto">
            <button className="flex group items-center mx-auto sm:mx-0 flex-row gap-x-4 rounded-xl px-8 py-4 border hover:bg-sky-500 border-standard hover:border-sky-500 transition duration-200">
              <AiOutlineArrowRight className="text-sky-500 hover:text-standard group-hover:text-white" />
              <p className="text-strong group-hover:text-white font-bold">
                Sobre a Solução
              </p>
            </button>
          </div>
        </div>
        <div className="flex order-first lg:order-last justify-center w-full">
          <Image src={image} alt="image" />
        </div>
      </div>
    </>
  );
};

export default Categories;
