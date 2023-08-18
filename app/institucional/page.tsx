import Container from "@/components/Container";
import Hero from "../institucional/components/Hero";
import Section1 from "./components/sections/Section1";
import Section2 from "./components/sections/Section2";
import Section3 from "./components/sections/Section3";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar classname="bg-standard" />
      <Hero />
      <Container>
        <Section1 />
        <Section2 />
      </Container>
      <Section3 />
    </div>
  );
};

export default Home;
