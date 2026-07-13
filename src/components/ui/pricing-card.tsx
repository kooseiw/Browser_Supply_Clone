import { cn } from "@/common/utils/cn";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import pricingData from "@/common/data/pricing.json";
import {
  IconBrowser,
  IconRefresh,
  IconFramer,
  IconVideo,
  IconGlobe,
  IconInfinity,
  IconSupport,
} from "@/components/ui/pricing-icons";

type Plan = (typeof pricingData.plans)[number];

const FEATURE_ICONS: Record<string, React.ReactNode> = {
  "Instant access to chosen template": <IconBrowser />,
  "All current templates": <IconBrowser />,
  "Lifetime template updates": <IconRefresh />,
  "3 months Framer Pro": <IconFramer />,
  "Step-by-step video tutorials": <IconVideo />,
  "Early access to all future templates": <IconGlobe />,
  "Use on unlimited sites": <IconInfinity />,
  "Priority support": <IconSupport />,
};

function FeatureIcon({ feature }: { feature: string }) {
  const icon = FEATURE_ICONS[feature] ?? <IconBrowser />;
  return <span className="shrink-0 text-white [&>svg]:size-6">{icon}</span>;
}

export default function PricingCard({
  plan,
  index,
}: {
  plan: Plan;
  index: number;
}) {
  const isLast = index === pricingData.plans.length - 1;

  return (
    <div
      className={cn(
        "relative flex flex-col overflow-hidden border-t border-white/10 p-8 md:p-10",
        !isLast && "border-b border-white/10 md:border-r md:border-b-0",
      )}
    >
      {plan.highlighted && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 select-none opacity-30 blur-2xl"
        >
          <Image
            src="/assets/background-web.png"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>
      )}

      <div className="relative z-10 flex flex-1 flex-col">
        <p className="mb-4 text-xs uppercase text-[#ABABAB] md:mb-6 md:text-sm">
          {plan.label}
        </p>

        <div className="mb-3 flex items-end justify-between gap-5 md:gap-4 mt-5 md:mt-0">
          <h3 className="font-display text-3xl font-medium leading-none text-white md:text-5xl">
            {plan.name}
          </h3>
          <div className="flex shrink-0 items-baseline gap-2 md:gap-2.5">
            <span className="font-display text-3xl font-medium leading-none text-white md:text-5xl">
              {plan.price}
            </span>
            {plan.originalPrice && (
              <span className="text-xl text-[#ABABAB] line-through md:text-3xl">
                {plan.originalPrice}
              </span>
            )}
          </div>
        </div>

        <p className="mb-6 max-w-[180px] md:max-w-none text-sm leading-[1.6] text-muted md:mb-8 md:text-base">
          {plan.description}
        </p>

        <p className="mb-4 text-xs uppercase text-[#ABABAB] md:text-sm">
          Included:
        </p>
        <ul className="mb-8 flex flex-col gap-3 md:mb-10">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-center gap-3">
              <FeatureIcon feature={feature} />
              <span className="text-sm text-white">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          className={cn(
            "mt-auto w-full rounded-sm py-6 text-base font-semibold",
            plan.highlighted
              ? "bg-white text-black"
              : "bg-white/8 text-white hover:bg-white/12",
          )}
        >
          {plan.cta}
        </Button>
      </div>
    </div>
  );
}
