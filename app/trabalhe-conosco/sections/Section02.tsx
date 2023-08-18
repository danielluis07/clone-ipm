"use client";

import Image from "next/image";
import thumbnail from "../../../public/images/thumbnail.png";

const Section02 = () => {
  return (
    <div className="mt-20">
      <div className="flex flex-col gap-y-4 px-3 lg:flex-row lg:w-5/6 mx-auto">
        <div className="w-full lg:w-1/2">
          <p className="text-3xl text-strong font-extrabold lg:text-5xl w-3/5 mx-auto lg:mx-0">
            Por que escolher tecnologia?
          </p>
          <p className="mt-10 text-standard w-5/6 mx-auto lg:mx-0">
            A tecnologia move o mundo e recria o futuro das pessoas. Ela evolui
            através de ideias e da coragem de transformá-la em solução.
            Trabalhar com tecnologia é exercitar a criatividade a todo instante,
            em um campo inovador e transformador. A tecnologia está por todos os
            lados, como uma verdadeira geradora de oportunidades no mercado de
            trabalho. Só em Santa Catarina, que se destaca nacionalmente como
            polo tecnológico, tem apresentado números relevantes. O leque de
            atuação é gigantesco, com oportunidades em empresas que, de alguma
            forma, melhoram a vida das pessoas e do planeta.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden w-full lg:w-1/2">
          <Image src={thumbnail} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Section02;
