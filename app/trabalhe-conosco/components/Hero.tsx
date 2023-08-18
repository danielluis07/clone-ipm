"use client";

import Banner from "@/components/Banner";
import { AiOutlineArrowRight } from "react-icons/ai";

const Hero = () => {
  return (
    <div>
      <Banner classname="w-full flex justify-center lg:justify-start items-center h-[500px] bg-sky-200 lg:bg-[url('../public/images/banners/banner-trabalheconosco.png')] bg-cover bg-no-repeat">
        <div className="flex flex-col gap-y-10 lg:ml-28">
          <h3 className="text-strong font-extrabold text-3xl text-center lg:text-start lg:text-6xl lg:w-1/2">
            Junte-se ao #timeIPM
          </h3>
          <p className="text-standard font-bold text-center lg:text-start lg:w-1/3 lg:text-lg">
            E transforme para melhor o futuro de cidades e pessoas através do
            melhor da tecnologia.
          </p>
          <button className="flex justify-center gap-x-4 items-center group py-4 px-2 rounded-xl bg-white max-w-[250px] mx-auto lg:mx-0">
            <AiOutlineArrowRight className="text-orange" />
            <p className="text-standard font-extrabold group-hover:text-orange transition duration-300">
              Vagas disponíveis
            </p>
          </button>
        </div>
      </Banner>
    </div>
  );
};

export default Hero;
