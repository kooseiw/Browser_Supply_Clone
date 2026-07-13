import AccentTitle from "@/components/ui/accent-title";
import Badge from "@/components/ui/badge";
import pricingData from "@/common/data/pricing.json";
import PricingCard from "@/components/ui/pricing-card";

export default function Pricing() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-[1440px] border-t border-white/10">
      <div className="flex flex-col items-center px-5 py-16 text-center md:px-8 md:py-24">
        <Badge label={pricingData.badge} className="mb-6" />

        <AccentTitle
          as="h2"
          segments={pricingData.title}
          className="mb-5 w-full max-w-[300px] font-display text-[50px] font-medium leading-[1.05] text-white md:max-w-none md:w-[500px] lg:w-[650px] md:text-[60px] lg:text-[79.2px]"
        />

        <p className="max-w-[300px] md:max-w-sm text-sm leading-[1.7] text-muted md:text-base">
          {pricingData.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {pricingData.plans.map((plan, index) => (
          <PricingCard key={plan.id} plan={plan} index={index} />
        ))}
      </div>
    </section>
  );
}
