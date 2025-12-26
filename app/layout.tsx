import type { Metadata } from 'next'
import './globals.css'
import 'katex/dist/katex.min.css'
import { profile } from '@/data/profile'

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.title}`,
  description: profile.about.substring(0, 160),
  keywords: ['research', 'PhD', 'machine learning', 'computer science'],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} | ${profile.title}`,
    description: profile.about.substring(0, 160),
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans min-h-dvh w-full bg-base-100">
        {children}
      </body>
    </html>
  )
}
