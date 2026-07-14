"use client";

import { motion } from "motion/react";
import Badge from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AccentTitle from "@/components/ui/accent-title";
import heroData from "@/common/data/hero.json";

const fadeBlur = {
  hidden: { opacity: 0, filter: "blur(16px)", y: 20 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const fadeBlurTitle = {
  hidden: { opacity: 0, filter: "blur(16px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const fadeBlurButton = {
  hidden: { opacity: 0, filter: "blur(16px)", y: 20 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 1.35, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center md:min-h-0 md:justify-start md:pt-44 md:pb-8 lg:min-h-screen lg:justify-center lg:pt-0 lg:pb-0">
      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center px-8 text-center md:px-10 lg:px-5"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <motion.div variants={fadeBlur}>
          <Badge
            className="mb-6 md:mb-8 lg:mb-10"
            iconSrc={heroData.badge.iconSrc}
            iconAlt="Framer"
            label={heroData.badge.label}
          />
        </motion.div>

        <motion.div variants={fadeBlurTitle}>
          <AccentTitle
            segments={heroData.title}
            className="mb-5 max-w-[250px] font-display text-[55px] font-medium leading-[1.05] tracking-[-0.01em] text-white md:mb-5 md:max-w-[720px] md:text-[80px] md:leading-[1.05] lg:mb-6 lg:max-w-full lg:text-[100px] lg:leading-none"
          />
        </motion.div>

        <motion.p
          variants={fadeBlur}
          className="mx-auto mb-8 max-w-[350px] text-base font-normal leading-[1.7] text-muted md:mb-8 md:max-w-[600px] md:text-lg lg:mb-10 lg:max-w-[550px] lg:text-base"
        >
          {heroData.description}
        </motion.p>

        <motion.div variants={fadeBlurButton}>
          <Button className="w-full bg-white px-6 py-6 text-base font-semibold text-black md:w-fit">
            {heroData.cta}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
