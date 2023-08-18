"use client";

import Image from "next/image";
import sinuca from "../../../public/images/sinuca.jpg";

const Section03 = () => {
  return (
    <div className="mt-20">
      <div className="flex flex-col gap-y-4 px-3 lg:flex-row lg:w-5/6 mx-auto">
        <div className="rounded-lg overflow-hidden w-full lg:w-1/2">
          <Image src={sinuca} alt="image" />
        </div>
        <div className="w-full lg:w-1/2">
          <p className="text-3xl text-strong font-extrabold mx-auto lg:text-5xl w-3/5">
            #VempraIPM
          </p>
          <p className="mt-10 text-standard w-5/6 mx-auto">
            Aqui, entendemos que, além de oferecer um ótimo produto, é preciso
            contar com uma equipe altamente motivada. Por isso, valorizamos
            nossos talentos oferecendo oportunidades de crescimento na carreira,
            salário compatível com a função e com o mercado e um ambiente
            inovador. Nossas equipes trabalham de forma colaborativa e com
            propósito definido. Contamos com convênios voltados aos cuidados com
            a saúde e os tradicionais benefícios de vale-refeição, alimentação e
            transporte. E modernos ambientes, como no nosso Centro Tecnológico,
            em Rio do Sul (SC), que além de toda infraestrutura de escritórios,
            conta com ampla sala de recreação e integração social. O conforto
            também está na nossa sede administrativa, em Florianópolis (SC).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section03;
