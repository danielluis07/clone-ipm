"use client";

import Container from "./Container";

import { AiOutlinePlus } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";

const SectionFive = () => {
  return (
    <>
      <Container>
        <div className="mt-20">
          <div className="w-4/5 mx-auto">
            <div className="lg:flex">
              <div className="flex flex-col gap-y-8 lg:flex-row">
                <div className="flex flex-col gap-y-2">
                  <p className="font-extrabold text-strong text-center">
                    Sede Administrativa Florianópolis, SC
                  </p>
                  <p className="text-center text-standard">
                    Rua Cristóvão Nunes Pires, 86
                  </p>
                  <p className="text-center text-standard">
                    Torre Süden – 6º andar
                  </p>
                  <p className="text-center text-standard">Centro</p>
                  <div className="flex items-center justify-center gap-x-2 mx-auto">
                    <BsTelephone className="text-orange" />
                    <p className="font-extrabold text-lg text-strong">
                      48 3031 7500
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="font-extrabold text-strong text-center">
                    Centro de Tecnologia Rio do Sul, SC
                  </p>
                  <p className="text-center text-standard">
                    Rua Duque de Caxias, 180
                  </p>
                  <p className="text-center text-standard">Jardim América</p>
                  <div className="flex items-center justify-center gap-x-2 mx-auto">
                    <BsTelephone className="text-orange" />
                    <p className="flex items-center font-extrabold text-lg text-strong">
                      47 3531 1500
                    </p>
                  </div>
                </div>
              </div>
              <div className="sm:w-3/5 sm:ml-20">
                <div className="hidden lg:flex gap-x-2">
                  <p className="text-standard">Sobre a IPM</p>
                  <p className="text-standard">Notícias</p>
                  <p className="text-standard">Blog</p>
                  <p className="text-standard">Acesso comercial</p>
                  <p className="text-standard">Contato</p>
                  <p className="text-standard">Política de privacidade</p>
                </div>
                <div>
                  <p className="text-strong font-extrabold pt-10 pb-4">
                    Assine nossa newsletter
                  </p>
                  <input
                    className="border border-standard rounded-xl py-[14px] px-4 focus:outline-none w-full"
                    type="email"
                  />
                  <div className="flex items-center justify-center mx-auto px-8 p-4 bg-orange rounded-xl mt-2 mb-8 hover:shadow-minibox transition">
                    <p className="text-white">Enviar</p>
                    <FiArrowUpRight className="text-white" />
                  </div>
                  <div className="flex flex-row gap-x-2">
                    <input type="checkbox" />
                    <p className="text-standard text-xs">
                      Gostaria de receber informações promocionais com base nas
                      minhas preferências e meu comportamento sobre os produtos,
                      serviços, eventos e promoções da IPM Sistemas. Posso
                      cancelar a assinatura facilmente a qualquer momento!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-4 mt-20 pb-20">
              <p className="text-standard text-xs text-center">
                © 2022 IPM Sistemas de Gestão Pública. Todos os direitos
                reservados.
              </p>
              <div className="flex flex-row gap-x-2 w-min mx-auto">
                <CiTwitter className="text-4xl text-strong" />
                <CiFacebook className="text-4xl text-strong" />
                <CiInstagram className="text-4xl text-strong" />
                <CiLinkedin className="text-4xl text-strong" />
                <CiYoutube className="text-4xl text-strong" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SectionFive;
