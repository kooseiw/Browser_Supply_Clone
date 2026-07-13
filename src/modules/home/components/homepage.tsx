import Hero from "./hero";
import Stats from "./stats";
import Templates from "./templates";
import FrameLines from "@/components/ui/frame-lines";
import Benefits from "./benefits";
import Framer from "./framer";
import Process from "./process";
import Success from "./success";
import Pricing from "./pricing";
import Quiz from "./quiz";
import Founder from "./founder";
import Review from "./review";

export default function Homepage() {
  return (
    <div className="relative overflow-hidden">
      <FrameLines />
      <Hero />
      <Stats />
      <Templates />
      <Benefits />
      <Framer />
      <Process />
      <Success />
      <Pricing />
      <Quiz />
      <Founder />
      <Review />
    </div>
  );
}
