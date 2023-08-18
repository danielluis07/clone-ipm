import React from "react";

import { FiArrowUpRight } from "react-icons/fi";
import phone from "../../public/images/iphone.png";
import Image from "next/image";

const SectionFour = () => {
  return (
    <>
      <div className="mt-28 flex items-center h-[580px] bg-[url('../public/images/sectionsimages/section4.jpg')] bg-cover bg-no-repeat">
        <div className="hidden 2xl:flex absolute right-96">
          <Image src={phone} alt="phone" />
        </div>
        <div className="w-[700px] min-w-[350px] flex flex-col gap-y-8 mx-[20px] sm:mx-auto lg:mx-[300px] p-8 border border-white rounded-lg">
          <p className="text-sm w-4/6 tracking-[.30em] text-standard">
            MATURIDADE ON-LINE
          </p>
          <div className="text-2xl lg:text-5xl w-4/6 font-extrabold text-strong">
            Calculadora: Sua prefeitura é digital?
          </div>
          <div className="flex flex-row group hover:bg-white transition duration-300 items-center gap-x-2 w-[250px] sm:w-[400px] sm:min-w-[350px] py-4 px-8 bg-orange rounded-lg cursor-pointer">
            <p className="font-extrabold group-hover:text-orange transition duration-300 text-md text-white">
              Simule agora mesmo
            </p>
            <FiArrowUpRight className="text-white transition duration-300" />
          </div>
        </div>
      </div>
      <div className="flex items-center h-[500px] bg-[url('../public/images/sectionsimages/section5.jpg')] bg-cover bg-no-repeat">
        <div className="w-5/6 mx-auto flex flex-col gap-y-4">
          <div className="text-white text-sm tracking-[.30em] text-center font-extrabold">
            CARREIRA
          </div>
          <div className="lg:text-5xl text-2xl font-extrabold text-white text-center">
            Juntos, podemos fazer mais pela sociedade. É nisso que acreditamos.
          </div>
          <div className="flex mt-10 px-8 py-4 mx-auto items-center rounded-xl group gap-x-2 bg-transparent border border-white hover:bg-white transition duration-300">
            <FiArrowUpRight className="text-white group-hover:text-orange transition duration-300" />
            <p className="font-bold text-white group-hover:text-orange transition duration-300">
              Vagas disponíveis
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionFour;
