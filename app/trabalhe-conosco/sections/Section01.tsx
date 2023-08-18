"use client";

import Image from "next/image";
import trabalho from "../../../public/images/trabalho.jpg";

const Section01 = () => {
  return (
    <div className="mt-20">
      <div className="flex flex-col gap-y-4 px-3 lg:flex-row lg:w-5/6 mx-auto">
        <div className="w-full lg:w-1/2">
          <p className="text-3xl text-strong font-extrabold lg:text-5xl w-3/5 mx-auto lg:mx-0">
            Por que trabalhar na IPM?
          </p>
          <p className="mt-10 text-standard w-5/6 mx-auto lg:mx-0">
            Trabalhar por propósito. Aqui na empresa somos movidos pela inovação
            e pelo impacto de melhorar a vida das pessoas. Desenvolvemos
            soluções inovadoras em tecnologia para a gestão pública municipal
            que descomplica e torna a administração pública mais ágil,
            eficiente, inteligente e transparente, e mais próxima das pessoas.
            Além de uma empresa sólida, somos pioneiros em cloud computing e
            SaaS no segmento e certificados pela consultoria global Great Place
            to Work (GPTW), como um ambiente de trabalho que valoriza o respeito
            e incentiva fortemente a criatividade e a inovação. Aqui, você
            cresce com a gente.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden w-full lg:w-1/2">
          <Image src={trabalho} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Section01;
