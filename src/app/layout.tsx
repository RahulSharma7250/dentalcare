import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "DentaCare - Premium Dental Clinic",
  description: "Trusted dental care for a confident smile. Experience premium dental services with modern technology, experienced doctors, and a commitment to your comfort.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Script
          id="suppress-nextjs-async-warnings"
          strategy="beforeInteractive"
        >
          {`
            // Suppress Next.js async params/searchParams warnings in development
            if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
              const originalWarn = console.warn;
              const originalError = console.error;

              console.warn = (...args) => {
                if (args[0]?.includes && (
                  args[0].includes('params are being enumerated') ||
                  args[0].includes('searchParams were accessed directly')
                )) {
                  return; // Suppress these specific warnings
                }
                originalWarn.apply(console, args);
              };

              console.error = (...args) => {
                if (args[0]?.includes && (
                  args[0].includes('params are being enumerated') ||
                  args[0].includes('searchParams were accessed directly')
                )) {
                  return; // Suppress these specific errors
                }
                originalError.apply(console, args);
              };
            }
          `}
        </Script>
        {children}
        {/* <VisualEditsMessenger /> */}
      </body>
    </html>
  );
}
