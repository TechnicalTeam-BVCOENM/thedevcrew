import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "The Dev Crew",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>

      <body className='antialiased'>{children}</body>
    </html>
  );
}
