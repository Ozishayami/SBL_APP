import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NBA-SBL | Events & Conferences",
  description: "Your NBA Section on Business Law events, sessions and professional community.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
