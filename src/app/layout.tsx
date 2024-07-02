import { Suspense } from 'react';
import { Metadata } from "next";
import { Poppins } from "next/font/google";

import { Navbar } from "../components/Navbar";
import CookieBanner from "../components/CookieBanner";
import { FacebookPixelEvents } from '../components/FacebookPixel';
import { SuspenseGoogleAnalytics } from "../components/GoogleAnalytics";
import { ExitPopupClient } from "../components/ExitPopUp";

import StyledComponentsRegistry from "./registry";

import "../global/global.css";

export const metadata: Metadata = {
  title: 'Creathor Web',
  description: 'Transformamos ideias incríveis em realidade. A chave para o seu sucesso online começa aqui, onde transformamos suas ideias e metas em resultados extraordinários',
  robots: {
    follow: true,
    index: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

const poppins = Poppins({
  weight: ['400', '500', '700'],
  variable: '--font-poppins',
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
          <StyledComponentsRegistry>
            <Suspense>
              <SuspenseGoogleAnalytics GA_MEASUREMENT_ID={`${process.env.GOOGLE_ANALYTICS}`} />
              <FacebookPixelEvents />
            </Suspense>
            <Navbar />
            {children}
            <ExitPopupClient />
            <Suspense>
              <CookieBanner />
            </Suspense>
          </StyledComponentsRegistry>
      </body>
    </html>
  )
}
