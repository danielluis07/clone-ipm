"use client";

import { AiOutlineArrowRight } from "react-icons/ai";

const Section3 = () => {
  return (
    <div className="mt-28">
      <div className="h-[850px] sm:h-[800px] bg-[url('../public/images/banners/banner-dna.png')] bg-cover bg-no-repeat px-3">
        <div className="pt-16">
          <p className="text-orange text-sm text-center tracking-[.30em]">
            INOVAÇÃO COMO DNS
          </p>
          <p className="text-white text-3xl lg:text-5xl text-center font-extrabold lg:mt-8 lg:w-1/3 lg:mx-auto">
            Soluções tecnológicas práticas e eficientes
          </p>
        </div>
        <div className="lg:flex lg:gap-12 justify-center">
          <div className="mt-14 lg:mt-16 lg:w-[350px]">
            <p className="text-orange text-center lg:text-start">Missão</p>
            <p className="text-white text-center mt-6 lg:text-start">
              Ser a facilitadora tecnológica para que a gestão pública
              brasileira possa transformar a vida das pessoas e das cidades,
              propiciando mais eficiência, agilidade e melhores serviços à
              sociedade.
            </p>
          </div>
          <div className="mt-8 lg:mt-16 lg:w-[350px]">
            <p className="text-orange text-center lg:text-start">Visão</p>
            <p className="text-white text-center mt-6 lg:text-start">
              Ser referência de inovação em tecnologia e reconhecida como líder
              na implementação de soluções que impactam positivamente a gestão
              pública.
            </p>
          </div>
          <div className="lg:mt-16">
            <p className="text-orange text-center mt-6 lg:mt-0 lg:text-start">
              Valores
            </p>
            <div className="flex flex-row mt-6">
              <div className="w-1/2">
                <div className="flex items-center gap-2">
                  <AiOutlineArrowRight className="text-orange" />
                  <p className="text-white">Ética</p>
                </div>
                <div className="flex items-center gap-2">
                  <AiOutlineArrowRight className="text-orange" />
                  <p className="text-white">Protagonismo</p>
                </div>
                <div className="flex items-center gap-2">
                  <AiOutlineArrowRight className="text-orange" />
                  <p className="text-white">Colaboração</p>
                </div>
                <div className="flex items-center gap-2">
                  <AiOutlineArrowRight className="text-orange" />
                  <p className="text-white">Inclusão</p>
                </div>
              </div>
              <div className="w-1/2">
                <div className="flex items-center gap-2">
                  <AiOutlineArrowRight className="text-orange" />
                  <p className="text-white">Espírito Inovador</p>
                </div>
                <div className="flex items-center gap-2">
                  <AiOutlineArrowRight className="text-orange" />
                  <p className="text-white">Sustentabilidade</p>
                </div>
                <div className="flex items-center gap-2">
                  <AiOutlineArrowRight className="text-orange" />
                  <p className="text-white">Resolução</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[800px] flex justify-center items-center bg-[url('../public/images/banners/banner-celular.png')] bg-cover bg-no-repeat">
        <div className="w-11/12 mx-auto">
          <p className="text-white font-extrabold text-3xl lg:text-7xl text-center w-11/12 mx-auto">
            Gestão pública ágil e com poucos cliques
          </p>
          <p className="text-white text-center mt-4 lg:w-2/5 lg:mx-auto">
            Adoção da tecnologia 100% em nuvem organiza e facilita as rotinas
            internas nas repartições públicas, resultando em maior economia,
            otimização de processos e atendimento de melhor qualidade ao
            cidadão.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
