import Navbar from "@/components/Navbar";
import Hero from "../fale-conosco/components/Hero";
import OnlySection from "./sections/OnlySection";
import Container from "@/components/Container";

const Page = () => {
  return (
    <div>
      <Navbar classname="bg-standard" />
      <Hero />
      <Container>
        <OnlySection />
      </Container>
    </div>
  );
};

export default Page;
