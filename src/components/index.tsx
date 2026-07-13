"use client";

import React from "react";
import Image from "next/image";
import Navbar from "./navbar";
import Footer from "./footer";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="relative flex min-h-dvh flex-col overflow-x-clip bg-black">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
      >
        <Image
          src="/assets/background-web.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="scale-150 object-[70%_50%] blur-2xl md:object-[105%_50%]"
        />
      </div>

      <Navbar />
      <main className="relative z-10 flex min-h-0 flex-1 flex-col">
        {children}
      </main>
      <Footer />
    </div>
  );
}
