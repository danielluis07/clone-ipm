"use client";

import Image from "next/image";
import { BsChatHeart } from "react-icons/bs";
import { GiRibbonMedal } from "react-icons/gi";
import { HiOutlineShieldCheck } from "react-icons/hi";

import turma from "../../../../public/images/timelineDestaque-2023.jpg";

const Section2 = () => {
  return (
    <div className="mt-20 flex flex-col gap-y-20 px-3 lg:px-36">
      <div className="flex flex-col lg:flex-row gap-x-8 gap-y-4 order-last lg:order-first">
        <div className="flex flex-col lg:flex-row gap-x-8 gap-y-4">
          <div className="flex flex-col gap-y-4">
            <BsChatHeart className="w-min mx-auto text-xl text-orange" />
            <p className="text-center text-standard font-bold">
              + de 700 colaboradores
            </p>
          </div>
          <div className="flex flex-col gap-y-4">
            <GiRibbonMedal className="w-min mx-auto text-xl text-orange" />
            <p className="text-center text-standard font-bold">
              + de 700 clientes
            </p>
          </div>
          <div className="flex flex-col gap-y-4">
            <HiOutlineShieldCheck className="w-min mx-auto text-xl text-orange" />
            <p className="text-center text-standard font-bold">
              + de 1 milhão de usuários
            </p>
          </div>
        </div>
        <div className="order-first lg:order-last bg-orange rounded-lg lg:w-1/2">
          <p className="w-2/5 mx-auto text-center font-extrabold text-white py-10 lg:w-3/4 lg:mx-0">
            Criamos Soluções. Escolha ser IPM
          </p>
        </div>
      </div>
      <div>
        <div className="rounded-lg overflow-hidden w-full md:w-1/2 mx-auto">
          <Image src={turma} alt="image" />
        </div>
        <p className="w-full md:w-1/2 mx-auto mt-8 text-standard">
          IPM é reconhecida como uma das 25 melhores empresas do Brasil para
          mulheres trabalharem, ficando em 23º lugar nacional no Ranking GPTW
          Diversidade 2022 – Mulher, da consultoria global Great Place to Work,
          que avaliou mais de 4.000 empresas brasileiras.
        </p>
      </div>
    </div>
  );
};

export default Section2;
