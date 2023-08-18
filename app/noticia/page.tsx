import Navbar from "@/components/Navbar";
import Hero from "../noticia/components/Hero";
import NewsLetter from "./components/NewsLetter";
import NewsSection from "./components/NewsSection";
import Container from "@/components/Container";

const Page = () => {
  return (
    <div>
      <Navbar classname="bg-transparent absolute" />
      <Hero />
      <Container>
        <NewsSection />
      </Container>
      <NewsLetter />
    </div>
  );
};

export default Page;
