"use client";

import Image from "next/image";
import { motion } from "motion/react";

type Integration = {
  name: string;
  src: string;
};

type IntegrationIconsProps = {
  items: Integration[];
};

const BASE_SCALE = [0.92, 0.68, 1.15, 0.78, 0.95];
const PEAK_SCALE = [1.18, 0.92, 1.4, 1.05, 1.2];
const PHASE_DURATION = 1.2;
const GROUP_A = new Set(["Lemon Squeezy", "Cal.com", "Gumroad"]);

export default function IntegrationIcons({ items }: IntegrationIconsProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 md:gap-1.5 lg:gap-2">
      {items.map((item, index) => {
        const rest = BASE_SCALE[index % BASE_SCALE.length];
        const peak = PEAK_SCALE[index % PEAK_SCALE.length];
        const isGroupA = GROUP_A.has(item.name);

        return (
          <motion.div
            key={item.name}
            className="relative size-10 origin-center will-change-transform md:size-7 lg:size-7"
            animate={{ scale: [rest, peak, rest] }}
            transition={{
              duration: PHASE_DURATION,
              times: [0, 0.45, 1],
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: PHASE_DURATION,
              delay: isGroupA ? 0 : PHASE_DURATION,
            }}
          >
            <Image
              src={item.src}
              alt={item.name}
              width={40}
              height={40}
              className="size-full rounded-sm object-cover"
            />
          </motion.div>
        );
      })}
    </div>
  );
}
