import Badge from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AccentTitle from "@/components/ui/accent-title";
import heroData from "@/common/data/hero.json";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center">
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-5 text-center">
        <Badge
          className="mb-10"
          iconSrc={heroData.badge.iconSrc}
          iconAlt="Framer"
          label={heroData.badge.label}
        />

        <AccentTitle
          segments={heroData.title}
          className="mb-6 max-w-full font-display text-[100px] font-medium leading-none tracking-[-0.01em] text-white"
        />

        <p className="mx-auto mb-10 max-w-[550px] text-base font-normal leading-[1.7] text-muted">
          {heroData.description}
        </p>

        <Button className="w-fit px-6 py-6 text-base font-semibold bg-white text-black">
          {heroData.cta}
        </Button>
      </div>
    </section>
  );
}
