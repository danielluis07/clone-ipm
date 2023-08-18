import Image from "next/image";
import sede from "../../../../public/images/Sem-Título-3.png";

const Section1 = () => {
  return (
    <div className="mt-20">
      <div className="flex flex-col gap-y-4 px-3 lg:flex-row lg:w-5/6 mx-auto">
        <div className="w-full lg:w-1/2">
          <p className="text-3xl text-strong font-extrabold lg:text-5xl">
            Quem somos
          </p>
          <p className="mt-10 text-standard">
            Somos uma empresa de tecnologia que atua no ramo de desenvolvimento
            de sistemas para a gestão pública desde 1996. Prefeituras, Câmaras
            de Vereadores, Tribunais de Contas, Fundos, Autarquias e Fundações
            são exemplos de órgãos públicos que utilizam as soluções
            tecnológicas da IPM Sistemas. Trabalhamos desenvolvendo Softwares de
            Gestão Pública – GRP 100% em nuvem (sem emuladores) que permitam aos
            nossos clientes alcançarem melhores resultados, como o aumento de
            receita e a diminuição de custos operacionais, com oferta de
            atendimento de qualidade aos cidadãos, de forma mais eficiente e
            menos burocrática. Estamos nos Estados do RS, SC, PR, SP e MG, e
            seguimos em expansão.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden w-full lg:w-1/2">
          <Image src={sede} alt="image" className="lg:mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Section1;
