import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SpendWise",
  description:
    "A personal finance management app to track your expenses and income.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
