import { About } from "./About/About";
import { HeroSection } from "./HeroSection/HeroSection";
import { Refer } from "./Refer/Refer";
export const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <About />
      <Refer />
    </div>
  );
};
