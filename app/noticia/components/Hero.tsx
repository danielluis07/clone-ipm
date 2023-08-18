"use client";

const Hero = () => {
  return (
    <div className="w-full flex items-center justify-center h-[670px] bg-[url('../public/images/banners/banner-noticia.png')] bg-cover bg-no-repeat">
      <div className="w-5/6">
        <h3 className="text-center text-5xl text-white font-extrabold">
          Notícia Aleatória
        </h3>
        <p className="text-center text-sm pt-10 text-white">
          08/06/23 - Atualizado em 08/06/23
        </p>
      </div>
    </div>
  );
};

export default Hero;
