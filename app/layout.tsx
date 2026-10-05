import type { Metadata, Viewport } from 'next'
import { Archivo, Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import ScrollBackground from '@/components/ScrollBackground'
import StructuredData, { SITE_URL } from '@/components/StructuredData'

// Variable fonts: one file each covers every weight we use.
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Display face. The wdth axis is what lets us render it condensed.
const archivo = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  display: 'swap',
  variable: '--font-archivo',
})

// Only small labels use the mono face, so it isn't preloaded: that keeps it
// from competing with the hero photo and display font for early bandwidth.
const mono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  variable: '--font-jetbrains',
})

const TITLE = 'Levent Kurtis | Data & AI Leader'
const DESCRIPTION =
  'Data & AI lead at Accenture in Copenhagen. Data migration, data quality and analytics delivery. Full CV, experience and certifications.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: '/',
  },
  authors: [{ name: 'Levent Kurtis', url: SITE_URL }],
  creator: 'Levent Kurtis',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'profile',
    firstName: 'Levent',
    lastName: 'Kurtis',
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: 'Levent Kurtis',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1d24',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${archivo.variable} ${mono.variable}`}
    >
      <head>
        {/* Preload the LCP image. type="image/avif" makes non-supporting browsers skip it.
            imageSizes must match the sizes attribute in Hero.tsx. */}
        <link
          rel="preload"
          as="image"
          type="image/avif"
          href="/photo-hero-720.avif"
          imageSrcSet="/photo-hero-720.avif 720w, /photo-hero-1080-v2.avif 1080w"
          imageSizes="(min-width: 1024px) min(46vw, 640px), (min-width: 640px) 50vw, 60vw"
          fetchPriority="high"
        />
      </head>
      <body className="antialiased">
        <ScrollBackground />
        {children}
        <Analytics />
        <StructuredData />
      </body>
    </html>
  )
}
