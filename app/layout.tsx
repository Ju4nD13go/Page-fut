import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const translations = {
  es: {
    APP_NAME: 'BARKLEY FC',
    heroTitle: 'Formando talento, construyendo futuro',
    heroSubtitle: 'Academia de formación futbolística comprometida con el desarrollo integral de niños y jóvenes. Categorías de 5 a 18 años en Cali, Valle del Cauca. Raíces en Barbacoas, Nariño.',
    ctaEnroll: 'Inscribirse Ahora',
    ctaContact: 'Contáctanos',
    langEspañol: 'Español',
    langEnglish: 'English',
  },
  en: {
    APP_NAME: 'BARKLEY FC',
    heroTitle: 'Forming talent, building future',
    heroSubtitle: 'BARKLEY FC - Sports training academy committed with the integral development of children and youth. Categories from 5 to 18 years old in Cali, Valle del Cauca. Roots in Barbacoas, Nariño.',
    ctaEnroll: 'Enroll Now',
    ctaContact: 'Contact Us',
    langEspañol: 'Spanish',
    langEnglish: 'English',
  },
}

/* Skip link para navegación teclado - appears when focused */
const SkipLink = () => {
  return (
    <a
      className="skip-link"
      href="#inicio"
    >
      Saltar al contenido principal
    </a>
  )
}

export const metadata: Metadata = {
  title: 'BARKLEY FC',
  description: 'BARKLEY FC - Academia de formación futbolística',
  keywords: ['BARKLEY FC', 'academia de fútbol', 'fútbol base', 'formación deportiva'],
  authors: [{ name: 'BARKLEY FC' }],
  creator: 'BARKLEY FC',
  publisher: 'BARKLEY FC',
  metadataBase: new URL('https://www.barbacoasfc.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://www.barbacoasfc.com',
    siteName: 'BARKLEY FC',
    title: 'BARKLEY FC | Formación Deportiva',
    description: 'Formando talento, construyendo futuro. Academia de formación futbolística en Cali con raíces en Barbacoas, Nariño.',
    images: [
      {
        url: '/barbacoasback.png',
        width: 1200,
        height: 1200,
        alt: 'BARKLEY FC - Escudo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BARKLEY FC | Formación Deportiva',
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
        <SkipLink />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
