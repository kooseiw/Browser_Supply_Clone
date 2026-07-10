"use client";

import React from "react";
import Navbar from "./navbar";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="relative flex min-h-dvh flex-col overflow-x-clip bg-[#0a0a0a]">
      <Navbar />
      <main className="flex min-h-0 flex-1 flex-col">{children}</main>
    </div>
  );
}
