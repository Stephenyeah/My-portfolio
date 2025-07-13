import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { ReactNode } from 'react'
import "./globals.css";
import "./layout.css"
import '@fontsource/cinzel';

export const metadata: Metadata = {
  title: '个人portfolior',
  description: '关于StephenYang个人网站',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  )
}

