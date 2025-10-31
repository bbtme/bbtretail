import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Headless WordPress',
  description: 'Headless WordPress frontend',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
