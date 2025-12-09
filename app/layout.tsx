import type { Metadata } from "next";
import { Header, Footer } from "@/components/qasm";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Garden of Eden | Fashion Archaeology",
  description:
    "Excavating ancient symbols and resurrecting them as hand-embroidered wearable art. Custom garments featuring sacred motifs from Mesopotamia, Egypt, Celtic, and beyond.",
  openGraph: {
    title: "Garden of Eden | Fashion Archaeology",
    description:
      "Wear Your Ancestry. Ancient symbols excavated and resurrected as embroidered wearable art.",
    images: ["/images/garden-og-banner.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garden of Eden",
    description: "Fashion Archaeology. Wear Your Ancestry.",
    images: ["/images/garden-og-banner.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-dark-500 text-white antialiased">
        {/* Grain overlay */}
        <div className="grain-overlay" />

        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
