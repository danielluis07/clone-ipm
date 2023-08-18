import Container from "@/components/Container";
import Hero from "../trabalhe-conosco/components/Hero";
import Section01 from "./sections/Section01";
import Section02 from "./sections/Section02";
import Section03 from "./sections/Section03";
import Section04 from "./sections/Section04";
import Navbar from "@/components/Navbar";

const Page = () => {
  return (
    <div>
      <Navbar classname="bg-standard" />
      <Hero />
      <Container>
        <Section01 />
        <Section02 />
        <Section03 />
      </Container>
      <Section04 />
    </div>
  );
};

export default Page;
