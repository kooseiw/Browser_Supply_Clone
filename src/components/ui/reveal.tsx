"use client";

import { Children, isValidElement } from "react";
import { motion, type HTMLMotionProps } from "motion/react";
import { cn } from "@/common/utils/cn";

type RevealProps = HTMLMotionProps<"div"> & {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

const revealVariants = {
  hidden: { opacity: 0, filter: "blur(14px)", y: 28 },
  visible: { opacity: 1, filter: "blur(0px)", y: 0 },
};

export default function Reveal({
  children,
  className,
  delay = 0,
  ...props
}: RevealProps) {
  return (
    <motion.div
      className={cn(className)}
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18, margin: "0px 0px -8% 0px" }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type RevealGroupProps = {
  children: React.ReactNode;
  itemClassName?: string;
};

export function RevealGroup({ children, itemClassName }: RevealGroupProps) {
  return (
    <>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return child;

        return (
          <Reveal key={child.key ?? index} className={itemClassName}>
            {child}
          </Reveal>
        );
      })}
    </>
  );
}
