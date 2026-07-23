import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Tahsin Nayeem Shrestha — Software Engineer & AI Builder",
  description:
    "Software Engineer with hands-on experience in AI/ML, backend systems, and data engineering. GHC Scholar, WISE Honoree, KPMG AI Studio alum, Stony Brook University.",
  openGraph: {
    title: "Tahsin Nayeem Shrestha — Software Engineer & AI Builder",
    description: "Portfolio of AI systems, engineering projects, and studio art.",
    url: "https://portfolio-tahsin-nine.vercel.app",
    siteName: "Tahsin Nayeem Shrestha",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
