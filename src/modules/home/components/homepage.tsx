import Image from "next/image";
import Hero from "./hero";
import Stats from "./stats";
import Templates from "./templates";
import FrameLines from "@/components/ui/frame-lines";
import Benefits from "./benefits";
import Framer from "./framer";
import Process from "./process";
import Success from "./success";
import Pricing from "./pricing";

export default function Homepage() {
  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden select-none"
      >
        <Image
          src="/assets/background-web.png"
          alt=""
          fill
          priority
          className="scale-150 object-[105%_50%] blur-2xl"
        />
      </div>

      <FrameLines />
      <Hero />
      <Stats />
      <Templates />
      <Benefits />
      <Framer />
      <Process />
      <Success />
      <Pricing />
    </div>
  );
}
