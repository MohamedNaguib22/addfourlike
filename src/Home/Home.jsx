import { About } from "./About/About";
import { HeroSection } from "./HeroSection/HeroSection";
import { Refer } from "./Refer/Refer";
import { Footer } from "./Footer/Footer";
import { Times } from "./Timer/Times";
import { CopyRight } from "./CopyRight/CopyRight";
import { Target } from "./Target/Target";
export const Home = () => {
  return (
    <div className="overflow-hidden">
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
