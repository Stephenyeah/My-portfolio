import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { ReactNode } from 'react'
import "./globals.css";
import "./layout.css"
import '@fontsource/cinzel';

export const metadata: Metadata = {
  title: 'My portfolio',
  description: '关于StephenYang个人网站',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  )
}

// 我已经用了.env 和 NEXT_PUBLIC_BASE_PATH
// 是否这里也要 改路劲啊？
// import type { Metadata } from "next";
// // import { Geist, Geist_Mono } from "next/font/google";
// import { ReactNode } from 'react'
// import "./globals.css";
// import "./layout.css"
// import '@fontsource/cinzel';

// export const metadata: Metadata = {
//   title: 'My portfolio',
//   description: '关于StephenYang个人网站',
// }

// export default function RootLayout({ children }: { children: ReactNode }) {
//   return (
//     <html lang="zh">
//       <body>{children}</body>
//     </html>
//   )
// }