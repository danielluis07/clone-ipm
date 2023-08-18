"use client";

import Banner from "@/components/Banner";
import { AiOutlinePlayCircle } from "react-icons/ai";

const Hero = () => {
  return (
    <div>
      <Banner classname="w-full flex justify-center items-center h-[670px] bg-[url('../public/images/banners/banner-institucional.png')] bg-cover bg-no-repeat">
        <div className="w-5/6 mx-auto">
          <AiOutlinePlayCircle className="mx-auto text-white text-7xl" />
          <h3 className="text-white text-xl mt-10 lg:text-7xl text-center">
            Transformando o futuro de cidades e pessoas
          </h3>
        </div>
      </Banner>
    </div>
  );
};

export default Hero;
