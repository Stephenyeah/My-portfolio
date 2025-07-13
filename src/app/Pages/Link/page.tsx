'use client'

import { motion } from 'framer-motion'
import '@fontsource/cinzel'

export default function LinkPanel({ show }: { show: boolean }) {
  return (
    <motion.div
      initial={{ y: -500, opacity: 0 }}
      animate={{ y: show ? 100 : -800, opacity: show ? 1 : 0 }}
      transition={{ type: 'spring', stiffness: 65 }}
      className="absolute z-40 top-1/3 left-4/9 -translate-x-1/2 -translate-y-1/2 w-[600px] bg-gradient-to-br from-gray-900 to-black border-4 border-amber-700 rounded-xl shadow-[0_0_30px_rgba(255,191,0,0.4)] p-6"
    >
      <h1 className="text-center text-3xl font-[Cinzel] font-bold text-amber-400 mb-6 tracking-widest drop-shadow-[0_0_5px_gold]">
        🔗 Links
      </h1>

      <ul className="flex flex-col gap-6 items-center text-yellow-300 text-lg">
        <li>
          <a
            href="https://github.com/Stephenyeah"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:underline transition duration-200"
          >
            🐙 GitHub: Stephenyeah
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/stephen-yang21/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:underline transition duration-200"
          >
            💼 LinkedIn: Stephenyang
          </a>
        </li>
        <li>
          <a
            href="mailto:arogon21@gmail.com"
            className="hover:text-white hover:underline transition duration-200"
          >
            ✉️ Email: arogon21@gmail.com
          </a>
        </li>
      </ul>
    </motion.div>
  )
}
