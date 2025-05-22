import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Designjoy - Design as a Subscription",
  description: "The #1 design subscription service for agencies, startups, and entrepreneurs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={figtree.className}>
        {children}
      </body>
    </html>
  );
}
