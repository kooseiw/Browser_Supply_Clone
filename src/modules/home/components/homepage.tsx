import Image from "next/image";
import Hero from "./hero";
import Stats from "./stats";
import FrameLines from "@/components/ui/frame-lines";

export default function Homepage() {
  return (
    <div className="relative overflow-hidden">
      <Image
        src="/image/background-web.png"
        alt=""
        aria-hidden="true"
        fill
        className="scale-110 blur-3xl pointer-events-none select-none"
        priority
      />

      <FrameLines />
      <Hero />
      <Stats />
    </div>
  );
}
