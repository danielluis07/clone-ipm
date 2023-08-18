"use client";

import Image from "next/image";
import computador from "../../../public/images/sorriso-computador.jpg";
import MediumBox from "../components/MediumBox";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { FiUsers } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

const Section04 = () => {
  return (
    <div className="mt-40 w-full h-[1100px] bg-[url('../public/images/banners/fundo-laranja.png')] bg-cover bg-no-repeat">
      <div className="pt-28">
        <div className="lg:w-[1150px] lg:min-w-[1150px] lg:flex px-4 mx-auto md:px-8">
          <div className="sm:w-3/5 rounded-xl overflow-hidden">
            <Image src={computador} alt="image" />
          </div>
          <div className="mt-8 flex flex-col gap-y-8 lg:w-3/5 sm:ml-10">
            <p className="text-extrabold text-white text-center text-4xl lg:text-start">
              Programa Jovens Talentos
            </p>
            <p className="text-center text-white lg:text-start">
              Muito além de desenvolver soluções, a IPM está atenta ao potencial
              e à criatividade dos jovens, pois eles serão os profissionais
              aptos a atender às crescentes necessidades e demandas da empresa.
              Há mais de 20 anos, a IPM prepara estudantes para atuar na área de
              tecnologia, com curso 100% gratuito de capacitação.
            </p>
          </div>
        </div>
        <div className="mt-10">
          <Swiper
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
            spaceBetween={10}
            slidesPerView={1}>
            <SwiperSlide>
              <MediumBox
                icon={HiOutlineOfficeBuilding}
                title="Objetivo"
                description="O programa tem como objetivo colaborar com a preparação de jovens talentos para o mercado de trabalho."
              />
            </SwiperSlide>
            <SwiperSlide>
              <MediumBox
                icon={AiOutlineUser}
                title="Como participar"
                description="Os interessados devem estar cursando alguma faculdade relacionada à tecnologia ou sistema de informação."
              />
            </SwiperSlide>
            <SwiperSlide>
              <MediumBox
                icon={FiUsers}
                title="Como funciona"
                description="O curso é gratuito e as aulas são presenciais no Centro Tecnológico da IPM Sistemas, em Rio do Sul (SC)."
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Section04;
