import Banner from "@/components/Banner";
import Box from "@/components/Box";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SectionFour from "@/components/sections/SectionFour";
import SectionOne from "@/components/sections/SectionOne";
import SectionThree from "@/components/sections/SectionThree";
import SectionTwo from "@/components/sections/SectionTwo";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar classname="bg-orange" />
      <Hero />
      <Container>
        <div className="w-full px-4">
          <p className="text-2xl text-strong lg:text-5xl text-center font-extrabold py-10 mt-10">
            Plataforma única de gestão pública
          </p>
          <SectionOne />
        </div>
      </Container>
      <SectionTwo />
      <Container>
        <SectionThree />
      </Container>
      <SectionFour />
    </div>
  );
}
