import type { Metadata } from "next";
import { ReactNode } from 'react'
import "./globals.css";
import "./layout.css";

// ✅ 使用 next/font/google 替代 @fontsource
import { Cinzel } from 'next/font/google'

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'My portfolio',
  description: '关于StephenYang个人网站',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh">
      <body className={`${cinzel.className} bg-black text-white`}>
        {children}
      </body>
    </html>
  )
}
