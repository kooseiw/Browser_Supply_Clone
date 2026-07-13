import AccentTitle from "@/components/ui/accent-title";
import Badge from "@/components/ui/badge";
import pricingData from "@/common/data/pricing.json";
import PricingCard from "@/components/ui/pricing-card";

export default function Pricing() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-[1440px] border-t border-white/10">
      <div className="flex flex-col items-center px-8 py-24 text-center">
        <Badge label={pricingData.badge} className="mb-6" />

        <AccentTitle
          as="h2"
          segments={pricingData.title}
          className="w-[650px] mb-5 font-display text-[79.2px] font-medium leading-[1.05] text-white"
        />

        <p className="max-w-sm text-base leading-[1.7] text-muted">
          {pricingData.description}
        </p>
      </div>

      <div className="grid grid-cols-2">
        {pricingData.plans.map((plan, index) => (
          <PricingCard key={plan.id} plan={plan} index={index} />
        ))}
      </div>
    </section>
  );
}
