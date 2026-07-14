import AccentTitle from "@/components/ui/accent-title";
import Badge from "@/components/ui/badge";
import pricingData from "@/common/data/pricing.json";
import PricingCard from "@/components/ui/pricing-card";
import Reveal, { RevealGroup } from "@/components/ui/reveal";

export default function Pricing() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-[1440px] border-t border-white/10">
      <Reveal>
        <div className="flex flex-col items-center px-5 py-16 text-center md:px-8 md:py-24">
          <Badge label={pricingData.badge} className="mb-6" />

          <AccentTitle
            as="h2"
            segments={pricingData.title}
            className="mb-5 w-full max-w-[300px] font-display text-[50px] font-medium leading-[1.05] text-white md:w-[500px] md:max-w-none md:text-[60px] lg:w-[650px] lg:text-[79.2px]"
          />

          <p className="max-w-[300px] text-sm leading-[1.7] text-muted md:max-w-sm md:text-base">
            {pricingData.description}
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <RevealGroup itemClassName="h-full min-h-0">
          {pricingData.plans.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} index={index} />
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
