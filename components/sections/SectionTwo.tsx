"use client";

import Image from "next/image";

import { useState } from "react";
import { GrPrevious } from "react-icons/gr";
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";
import { GrNext } from "react-icons/gr";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { MdOutlineAttachMoney } from "react-icons/md";
import { AiOutlineShake } from "react-icons/ai";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { HiOutlineChartPie } from "react-icons/hi";

import atendelogo from "../../public/images/logo-atendenet.png";
import LargeBox from "../LargeBox";

const data = [
  {
    icon: MdOutlineAttachMoney,
    title: "Menos custos e mais arrecadação",
    description:
      "Economia de papel, impressões, manutenção de CPDs e tempo dos Servidores, com aumento da arrecadação",
  },
  {
    icon: AiOutlineShake,
    title: "Disponível 24h",
    description:
      "O Atende.Net é uma solução que funciona em qualquer dispositivo móvel com acesso à internet, 24h por dia.",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Sem uso de papel",
    description:
      "A computação em nuvem permite o acesso às informações de qualquer lugar, 24h por dia, sem o uso de papel.",
  },
  {
    icon: HiOutlineChartPie,
    title: "Automatização de processos",
    description:
      "Nossa tecnologia permite visualizar e executar processos que demonstram ao usuário a situação atual de cada processo.",
  },
  {
    icon: AiOutlineShake,
    title: "Plataforma única",
    description:
      "Tecnologia de Cadastro Único permitindo que todas as áreas administrativas possam ser acessadas a partir de uma mesma plataforma.",
  },
  {
    icon: HiOutlineChartPie,
    title: "Alta performance",
    description:
      "O sistema IPM processa informações em alta velocidade, sendo em média até 20 vezes mais rápido do que os sistemas desktop.",
  },
  {
    icon: HiOutlineChartPie,
    title: "Assinatura Digital",
    description:
      "Além da assinatura eletrônica, o recurso pode ser empregado em todo o sistema, a partir de qualquer equipamento com acesso à internet.",
  },
  {
    icon: AiOutlineShake,
    title: "Comunicação facilitada",
    description:
      "O sistema IPM conta com um módulo que permite encaminhar mensagens SMS ou push para todos os usuários do aplicativo.",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Vídeoatendimento",
    description:
      "O recurso de Videoatendimento permite fazer chamadas remotas por vídeo no próprio software, com segurança e qualidade",
  },
  {
    icon: AiOutlineShake,
    title: "Use no Aplicativo",
    description:
      "O aplicativo permite uma visão geral sobre a gestão municipal em tempo real para que o gestor analise e defina ações com base em dados fidedignos.",
  },
];

const SectionTwo = () => {
  const [swiperRef, setSwiperRef] = useState<any>(null);

  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };

  return (
    <div className="mt-28 h-[700px] bg-[url('../public/images/sectionsimages/section2.jpg')] bg-cover bg-no-repeat">
      <div className="mx-auto w-11/12">
        <div className="flex flex-col lg:flex-row justify-center gap-x-14 pb-14 lg:pb-20">
          <div className="mt-20 lg:w-[281px] lg:h-[98px] w-[100px] h-[50px] mx-auto lg:mx-0">
            <Image src={atendelogo} alt="logo" />
          </div>
          <div className="mt-10 lg:mt-20">
            <p className="text-3xl lg:text-5xl font-extrabold text-white text-center lg:text-start">
              Completo e seguro.
            </p>
            <p className="text-3xl lg:text-5xl text-white text-center lg:text-start">
              Assim como você merece.
            </p>
            <p className="text-xl text-white pt-6 text-center lg:text-start">
              Conheça um sistema de gestão pública de última geração.
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div
            className="hidden lg:flex group p-8 rounded-full bg-gray"
            onClick={prevHandler}>
            <FcPrevious className="flex group-hover:hidden" />
            <GrPrevious className="hidden group-hover:flex" />
          </div>
          <Swiper
            breakpoints={{
              1024: {
                slidesPerView: 4,
              },
            }}
            spaceBetween={50}
            slidesPerView={1}
            onSwiper={(swiper) => setSwiperRef(swiper)}>
            {data.map((item) => (
              <div key={item.title}>
                <SwiperSlide>
                  <LargeBox
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                  />
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
          <div
            className="hidden lg:flex group p-8 rounded-full bg-gray"
            onClick={nextHandler}>
            <FcNext className="flex group-hover:hidden" />
            <GrNext className="hidden group-hover:flex" />
          </div>
        </div>
        <div className="w-5/6 justify-center mx-auto flex gap-x-8 lg:hidden">
          <div
            className="flex group p-8 rounded-full bg-gray"
            onClick={prevHandler}>
            <FcPrevious className="flex group-hover:hidden" />
            <GrPrevious className="hidden group-hover:flex" />
          </div>
          <div
            className="flex group p-8 rounded-full bg-gray"
            onClick={nextHandler}>
            <FcNext className="flex group-hover:hidden" />
            <GrNext className="hidden group-hover:flex" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
