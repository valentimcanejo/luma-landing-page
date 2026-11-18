import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Both are variable fonts: one file per family covers every weight we use
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

// On Vercel this resolves to the production domain; locally it falls back to localhost
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

const title = "Luma | Build skills that actually move you forward";
const description =
  "Practical courses taught by people who do the work every day. Learn design, technology, business and more, one focused lesson at a time.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    type: "website",
    siteName: "Luma",
    locale: "en_US",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#f9f8f3",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body>
        {/* Padding goes on focus: too, because not-sr-only resets it to 0 */}
        <a
          href="#main"
          className="sr-only rounded-lg bg-navy type-label text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-3"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
