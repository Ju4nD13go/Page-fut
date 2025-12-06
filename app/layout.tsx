import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Club Deportivo Barkley | Academia de Fútbol',
  description: 'Club Deportivo Barkley - Formando futbolistas de excelencia. Academia de fútbol con categorías infantil, juvenil, femenino y amateur. Únete a nosotros y desarrolla tu talento.',
  keywords: ['Club Deportivo Barkley', 'academia de fútbol', 'fútbol infantil', 'fútbol juvenil', 'fútbol femenino', 'escuela de fútbol', 'Barkley Academy'],
  authors: [{ name: 'Club Deportivo Barkley' }],
  creator: 'Club Deportivo Barkley',
  publisher: 'Club Deportivo Barkley',
  metadataBase: new URL('https://www.barkleyacademy.com'), // Cambia esto por tu dominio real
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://www.barkleyacademy.com',
    siteName: 'Club Deportivo Barkley',
    title: 'Club Deportivo Barkley | Academia de Fútbol',
    description: 'Formando futbolistas de excelencia. Academia de fútbol con categorías infantil, juvenil, femenino y amateur.',
    images: [
      {
        url: '/barkley-logo.png',
        width: 1200,
        height: 1200,
        alt: 'Club Deportivo Barkley - Escudo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Club Deportivo Barkley | Academia de Fútbol',
    description: 'Formando futbolistas de excelencia. Academia de fútbol con categorías infantil, juvenil, femenino y amateur.',
    images: ['/barkley-logo.png'],
  },
  icons: {
    icon: [
      { url: '/barkley-logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/barkley-logo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/barkley-logo.png',
    shortcut: '/barkley-logo.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" type="image/png" href="/barkley-logo.png" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
