"use client";

import Banner from "@/components/Banner";

const Hero = () => {
  return (
    <div>
      <Banner classname="w-full flex justify-center items-center h-[540px] bg-[url('../public/images/banners/banner-contato.png')] bg-cover bg-no-repeat">
        <div className="w-5/6 mx-auto">
          <h3 className="text-white w-2/5 font-extrabold text-xl mx-auto md:mx-0 mt-10 lg:text-5xl text-center md:text-start">
            Fale com a IPM Sistemas
          </h3>
        </div>
      </Banner>
    </div>
  );
};

export default Hero;
