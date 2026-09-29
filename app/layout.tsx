import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Barkley FC | Formación Deportiva - Formando talento, construyendo futuro',
  description: 'Barkley FC - Academia de formación futbolística comprometida con el desarrollo integral de niños y jóvenes. Categorías de 5 a 18 años en Cali, Valle del Cauca. Raíces en Barbacoas, Nariño.',
  keywords: ['Barkley FC', 'academia de fútbol', 'fútbol base', 'formación deportiva', 'Cali', 'Valle del Cauca', 'Barbacoas Nariño', 'escuela de fútbol', 'fútbol infantil', 'fútbol juvenil'],
  authors: [{ name: 'Barkley FC' }],
  creator: 'Barkley FC',
  publisher: 'Barkley FC',
  metadataBase: new URL('https://www.barbacoasfc.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://www.barbacoasfc.com',
    siteName: 'Barkley FC',
    title: 'Barkley FC | Formación Deportiva',
    description: 'Formando talento, construyendo futuro. Academia de formación futbolística en Cali con raíces en Barbacoas, Nariño.',
    images: [
      {
        url: '/barbacoasback.png',
        width: 1200,
        height: 1200,
        alt: 'Barbacoas FC - Escudo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Barkley FC | Formación Deportiva',
    description: 'Formando talento, construyendo futuro. Academia de formación futbolística en Cali con raíces en Barbacoas, Nariño.',
    images: ['/barbacoasback.png'],
  },
  icons: {
    icon: [
      { url: '/escudo.png', sizes: '32x32', type: 'image/png' },
      { url: '/escudo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/escudo.png',
    shortcut: '/escudo.png',
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
        <link rel="icon" type="image/png" href="/escudo.png" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className={`font-sans antialiased`} style={{ fontFamily: "'Outfit', sans-serif" }}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
