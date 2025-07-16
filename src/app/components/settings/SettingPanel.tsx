'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
// ✅ 改用 next/font/google
import { Cinzel } from 'next/font/google'

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '700'],
})


export default function SettingPanel({ show }: { show: boolean }) {
  const [volume, setVolume] = useState(0.5)

  // 可选：将音量同步到全局音效系统，例如 Howler.volume(volume)
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof Howler !== 'undefined') {
      Howler.volume(volume)
    }
  }, [volume])

  return (
    <motion.div
      initial={{ y: -500, opacity: 0 }}
      animate={{ y: show ? 100 : -800, opacity: show ? 1 : 0 }}
      transition={{ type: 'spring', stiffness: 65 }}
      className={`absolute z-40 top-1/3 left-4/9 -translate-x-1/10 -translate-y-1/2 w-[600px] bg-gradient-to-br from-gray-900 to-black border-4 border-amber-700 rounded-xl shadow-[0_0_30px_rgba(255,191,0,0.4)] p-6 ${cinzel.className}`}
    >
      <h1 className="text-center text-3xl font-[Cinzel] font-bold text-amber-400 mb-6 tracking-widest drop-shadow-[0_0_5px_gold]">
        ⚙️ Settings
      </h1>

      <div className="flex flex-col gap-6 items-center text-yellow-300">
        <label className="text-lg font-semibold">
          🔊 Sound Volume: {(volume * 100).toFixed(0)}%
        </label>

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="w-full accent-yellow-500"
        />
      </div>
    </motion.div>
  )
}
