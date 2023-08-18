"use client";

import { useState } from "react";
import { GrPrevious } from "react-icons/gr";
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";
import { GrNext } from "react-icons/gr";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import administracao from "../../public/images/categoryimages/administracao.jpg";
import arrecadacao from "../../public/images/categoryimages/arrecadacao.jpg";
import contabilidade from "../../public/images/categoryimages/contabilidade.jpg";
import educacao from "../../public/images/categoryimages/educacao.jpg";
import fiscal from "../../public/images/categoryimages/fiscal.jpg";
import governodigital from "../../public/images/categoryimages/governo-digital.jpg";
import procuradoria from "../../public/images/categoryimages/procuradoria.jpg";
import rh from "../../public/images/categoryimages/rh.jpg";
import saude from "../../public/images/categoryimages/saude.jpg";
import social from "../../public/images/categoryimages/social.jpg";
import suprimentos from "../../public/images/categoryimages/suprimentos.jpg";
import vigilancia from "../../public/images/categoryimages/vigilancia.png";

import { CiCalculator1 } from "react-icons/ci";
import { MdOutlinePersonSearch } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import { BsFileText } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import { MdQueryStats } from "react-icons/md";
import { TbFileCertificate } from "react-icons/tb";
import { GiTeacher } from "react-icons/gi";
import { GiHealthNormal } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { GiProtectionGlasses } from "react-icons/gi";

import Categories from "../Categories";
import Box from "../Box";

export const categories = [
  {
    title: "Contabilidade",
    icon: CiCalculator1,
    image: contabilidade,
    description:
      "A partir do sistema unificado da IPM, todas as informações referentes às despesas e receitas são salvas na nuvem e, no momento de prestar contas, os arquivos são gerados em poucos cliques.",
  },
  {
    title: "RH",
    icon: MdOutlinePersonSearch,
    image: rh,
    description:
      "O sistema contribui para a melhor gestão das rotinas administrativas referentes a contratações, afastamentos, pagamentos, concursos e solicitações diversas dos Servidores.",
  },
  {
    title: "Suprimentos",
    icon: BsCart4,
    image: suprimentos,
    description:
      "O gerenciamento de licitações, compras, contratos, patrimônio, frota e estoque torna-se prático e eficiente.",
  },
  {
    title: "Arrecadação",
    icon: GiReceiveMoney,
    image: arrecadacao,
    description:
      "O Atende.Net aumenta a arrecadação do seu município ao possibilitar um controle maior na cobrança dos impostos municipais como o IPTU, ISS, ITBI, entre outras taxas. O sistema IPM também garante uma gestão de indicadores mais eficiente.",
  },
  {
    title: "Fiscal",
    icon: BsFileText,
    image: fiscal,
    description:
      "O software desenvolvido pela IPM Sistemas oferece diversas funcionalidades que facilitam a cobrança e a fiscalização de tributos, como emissão de NFS-e, Nota Fiscal Premiada, ISSQN Bancos, entre outras facilidades.",
  },
  {
    title: "Governo Digital",
    icon: TfiWorld,
    image: governodigital,
    description:
      "Portal interativo totalmente disponibilizado para o autoatendimento do cidadão, automatizando as atividades e facilitando o acesso aos serviços e informações nas prefeituras.",
  },
  {
    title: "Administração Geral",
    icon: MdQueryStats,
    image: administracao,
    description:
      "A tecnologia IPM garante performance de Alta Gestão, com menus especializados, personalização de acessos definidos por privilégios, gerenciamento completo de indicadores, por tipos e categorias, envio de comunicados push e SMS, produção e publicação de Diário Oficial Eletrônico, gestão de ocorrências e emissão de relatórios, entre centenas de outras funcionalidades.",
  },
  {
    title: "Procuradoria",
    icon: TbFileCertificate,
    image: procuradoria,
    description:
      "A administração de leis, projetos, decretos, portarias e documentos legais pode ser realizada em um único sistema de forma otimizada.",
  },
  {
    title: "Educação",
    icon: GiTeacher,
    image: educacao,
    description:
      "A solução tecnológica da IPM para Gestão da Educação municipal permite o gerenciamento completo dos processos educacionais no âmbito do município de forma intuitiva.",
  },
  {
    title: "Saúde",
    icon: GiHealthNormal,
    image: saude,
    description:
      "O IPM Saúde permite o gerenciamento completo dos processos da saúde do município de forma intuitiva. Facilita e agiliza os atendimentos.",
  },
  {
    title: "Social",
    icon: IoIosPeople,
    image: social,
    description:
      "O IPM Social melhora a distribuição dos recursos físicos e financeiros do município, auxilia na gestão do planejamento, execução e controle dos serviços prestados ao cidadão, como a distribuição de benefícios, encaminhamentos e atendimentos realizados nas unidades do CRAS, CREAS e Centro POP.",
  },
  {
    title: "Vigilância",
    icon: GiProtectionGlasses,
    image: vigilancia,
    description:
      "O sistema permite gestão mais eficiente das informações e agiliza o trabalho dos agentes. Vistorias, atendimento de denúncias, geração de autos de infração, intimação e penalidade são registrados diretamente no sistema, sem uso de papel. Essa tecnologia permite controle total de indicadores e emissão de taxas e multas, com menos burocracia e mais agilidade, com envio de informações em tempo real para o sistema BPA, do Ministério da Saúde.",
  },
];

const SectionOne = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swiperRef, setSwiperRef] = useState<any>(null);

  const handleIconClick = (index: any) => {
    setCurrentIndex(index);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < categories.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };
  return (
    <div>
      <div className="hidden lg:flex items-center">
        <div className="group p-8 rounded-full bg-gray" onClick={prevHandler}>
          <FcPrevious className="flex group-hover:hidden" />
          <GrPrevious className="hidden group-hover:flex" />
        </div>
        <Swiper
          className="w-5/6"
          spaceBetween={50}
          slidesPerView={3}
          onSwiper={(swiper) => setSwiperRef(swiper)}>
          {categories.map((item, index) => (
            <div key={index}>
              <SwiperSlide>
                <Box
                  icon={item.icon}
                  onClick={() => handleIconClick(index)}
                  selected={currentIndex === index}
                />
                <div className="mt-10 text-center text-standard font-bold">
                  {item.title}
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
        <div className="group p-8 rounded-full bg-gray" onClick={nextHandler}>
          <FcNext className="flex group-hover:hidden" />
          <GrNext className="hidden group-hover:flex" />
        </div>
      </div>
      <div>
        <Categories
          title={categories[currentIndex].title}
          description={categories[currentIndex].description}
          image={categories[currentIndex].image}
        />
      </div>
      <div className="flex flex-row lg:hidden mt-16 gap-x-8 justify-center">
        <button
          className="group p-8 rounded-full bg-gray"
          onClick={handlePrevious}
          disabled={currentIndex === 0}>
          <FcPrevious className="flex group-hover:hidden" />
          <GrPrevious className="hidden group-hover:flex" />
        </button>
        <button
          className="group p-8 rounded-full bg-gray"
          onClick={handleNext}
          disabled={currentIndex === categories.length - 1}>
          <FcNext className="flex group-hover:hidden" />
          <GrNext className="hidden group-hover:flex" />
        </button>
      </div>
    </div>
  );
};

export default SectionOne;
