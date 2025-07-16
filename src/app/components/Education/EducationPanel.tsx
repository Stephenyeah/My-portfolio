'use client'

import { motion } from 'framer-motion'
// ✅ 改用 next/font/google
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
    pos: { top: 0, left: 200 }, // Top node, shifted left to align with the main trunk
  },
  {
    id: 'hamk',
    title: 'Häme University of Applied Sciences, Finland',
    period: 'Aug 2022 – Jun 2023',
    program: 'Degree Programme in Computer Applications',
    pos: { top: 180, left: 200 }, // Placed below HAAGA-HELIA, on the main trunk
  },
  {
    id: 'junction',
    title: '',
    period: '',
    program: '',
    pos: { top: 280, left: 200 }, // Junction point below HAMK on the main trunk
  },
  {
    id: 'cc',
    title: 'Child Care Co certificate, Winnipeg, MB | YMCA-YWCA Winnipeg',
    period: '2018 – 2019',
    program: 'Province of Manitoba 40-hour Child Care Training | Red River College Winnipeg, MB',
    pos: { top: 278, left: 500 }, // Branched to the right from the trunk area
  },
  {
    id: 'gz',
    title: 'Guangzhou University, Guangzhou, China',
    period: '2007 – 2011',
    program: 'Bachelor of Software Engineering',
    pos: { top: 380, left: 200 }, // Bottom node, on the main trunk
  },
]

const connections = [
  { from: 'hh', to: 'hamk' }, // HAAGA-HELIA to HAMK
  { from: 'hamk', to: 'junction' }, // HAMK to Junction
  { from: 'junction', to: 'gz' }, // Junction to Guangzhou University
  { from: 'junction', to: 'cc' }, // Junction to Child Care Certificate (branching right)
]

export default function EducationPanel({ show }: { show: boolean }) {
  return (
    <motion.div
      initial={{ y: -500, opacity: 0 }}
      animate={{ y: show ? 100 : -800, opacity: show ? 1 : 0 }}
      transition={{ type: 'spring', stiffness: 65 }}
      className={`absolute z-50 left-3/7 top-1/3 -translate-x-1/2 -translate-y-1/10 w-[1000px] h-[700px] bg-gradient-to-br from-gray-900 to-black border-4 border-amber-700 rounded-xl shadow-[0_0_40px_rgba(255,191,0,0.4)] p-8 overflow-hidden ${cinzel.className}`}
    >
      <h1 className="text-center text-3xl font-[Cinzel] font-bold text-amber-400 mb-8 tracking-widest" >
        EDUCATION TREE
      </h1>
      <div className="relative w-full h-full">
        {connections.map((conn, idx) => {
          const from = educationNodes.find((n) => n.id === conn.from)!
          const to = educationNodes.find((n) => n.id === conn.to)!
          const x1 = from.pos.left
          const y1 = from.pos.top
          const x2 = to.pos.left
          const y2 = to.pos.top
          const dx = x2 - x1
          const dy = y2 - y1
          const length = Math.sqrt(dx * dx + dy * dy)
          const angle = Math.atan2(dy, dx) * (180 / Math.PI)
          return (
            <div
              key={idx}
              className="absolute bg-yellow-400"
              style={{
                // Adjust these offsets if the lines don't perfectly center on your nodes
                top: y1 + 68, // Adjust to center the line vertically on the node
                left: x1 + 128, // Adjust to center the line horizontally on the node
                width: length,
                height: 2,
                transform: `rotate(${angle}deg)`,
                transformOrigin: 'left center',
                opacity: 0.8,
              }}
            />
          )
        })}

        {educationNodes
          .filter((node) => node.id !== 'junction') // Filter out the invisible junction node
          .map((node, idx) => (
            <div
              key={idx}
              className="absolute bg-gray-800 border border-amber-600 rounded-lg shadow-lg p-4 w-68 hover:scale-105 transition-all duration-300"
              style={{ top: node.pos.top, left: node.pos.left }}
            >
              <h2 className="text-sm font-bold text-amber-300 font-[Cinzel]">{node.title}</h2>
              <p className="text-sm text-amber-400">{node.period}</p>
              <p className="text-yellow-200 mt-1">{node.program}</p>
            </div>
          ))}
      </div>
    </motion.div>
  )
}