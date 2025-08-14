import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import SmoothScrollProvider from "@/components/smooth-scroll"
import { Toaster } from "@/components/ui/toaster"
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://gihal.com.br'),
  title: {
    default: 'GIHAL - Implementos Agrícolas',
    template: '%s | GIHAL',
  },
  description: 'Implementos agrícolas robustos e acessíveis: plantadeiras, semeadeiras, carretas, vagões e mais. 30+ anos de tradição e inovação.',
  keywords: ['implementos agrícolas', 'plantadeiras', 'semeadeiras', 'carretas agrícolas', 'vagões forrageiros', 'patrolas', 'flutuador lateral automático', 'agricultura'],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    title: 'GIHAL - Implementos Agrícolas',
    description: 'Qualidade, robustez e preço competitivo há 30+ anos no agro.',
    url: 'https://gihal.com.br',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GIHAL - Implementos Agrícolas',
    description: 'Implementos agrícolas robustos e acessíveis.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <head>
        <style>{`
          html {
            font-family: ${GeistSans.style.fontFamily};
            --font-sans: ${GeistSans.variable};
            --font-mono: ${GeistMono.variable};
          }
        `}</style>
      </head>
      <body>
        <SmoothScrollProvider>
          {children}
          <Toaster />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
