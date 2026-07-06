import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

const siteKey = process.env.NEXT_PUBLIC_CONTINUEWITH_SITE_KEY || 'cw_demo_public_key';

export const metadata: Metadata = {
  title: 'ContinueWith Starter — Next.js',
  description: 'Minimal Next.js landing page with the ContinueWith AI handoff widget and llms.txt.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          src="https://continuewith.ai/widget/v1.js"
          data-site-key={siteKey}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
