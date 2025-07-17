'use client'

import { motion } from 'framer-motion'
import SoundButton from '../SoundButton/soundbutton'

// ✅ 改用 next/font/google
import { Cinzel } from 'next/font/google'

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '700'],
})

type Props = {
  show: boolean
  onSelect: (panel: string) => void
}

const menuItems = [
  { title: 'About me', icon: '🎮', panel: 'about' },
  { title: 'Experience', icon: '💼', panel: 'experience' },
  { title: 'Education', icon: '🎓', panel: 'education' },
  { title: 'Projects', icon: '🛠️', panel: 'projects' },
  { title: 'Setting', icon: '⚙️', panel: 'settings' },
  { title: 'Link', icon: '🌐', panel: 'link' },
  { title: '退出', icon: '🚪', panel: 'exit' },
]

export default function MenuPanel({ show, onSelect }: Props) {
  return (
        <motion.div
          initial={{ y: -600 }}
          animate={{ y: show ? 100 : -800, opacity: show ? 1 : 0 }}
          transition={{ type: 'spring', stiffness: 60 }}
          className={`z-50 fixed top--20 md:absolute md:right-28 md:top-0
                      w-full md:w-[360px] h-[120px] md:h-auto
                      flex flex-wrap md:flex-col items-center justify-center md:justify-start
                      bg-gradient-to-br from-gray-900 to-black border-b-4 md:border-b-0 md:border-4 border-amber-700 rounded-none md:rounded-xl
                      shadow-[0_0_30px_rgba(255,191,0,0.4)] p-2 md:p-6 ${cinzel.className}`}
                  >
          <h1 className="hidden md:block text-center text-3xl font-bold text-amber-400 mb-6 tracking-widest drop-shadow-[0_0_5px_gold]">
            A NEW DAY WILL COME
          </h1>

          <ul className=" 
                      flex flex-wrap md:flex-col gap-2 md:gap-4 w-full 
                      justify-center md:justify-start">
            {menuItems.map((item, idx) => (
              <li key={idx}>
                <SoundButton
                  text={item.title}
                  icon={item.icon}
                  onClick={() => onSelect(item.panel)}
                />
              </li>
            ))}
          </ul>
        </motion.div>

  )
}
