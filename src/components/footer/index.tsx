"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import footerData from "@/common/data/footer.json";
import { cn } from "@/common/utils/cn";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative z-10">
      <div className="mx-auto w-full max-w-[1440px] md:border-x md:border-black/50">
        <div className="flex flex-col items-center gap-10 px-5 pt-16 pb-16 text-center md:flex-row md:items-start md:justify-between md:gap-16 md:px-10 md:pt-20 md:pb-24 md:text-left">
          <div className="flex max-w-[280px] flex-col items-center md:items-start">
            <h2 className="mb-4 font-display text-3xl font-medium text-white">
              {footerData.brand}
            </h2>
            <p className="mb-6 text-sm leading-[1.7] text-muted md:text-base">
              {footerData.tagline}
            </p>
            <div className="flex items-center justify-center gap-4 md:justify-start">
              <Link
                href={footerData.social[0].href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={footerData.social[0].label}
                className="text-white transition-opacity hover:opacity-70"
              >
                <FaXTwitter size={18} />
              </Link>
              <Link
                href={footerData.social[1].href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={footerData.social[1].label}
                className="text-white transition-opacity hover:opacity-70"
              >
                <FaYoutube size={20} />
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center gap-5 md:flex-row md:items-start md:gap-16">
            {footerData.linkColumns.map((column, columnIndex) => (
              <ul key={columnIndex} className="flex flex-col gap-5 md:gap-6">
                {column.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "text-base text-white transition-opacity hover:opacity-70",
                        columnIndex === 0
                          ? "font-semibold"
                          : "font-normal md:font-semibold",
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 border-t border-white/10 px-5 py-6 text-center md:flex-row md:justify-between md:gap-0 md:px-8 md:text-left">
          <p className="text-sm text-[#ABABAB] md:text-base">
            {footerData.copyright.replace(
              "{year}",
              String(new Date().getFullYear()),
            )}{" "}
            <strong className="font-semibold text-white">
              {footerData.copyrightHighlight}
            </strong>
            {footerData.copyrightSuffix}
          </p>

          <div className="flex items-center gap-2.5">
            <span className="text-sm text-[#ABABAB] md:text-base">
              {footerData.createdBy.label}
            </span>
            <motion.span
              className="inline-flex origin-center will-change-transform"
              animate={{ rotate: [-14, 14] }}
              transition={{
                duration: 1.6,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
              }}
            >
              <Image
                src={footerData.createdBy.avatar}
                alt={footerData.createdBy.name}
                width={28}
                height={28}
                className="size-9 rounded-md object-cover"
              />
            </motion.span>
            <span className="text-sm font-semibold text-white md:text-base">
              {footerData.createdBy.name}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
