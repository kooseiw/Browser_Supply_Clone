"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { cn } from "@/common/utils/cn";

type TemplateCardProps = {
  name: string;
  category: string;
  price: string;
  image: string;
  isNew?: boolean;
  className?: string;
};

const cardMotion = {
  rest: {
    backgroundColor: "rgba(255, 255, 255, 0)",
    backdropFilter: "blur(0px)",
  },
  hover: {
    backgroundColor: "rgba(255, 255, 255, 0.06)",
    backdropFilter: "blur(16px)",
  },
};

const imageMotion = {
  rest: {
    y: 0,
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.25)",
  },
  hover: {
    y: -16,
    boxShadow: "0 28px 50px rgba(0, 0, 0, 0.55)",
  },
};

export default function TemplateCard({
  name,
  category,
  price,
  image,
  isNew = false,
  className,
}: TemplateCardProps) {
  return (
    <motion.article
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={cardMotion}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "relative flex flex-col gap-5 p-8 will-change-[background-color,backdrop-filter]",
        className,
      )}
    >
      <motion.div
        variants={imageMotion}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative aspect-4/3 w-full overflow-hidden rounded-sm will-change-transform"
      >
        <Image
          src={image}
          alt={`${name} Framer template`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </motion.div>

      <div className="flex flex-col gap-3 md:gap-5">
        <div className="flex items-center gap-3">
          <h3 className="font-display text-2xl font-medium text-white md:text-3xl">
            {name}
          </h3>
          {isNew ? (
            <span className="rounded bg-[#33D478]/15 px-2 py-0.5 text-sm font-semibold uppercase tracking-wide text-[#33D478]">
              New
            </span>
          ) : null}
        </div>

        <p className="text-[13px] font-medium uppercase text-[#ABABAB]">
          {category}
          <span className="mx-2 text-[#ABABAB]">•</span>
          {price}
        </p>
      </div>
    </motion.article>
  );
}
