import type { Metadata } from "next";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Blood Donor Card Generator",
  description: "Create your professional blood donor card in seconds. Donate blood, save lives.",
  keywords: ["blood donor", "donor card", "blood group", "donation"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
