"use client";

import { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { AiOutlinePlus } from "react-icons/ai";
import NewsBox from "../NewsBox";
import Link from "next/link";

const bg1 = `bg-[url('../public/images/news/news1.jpg')]`;
const bg2 = `bg-[url('../public/images/news/news2.png')]`;
const bg3 = `bg-[url('../public/images/news/news3.png')]`;
const bg4 = `bg-[url('../public/images/news/news4.png')]`;
const bg5 = `bg-[url('../public/images/news/news5.png')]`;
const bg6 = `bg-[url('../public/images/news/news6.png')]`;
const bg7 = `bg-[url('../public/images/news/news7.png')]`;
const bg8 = `bg-[url('../public/images/news/news8.png')]`;

const news = [
  {
    id: 1,
    image: bg1,
    title: "Inteligência Artificial",
    description:
      "Gestão preditiva facilita planejamento urbano e reduz filas de espera",
    icon: AiOutlinePlus,
  },
  {
    id: 2,
    image: bg2,
    title: "Inteligência Artificial",
    description:
      "Panambi (RS) registra aumento de 253% na arrecadação na última década",
    icon: AiOutlinePlus,
  },
  {
    id: 3,
    image: bg3,
    title: "Inteligência Artificial",
    description:
      "Inteligência Artificial da IPM ajuda governos a combaterem a evasão escolar",
    icon: AiOutlinePlus,
  },
  {
    id: 4,
    image: bg4,
    title: "Cases",
    description:
      "IPM lança inteligência artificial Dara para guiar ações de governo",
    icon: AiOutlinePlus,
  },
  {
    id: 5,
    image: bg5,
    title: "Cases",
    description:
      "ABIPEM: Clientes IPM têm destaque nacional em Gestão Previdenciária",
    icon: AiOutlinePlus,
  },
  {
    id: 6,
    image: bg6,
    title: "Cases",
    description:
      "Previne Brasil 2023: clientes IPM têm destaque na primeira avaliação do ano",
    icon: AiOutlinePlus,
  },
  {
    id: 7,
    image: bg7,
    title: "Cases",
    description:
      "Índice CFA 2023: cliente IPM tem melhor governança do País e outros 18 são destaque",
    icon: AiOutlinePlus,
  },
  {
    id: 8,
    image: bg8,
    title: "Cases",
    description: "Clientes IPM são destaque no Prêmio InovaCidade 2023",
    icon: AiOutlinePlus,
  },
];

const SectionThree = () => {
  const [swiperRef, setSwiperRef] = useState<any>(null);

  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };

  return (
    <div className="mt-40">
      <div className="text-center text-orange text-lg">CONTEÚDO</div>
      <div className="text-center text-standard mt-4">
        Acompanhe as notícias do mundo IPM.
      </div>
      <div className="w-11/12 mx-auto flex mt-14">
        <div className="hidden sm:flex flex-col gap-y-2 h-min">
          <div
            className="group p-8 rounded-full bg-white shadow-minibox group hover:bg-orange transition"
            onClick={prevHandler}>
            <MdNavigateBefore className="text-xl text-standard group-hover:text-white transition" />
          </div>
          <div
            className="group p-8 rounded-full bg-white shadow-minibox group hover:bg-orange transition"
            onClick={nextHandler}>
            <MdNavigateNext className="text-xl text-standard group-hover:text-white transition" />
          </div>
        </div>
        <Swiper
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
          }}
          className="w-full"
          spaceBetween={50}
          slidesPerView={1}
          onSwiper={(swiper) => setSwiperRef(swiper)}>
          {news.map((item) => (
            <div key={item.id}>
              <SwiperSlide>
                <Link href={`/noticia`}>
                  <NewsBox
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    icon={item.icon}
                  />
                </Link>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SectionThree;
