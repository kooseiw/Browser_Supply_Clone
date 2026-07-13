import Badge from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AccentTitle from "@/components/ui/accent-title";
import heroData from "@/common/data/hero.json";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center">
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center px-8 text-center md:px-5">
        <Badge
          className="mb-6 md:mb-10"
          iconSrc={heroData.badge.iconSrc}
          iconAlt="Framer"
          label={heroData.badge.label}
        />

        <AccentTitle
          segments={heroData.title}
          className="mb-5 max-w-[250px] md:max-w-full font-display text-[55px] font-medium leading-[1.05] tracking-[-0.01em] text-white md:mb-6 md:text-[100px] md:leading-none"
        />

        <p className="mx-auto mb-8 max-w-[350px] md:max-w-[550px] text-base font-normal leading-[1.7] text-muted md:mb-10 md:text-base">
          {heroData.description}
        </p>

        <Button className="w-full px-6 py-6 text-base font-semibold bg-white text-black md:w-fit">
          {heroData.cta}
        </Button>
      </div>
    </section>
  );
}
