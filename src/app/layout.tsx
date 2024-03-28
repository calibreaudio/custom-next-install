import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Calibre Custome Next Install',
  description: 'Built on Next js and tweaked for our needs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        style={{ scrollBehavior: 'smooth' }}
        className={`${openSans.className} h-screen`}
      >
        {children}
      </body>
      <Script
        dangerouslySetInnerHTML={{
          __html: `
            try {
              if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
                document.querySelector('meta[name="theme-color"]').setAttribute('content', '#141b21')
              } else {
                document.documentElement.classList.remove('dark')
              }
            } catch (_) {}
          `,
        }}
      />
    </html>
  )
}
