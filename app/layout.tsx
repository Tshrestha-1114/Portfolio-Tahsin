import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
 title:"Tahsin Nayeem Shrestha — Kingdom Portfolio",
 description:"Software engineer, AI builder and founder. An interactive portfolio of engineering systems, organizational intelligence, and art.",
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><main>{children}</main></body></html>}
