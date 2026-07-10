import "./globals.css";
import { gambetta, inter } from "@/common/styles/font";
import Layout from "@/components";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${gambetta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
