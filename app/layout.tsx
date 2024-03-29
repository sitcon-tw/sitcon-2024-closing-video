import "../styles/global.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SITCON 2024 Closing Video",
  description: "SITCON 2024 Closing Video",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <body>{children}</body>
    </html>
  );
}
