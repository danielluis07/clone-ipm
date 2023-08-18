"use client";

import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { BsSend } from "react-icons/bs";

const NewsLetter = () => {
  return (
    <div className="flex items-center w-full mt-20 h-[670px] bg-[url('../public/images/bg-newsletter.png')] bg-cover lg:bg-auto bg-no-repeat lg:bg-right">
      <div className="w-4/6 max-w-[1536px] mx-auto">
        <MdOutlineMailOutline className="text-orange mx-auto lg:mx-0 text-4xl font-extrabold" />
        <h3 className="text-center lg:text-start text-2xl lg:text-5xl font-extrabold text-strong lg:w-1/3">
          Assine nossa newsletter
        </h3>
        <p className="text-center lg:text-start mt-6 font-bold text-standard">
          Assine nossa newsletter
        </p>
        <div>
          <div className="mt-6 relative w-full lg:max-w-[490px] mb-4">
            <input
              placeholder="Seu e-mail"
              className="border border-standard text-standard rounded-xl relative py-[16px] px-4 focus:outline-none w-full lg:max-w-[490px]"
              type="email"
            />
            <MdOutlineMarkEmailUnread className="text-orange text-xl absolute top-[18px] right-[10px]" />
          </div>
          <div className="flex flex-row gap-x-2 w-full max-w-[490px]">
            <input type="checkbox" />
            <p className="text-standard text-xs">
              Gostaria de receber informações promocionais com base nas minhas
              preferências e meu comportamento sobre os produtos, serviços,
              eventos e promoções da IPM Sistemas. Posso cancelar a assinatura
              facilmente a qualquer momento!
            </p>
          </div>
          <div className="flex flex-row gap-x-2 items-center justify-center rounded-lg p-6 w-[208px] group bg-lightorange hover:bg-white transition duration-300 my-4">
            <p className="text-white font-bold group-hover:text-standard transition duration-300">
              Enviar
            </p>
            <BsSend className="text-white group-hover:text-standard transition duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
