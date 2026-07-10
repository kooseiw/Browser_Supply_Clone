import Image from "next/image";
import Link from "next/link";
import NAV_LINKS from "@/common/constant/menu";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { InterFont } from "@/common/styles/font";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full">
      <nav
        className={`${InterFont.className} mx-auto flex h-20 max-w-7xl items-center justify-between px-5`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity"
        >
          <Image
            src="/icon/browser-supply-icon.avif"
            alt="Browser.supply"
            width={16}
            height={16}
            className="rounded-sm"
          />
          <span className="text-base font-semibold text-white">
            Browser.supply
          </span>
        </Link>

        {/* Nav links */}
        <ul className="flex items-center gap-5">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <Link href={href} className="text-base font-semibold text-white">
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Actions */}
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
            className="ml-2 rounded px-4 py-2 text-base font-medium text-white bg-black"
          >
            Bundle
          </Link>
        </div>
      </nav>
    </header>
  );
}
