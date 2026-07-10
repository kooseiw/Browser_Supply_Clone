import { Gambetta, InterFont } from "@/common/styles/font";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden w-full min-h-screen">
      <Image
        src="/image/background-web.png"
        alt=""
        aria-hidden="true"
        fill
        className="scale-110 object-cover object-right blur-2xl pointer-events-none select-none"
        priority
      />

      <div className="relative z-10 flex flex-col items-center text-center px-5 w-full max-w-7xl mx-auto">
        <div className="mb-10 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm">
          <Image
            src="/icon/framer-icon.svg"
            alt="Framer"
            width={12}
            height={14}
            className="opacity-80"
          />
          <span
            className={`${InterFont.className} text-[11px] font-medium uppercase tracking-[0.12em] text-white/70`}
          >
            Framer Templates
          </span>
        </div>

        <h1
          className={`${Gambetta.className} text-white font-medium leading-none tracking-[-0.01em] text-[clamp(52px,7.8vw,100px)] max-w-[960px] mb-6`}
        >
          Webs<em>i</em>te te<em>m</em>pla<em>t</em>es
          <br />d<em>e</em>si<em>g</em>n<em>e</em>d to co<em>n</em>ve<em>r</em>t
        </h1>

        <p
          className={`${InterFont.className} text-[#ABABAB] text-base leading-[1.7] font-normal max-w-[550px] mx-auto mb-10`}
        >
          Launch your online business today using an easy-to-customize Framer
          website template without writing a single line of code.
        </p>

        <button
          type="button"
          className={`${InterFont.className} bg-white text-black text-base font-semibold px-6 py-4 rounded cursor-pointer hover:bg-white/80`}
        >
          Browse templates
        </button>
      </div>
    </section>
  );
}
