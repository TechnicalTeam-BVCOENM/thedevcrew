import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Sora } from 'next/font/google';
import { cn } from '@/lib/utils';

const font = Sora({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-sora',
});

export const metadata: Metadata = {
  title: 'The Dev Crew',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>

      <body className={cn('font-sora antialiased', font.variable)}>
        {children}
      </body>
    </html>
  );
}
