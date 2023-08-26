import NewsletterContextProvider from '@/context/NewsletterContext'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Newsletter Signup',
  description: 'A newsletter signup page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NewsletterContextProvider>
          {children}
        </NewsletterContextProvider>
        </body>
    </html>
  )
}
