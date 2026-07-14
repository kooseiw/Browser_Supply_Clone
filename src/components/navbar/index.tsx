"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLenis } from "lenis/react";
import NAV_LINKS from "@/common/constant/menu";
import { Menu, X } from "lucide-react";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { cn } from "@/common/utils/cn";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    if (isOpen) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
    }

    return () => {
      lenis?.start();
      document.body.style.overflow = "";
    };
  }, [isOpen, lenis]);

  return (
    <header className="fixed top-0 z-50 w-full">
      <nav className="mx-auto hidden h-20 max-w-7xl items-center justify-between px-5 backdrop-blur-sm md:flex">
        <Link
          href="/"
          className="flex items-center gap-3 text-white transition-opacity hover:opacity-80"
        >
          <Image
            src="/icons/browser-supply-icon.avif"
            alt="Browser.supply"
            width={16}
            height={16}
            className="rounded-sm"
            style={{ width: "22px", height: "22px" }}
          />
          <span className="text-base font-semibold text-white">
            Browser.supply
          </span>
        </Link>

        <ul className="flex items-center gap-5">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <Link href={href} className="text-base font-semibold text-white">
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="text-white"
          >
            <FaXTwitter size={20} />
          </Link>
          <Link
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-white"
          >
            <FaYoutube size={20} />
          </Link>
          <Link
            href="/bundle"
            className="ml-2 rounded bg-black px-4 py-2 text-base font-medium text-white"
          >
            Bundle
          </Link>
        </div>
      </nav>

      <nav className="mx-auto flex h-16 w-full items-center justify-between px-5 backdrop-blur-sm md:hidden">
        <Link href="/" className="flex items-center gap-2.5 text-white">
          <Image
            src="/icons/browser-supply-icon.avif"
            alt="Browser.supply"
            width={16}
            height={16}
            className="rounded-sm"
            style={{ width: "20px", height: "20px" }}
          />
          <span className="text-base font-semibold text-white">
            Browser.supply
          </span>
        </Link>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className="flex size-10 items-center justify-center text-white"
        >
          {isOpen ? <X size={40} /> : <Menu size={30} />}
        </button>
      </nav>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/70 backdrop-blur-xl transition-opacity duration-300 md:hidden",
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex h-16 items-center justify-between px-8 mt-5">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2.5 text-white"
          >
            <Image
              src="/icons/browser-supply-icon.avif"
              alt="Browser.supply"
              width={16}
              height={16}
              className="rounded-sm"
              style={{ width: "20px", height: "20px" }}
            />
            <span className="text-base font-semibold text-white">
              Browser.supply
            </span>
          </Link>

          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
            className="flex size-10 items-center justify-center text-white"
          >
            <X size={40} />
          </button>
        </div>

        <div className="flex flex-col px-8 pt-10">
          <ul className="mb-8 flex flex-col gap-6">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-semibold text-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mb-8 flex items-center gap-4">
            <Link
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="text-white"
            >
              <FaXTwitter size={20} />
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-white"
            >
              <FaYoutube size={22} />
            </Link>
          </div>

          <Link
            href="/bundle"
            onClick={() => setIsOpen(false)}
            className="w-full rounded-md bg-white py-4 text-center text-base font-semibold text-black"
          >
            Full-kit
          </Link>
        </div>
      </div>
    </header>
  );
}
