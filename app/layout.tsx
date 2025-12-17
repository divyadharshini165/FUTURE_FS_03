import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soundify – AI Powered Music Streaming",
  description:
    "Soundify is a modern AI-powered music streaming platform with smart playlists and immersive UI.",
  openGraph: {
    title: "Soundify – AI Music Streaming",
    description:
      "Discover AI-curated playlists with a modern, vibrant music streaming experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
