"use client";

import { CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";

const OnlySection = () => {
  return (
    <div className="mt-20">
      <div className="flex w-full md:w-5/6 md:mx-auto flex-col md:flex-row md:justify-between">
        {/* coluna 1 */}
        <div className="flex flex-col order-last md:order-first gap-y-20 w-full md:w-[350px] md:max-w-[350px]">
          <div className="flex flex-col gap-y-2">
            <p className="font-extrabold text-strong text-center">
              Sede Administrativa Florianópolis, SC
            </p>
            <p className="text-center text-standard">
              Rua Cristóvão Nunes Pires, 86
            </p>
            <p className="text-center text-standard">Torre Süden – 6º andar</p>
            <p className="text-center text-standard">Centro</p>
            <div className="flex items-center justify-center gap-x-2 mx-auto">
              <BsTelephone className="text-orange" />
              <p className="font-extrabold text-lg text-strong">48 3031 7500</p>
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
          <div>
            <p className="font-extrabold text-strong text-center">
              Siga nas redes Sociais
            </p>
            <div className="flex mt-4 flex-row gap-x-2 w-min mx-auto">
              <CiTwitter className="text-4xl text-orange" />
              <CiFacebook className="text-4xl text-orange" />
              <CiInstagram className="text-4xl text-orange" />
              <CiLinkedin className="text-4xl text-orange" />
              <CiYoutube className="text-4xl text-orange" />
            </div>
          </div>
        </div>
        {/* coluna 2 */}
        <div className="w-full pb-20 order-first md:order-last md:w-[680px] md:max-w-[680px] px-4">
          <p className="text-center font-bold text-standard md:text-4xl md:text-start">
            Teremos o maior prazer em fornecer mais informações sobre nossa
            empresa
          </p>
          <div className="flex flex-col gap-y-4 mt-10">
            <div className="flex flex-col gap-y-2">
              <label className="text-sm font-extrabold text-standard">
                Nome*
              </label>
              <input
                className="border border-standard rounded-lg py-[20px] px-4 focus:outline-none w-full"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="text-sm font-extrabold text-standard">
                Email*
              </label>
              <input
                className="border border-standard rounded-lg py-[20px] px-4 focus:outline-none w-full"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="text-sm font-extrabold text-standard">
                Telefone*
              </label>
              <input
                className="border border-standard rounded-lg py-[20px] px-4 focus:outline-none w-full"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="text-sm font-extrabold text-standard">
                Cargo*
              </label>
              <input
                className="border border-standard rounded-lg py-[20px] px-4 focus:outline-none w-full"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="text-sm font-extrabold text-standard">
                Qual a sua área?*
              </label>
              <input
                className="border border-standard rounded-lg py-[20px] px-4 focus:outline-none w-full"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="text-sm font-extrabold text-standard">
                Cidade*
              </label>
              <input
                className="border border-standard rounded-lg py-[20px] px-4 focus:outline-none w-full"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="text-sm font-extrabold text-standard">
                Assunto
              </label>
              <input
                className="border border-standard rounded-lg py-[20px] px-4 focus:outline-none w-full"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="text-sm font-extrabold text-standard">
                Mensagem*
              </label>
              <textarea
                // @ts-ignore
                rows="4"
                className="focus:outline-none w-full px-4 py-2 border border-standard rounded-lg"></textarea>
            </div>
            <div className="flex flex-row gap-x-2 items-center">
              <input type="checkbox" />
              <p className="text-sm font-extrabold text-standard">
                Eu concordo em receber comunicações.
              </p>
            </div>
            <div>
              <p className="text-sm font-extrabold text-standard">
                A IPM Sistemas está comprometida a proteger e respeitar sua
                privacidade, utilizaremos seus dados apenas para fins de
                marketing. Você pode alterar suas preferências a qualquer
                momento.
              </p>
            </div>
            <div className="bg-strongred rounded-lg cursor-pointer text-white text-xl text-center font-extrabold py-4 w-full">
              Enviar Mensagem
            </div>
            <p className="text-xs text-lightgray">
              Prometemos não utilizar suas informações de contato para enviar
              qualquer tipo de SPAM.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlySection;
