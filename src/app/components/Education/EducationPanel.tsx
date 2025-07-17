'use client'

import { motion } from 'framer-motion'
import { Cinzel } from 'next/font/google'

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const educationNodes = [
  {
    id: 'hh',
    title: 'Haaga-Helia University of Applied Sciences， Helsinki, Finland',
    period: 'Aug 2023 – Now',
    program: 'Degree Programme in Software Development',
    pos: { top: '1%', left: '20%' },
  },
  {
    id: 'hamk',
    title: 'Häme University of Applied Sciences, Finland',
    period: 'Aug 2022 – Jun 2023',
    program: 'Degree Programme in Computer Applications',
    pos: { top: '28%', left: '20%' },
  },
  {
    id: 'junction',
    title: '',
    period: '',
    program: '',
    pos: { top: '48%', left: '20%' },
  },
  {
    id: 'cc',
    title: 'Child Care Co certificate, Winnipeg, MB | YMCA-YWCA Winnipeg',
    period: '2018 – 2019',
    program: 'Province of Manitoba 40-hour Child Care Training | Red River College Winnipeg, MB',
    pos: { top: '48%', left: '60%' },
  },
  {
    id: 'gz',
    title: 'Guangzhou University, Guangzhou, China',
    period: '2007 – 2011',
    program: 'Bachelor of Software Engineering',
    pos: { top: '58%', left: '20%' },
  },
]

const connections = [
  { from: 'hh', to: 'hamk' },
  { from: 'hamk', to: 'junction' },
  { from: 'junction', to: 'gz' },
  { from: 'junction', to: 'cc' },
]

export default function EducationPanel({ show }: { show: boolean }) {
  return (
    <motion.div
      initial={{ y: -500, opacity: 0 }}
      animate={{ y: show ? 100 : -800, opacity: show ? 1 : 0 }}
      transition={{ type: 'spring', stiffness: 65 }}
      className={`absolute z-50 left-2 top-20 md:left-80 md:top-5
                  w-[96vw] md:w-[1000px] h-[70vh] md:h-[700px]
                  bg-gradient-to-br from-gray-900 to-black border-4 border-amber-700 rounded-xl
                  shadow-[0_0_40px_rgba(255,191,0,0.4)] p-4 md:p-8 overflow-hidden ${cinzel.className}`}
    >
      <h1 className="text-center text-1xl md:text-3xl font-[Cinzel] font-bold text-amber-400 mb-8 tracking-widest">
        EDUCATION TREE
      </h1>
      <div className="relative w-full h-full">
        {connections.map((conn, idx) => {
          const from = educationNodes.find((n) => n.id === conn.from)!
          const to = educationNodes.find((n) => n.id === conn.to)!
          const x1 = parseFloat(from.pos.left)
          const y1 = parseFloat(from.pos.top)
          const x2 = parseFloat(to.pos.left)
          const y2 = parseFloat(to.pos.top)
          const dx = x2 - x1
          const dy = y2 - y1
          const length = Math.sqrt(dx * dx + dy * dy)
          const angle = Math.atan2(dy, dx) * (180 / Math.PI)
          return (
            <div
              key={idx}
              className="absolute bg-yellow-400"
              style={{
                top: `${y1+7}%`,
                left: `${x1+18}%`,
                width: `${length}%`,
                height: '2px',
                transform: `rotate(${angle}deg)` ,
                transformOrigin: 'left center',
                opacity: 0.8,
              }}
            />
          )
        })}

        {educationNodes.filter((node) => node.id !== 'junction').map((node, idx) => (
          <div
            key={idx}
            className="absolute bg-gray-800 border border-amber-600 rounded-lg shadow-lg p-1 w-68 md:w-68 h-28 md:h-38 hover:scale-105 transition-all duration-300"
            style={{ top: node.pos.top, left: node.pos.left }}
          >
            <h2 className="text-xs/[8px] md:text-xs font-bold text-amber-300 font-[Cinzel]">{node.title}</h2>
            <p className="text-xs md:text-xs text-amber-400">{node.period}</p>
            <p className="text-yellow-200 text-xs md:text-sm mt-1">{node.program}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
