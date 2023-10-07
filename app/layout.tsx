import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar';
import { Toaster } from '@/components/ui/toaster';
// import GA from '@/components/GA';
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Joaverter - Convertidor de archivos multimedia',
  description: `Convierte tus archivos multimedia de forma ilimitada y sin publicidad con Joaverter.`,
  creator: 'Joaquin Lucero',
  keywords:
    'convertidor de imagenes, convertidor de videos, convertidor de audio, convertidor de archivos, convertidor de archivos online, convertidor de archivos gratis, convertidor de archivos sin publicidad, convertidor de archivos ilimitado, convertidor de archivos sin limite, convertidor de archivos sin marca de agua, convertidor de archivos sin marca de agua online, convertidor de archivos sin marca de agua gratis, convertidor de archivos sin marca de agua ilimitado, convertidor de archivos sin marca de agua sin limite, convertidor de archivos sin marca de agua sin publicidad, convertidor de archivos sin marca de agua online gratis, convertidor de archivos sin marca de agua online ilimitado, convertidor de archivos sin marca de agua online sin limite, convertidor de archivos sin marca de agua online sin publicidad, convertidor de archivos sin marca de agua gratis ilimitado, convertidor de archivos sin marca de agua gratis sin limite, convertidor de archivos sin marca de agua gratis sin publicidad',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`} />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${process.env.GA_MEASUREMENT_ID}');
        `}
      </Script>
      <body className={inter.className}>
        <Navbar />
        <Toaster />
        <div className="pt-32 min-h-screen lg:pt-36 2xl:pt-44 container max-w-4xl lg:max-w-6xl 2xl:max-w-7xl">
          {children}
        </div>
      </body>
    </html>
  );
}
