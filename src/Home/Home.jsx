import { About } from "./About/About";
import { HeroSection } from "./HeroSection/HeroSection";
import { Refer } from "./Refer/Refer";
import { Footer } from "./Footer/Footer";
import { Times } from "./Timer/Times";
import { CopyRight } from "./CopyRight/CopyRight";
import { Target } from "./Target/Target";
import Navbar from "../Pages/Navbar/Navbar";

export const Home = () => {
  return (
    <div className="overflow-hidden">
      <Navbar border="text-white  border-2 border-white" />
      <HeroSection />
      <Times />
      <Target />
      <About />
      <Refer />
      <Footer />
      <CopyRight />
    </div>
  );
};
