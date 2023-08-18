"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Banner from "./Banner";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Button from "./Button";

const Hero = () => {
  return (
    <div>
      <Swiper
        navigation={true}
        rewind={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}>
        <SwiperSlide>
          <Banner classname="w-full h-[670px] bg-[url('../public/images/bannersmobile/BannerM1.png')] md:bg-[url('../public/images/banners/Banner1.png')] bg-cover bg-no-repeat">
            {
              <div className="h-full flex items-end justify-center">
                <div className="mb-14">
                  <Button
                    classname="text-white hover:border-orange hover:text-orange hover:bg-white"
                    label="Conheça"
                  />
                </div>
              </div>
            }
          </Banner>
        </SwiperSlide>
        <SwiperSlide>
          <Banner classname="w-full h-[670px] bg-[url('../public/images/bannersmobile/BannerM2.png')] md:bg-[url('../public/images/banners/Banner2.png')] bg-cover bg-no-repeat">
            {
              <div className="h-full flex flex-col gap-y-8 items-center justify-center lg:items-start lg:pl-28">
                <div className="flex lg:w-3/5 flex-col gap-y-8 lg:ml-40">
                  <p className="text-center lg:text-start text-sky-500 text-5xl font-extrabold lg:w-4/5">
                    Somos uma das 25 melhores empresas para mulheres do Brasil
                  </p>
                  <p className="text-center lg:text-start text-orange lg:w-3/5">
                    Consultoria Global Great Place to Work coloca a IPM como
                    única empresa de tecnologia para gestão pública recebedora
                    do prêmio nacional
                  </p>
                </div>
                <div className="lg:ml-40">
                  <Button
                    classname="text-orange border-orange hover:border-white"
                    label="Acesse e Confira"
                  />
                </div>
              </div>
            }
          </Banner>
        </SwiperSlide>
        <SwiperSlide>
          <Banner classname="w-full h-[670px] bg-[url('../public/images/bannersmobile/BannerM3.jpg')] md:bg-[url('../public/images/banners/Banner3.jpg')] bg-cover bg-no-repeat">
            {
              <div className="h-full flex flex-col gap-y-8 items-center justify-center lg:items-start">
                <div className="flex flex-col gap-y-8 lg:ml-40">
                  <p className="text-center lg:text-start text-white text-5xl font-extrabold">
                    Fintech Soluções Financeiras
                  </p>
                  <p className="text-center lg:text-start text-white">
                    Transformando o futuro da gestão financeira municipal
                  </p>
                </div>
                <div className="lg:ml-40">
                  <Button
                    classname="text-white hover:border-orange hover:text-orange hover:bg-white"
                    label="Solicite uma demonstração"
                  />
                </div>
              </div>
            }
          </Banner>
        </SwiperSlide>
        <SwiperSlide>
          <Banner classname="w-full h-[670px] bg-[url('../public/images/bannersmobile/BannerM4.jpg')] md:bg-[url('../public/images/banners/Banner4.jpg')] bg-cover bg-no-repeat">
            {
              <div className="h-full flex flex-col gap-y-8 items-center justify-center lg:items-start">
                <div className="flex flex-col gap-y-8 lg:w-3/5 lg:ml-40">
                  <p className="text-center lg:text-start text-white text-5xl font-extrabold">
                    IPM Sáude é a melhor solução do Brasil
                  </p>
                  <p className="text-center lg:text-start text-white">
                    Tecnologia para cidades inteligentes da IPM ganha 1º lugar
                    no Prêmio Connected Smart Cities, Categoria Negócios em
                    Operação
                  </p>
                </div>
                <div className="lg:ml-40">
                  <Button
                    classname="text-white hover:border-orange hover:text-orange hover:bg-white"
                    label="Clique para assistir"
                  />
                </div>
              </div>
            }
          </Banner>
        </SwiperSlide>
        <SwiperSlide>
          <Banner classname="w-full h-[670px] bg-[url('../public/images/bannersmobile/BannerM5.png')] md:bg-[url('../public/images/banners/Banner5.png')] bg-cover bg-no-repeat">
            {
              <div className="h-full flex flex-col gap-y-8 items-center justify-center lg:items-start">
                <div className="flex flex-col gap-y-8 lg:ml-40">
                  <p className="text-center lg:text-start text-white text-5xl font-extrabold">
                    Nós trabalhamos por um propósito
                  </p>
                  <p className="text-center lg:text-start text-white">
                    Assista ao nosso novo vídeo Manifesto
                  </p>
                </div>
                <div className="lg:ml-40">
                  <Button
                    classname="text-white hover:border-orange hover:text-orange hover:bg-white"
                    label="Acesse e Confira"
                  />
                </div>
              </div>
            }
          </Banner>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
