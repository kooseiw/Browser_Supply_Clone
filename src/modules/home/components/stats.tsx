"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import statsData from "@/common/data/stats.json";
import videoData from "@/common/data/video.json";
import { cn } from "@/common/utils/cn";
import LazyVideo from "@/components/ui/lazy-video";

export default function Stats() {
  const videoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ["start end", "center center"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [18, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0.85, 1]);

  return (
    <section className="relative z-10 mx-auto w-full max-w-[1440px] overflow-hidden md:mt-6 lg:mt-32">
      <div
        ref={videoRef}
        className="relative w-full"
        style={{ perspective: 1200, transformStyle: "preserve-3d" }}
      >
        <motion.div
          className="relative aspect-video w-full origin-center will-change-transform"
          style={{
            rotateX,
            scale,
            opacity,
            transformPerspective: 1200,
            transformStyle: "preserve-3d",
          }}
        >
          <LazyVideo
            src={videoData.src}
            className="size-full object-contain lg:object-fill"
          />
        </motion.div>
      </div>

      <motion.div
        className="grid grid-cols-2 border-t border-white/10 md:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0 },
          },
        }}
      >
        {statsData.map((item, index) => (
          <motion.div
            key={item.label}
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
            className={cn(
              "flex flex-col items-center justify-center gap-2 px-4 py-12 text-center md:gap-3 md:px-6 md:py-16",
              index === 0 && "border-r border-b border-white/10 md:border-b-0",
              index === 1 &&
                "order-last col-span-2 border-white/10 md:order-0 md:col-span-1 md:border-r",
              index === 2 &&
                "border-b border-white/10 md:border-b-0 md:border-r-0",
              index < statsData.length - 1 && "md:border-r md:border-white/10",
            )}
          >
            <p className="font-display text-4xl font-medium leading-none text-white md:text-5xl">
              {item.value}
            </p>
            <p className="text-xs font-normal text-white/70 md:text-sm">
              {item.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
