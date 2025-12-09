import type { Metadata } from "next";
import { Header, Footer } from "@/components/qasm";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "ColorCodedQASM | Craft Encoded. Culture Compiled.",
  description:
    "Luxury artisanal fashion platform connecting you with master craftspeople. Custom garments featuring heritage embroidery techniques from South Asia.",
  openGraph: {
    title: "ColorCodedQASM | Craft Encoded. Culture Compiled.",
    description:
      "Where heritage becomes algorithm. Custom artisanal fashion in 44 days.",
    images: ["/images/qasm-og-banner.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ColorCodedQASM",
    description: "Craft Encoded. Culture Compiled.",
    images: ["/images/qasm-og-banner.jpg"],
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
