import Image from "next/image";
import Link from "next/link";
import footerData from "@/common/data/footer.json";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative z-10">
      <div className="mx-auto w-full max-w-[1440px] border-x border-black/50">
        <div className="flex items-start justify-between gap-16 px-8 pt-20 pb-24">
          <div className="max-w-[280px]">
            <h2 className="mb-4 font-display text-3xl font-medium text-white">
              {footerData.brand}
            </h2>
            <p className="mb-6 text-base leading-[1.7] text-muted">
              {footerData.tagline}
            </p>
            <div className="flex items-center gap-4">
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

          <div className="flex gap-16">
            {footerData.linkColumns.map((column, columnIndex) => (
              <ul key={columnIndex} className="flex flex-col gap-6">
                {column.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-base font-semibold text-white transition-opacity hover:opacity-70"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 px-8 py-6">
          <p className="text-base text-[#ABABAB]">
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
            <span className="text-base text-[#ABABAB]">
              {footerData.createdBy.label}
            </span>
            <Image
              src={footerData.createdBy.avatar}
              alt={footerData.createdBy.name}
              width={28}
              height={28}
              className="size-9 rounded-md object-cover"
            />
            <span className="text-base font-semibold text-white">
              {footerData.createdBy.name}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
