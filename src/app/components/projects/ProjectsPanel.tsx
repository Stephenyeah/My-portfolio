'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
// ✅ 使用 next/font/google
import { Cinzel } from 'next/font/google'
const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '700'] })

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const projects = [
  {
    id: 'miniapp',
    title: 'Friends in Finland',
    image: `${basePath}/images/projects-Friends-in-Finland/1.png`,
    description: 'A WeChat Mini Program built with Vue, Spring Boot, and MySQL.',
    tech: ['Vue', 'Spring Boot', 'MyBatis', 'MySQL'],
    link: 'https://www.figma.com/proto/4RXN7A0j9BiFyZhw05WAEb/New-life-in-Finland?kind=proto&node-id=76-27&page-id=0%3A1&scaling=scale-down&starting-point-node-id=61%3A164&type=design',
  },
  {
    id: 'forum',
    title: 'LadyJustice AI',
    image: `${basePath}/images/ai-legal-thumb.png`,
    description: 'An AI legal assistant built with Azure, React, and FastAPI.',
    tech: ['React', 'Azure', 'FastAPI', 'Python'],
    link: 'https://www.linkedin.com/company/justice-4-0/about/',
  },
  {
    id: 'plane-game',
    title: 'WW2 Plane Shooter Game',
    image: `${basePath}/images/planegame/project-planegame-1.png`,
    description: 'A 2D airplane shooting game built with TypeScript and Canvas in Next.js. Very easy to get 100 points',
    tech: ['Next.js', 'TypeScript', 'Canvas'],
    link: `${basePath}/Pages/plane-game`,
  },
  {
    id: 'customers-trainings',
    title: 'Customers Trainings',
    image: `${basePath}/images/customer-training/1.png`,
    description: 'An internal training management system that allows admins to record customer training participation and track progress. Features login, customer list, training form input, and statistics view.',
    tech: ['React', 'Vite', 'REST API'],
    link: 'https://github.com/Stephenyeah/Customers_Trainings',
  },
  {
    id: 'info-security',
    title: 'Information Security - GFW Overview',
    image: `${basePath}/images/internet-security/1.png`,  // 上传到 public 路径中
    description: 'An educational project explaining the Great Firewall (GFW) and firewall concepts with visual and text-based insights.',
    tech: ['HTML', 'CSS', 'GitHub Pages', 'Cybersecurity'],
    link: 'https://stephenyeah.github.io/Information-security/',
  }


]

export default function ProjectsPanel({
  show,
  onBackToMenu,
}: {
  show: boolean
  onBackToMenu: () => void
}) {
  const [selectedId, setSelectedId] = useState(projects[0].id)
  const selected = projects.find((p) => p.id === selectedId)!

  return (
    <motion.div
      initial={{ y: -500, opacity: 0 }}
      animate={{ y: show ? 100 : -800, opacity: show ? 1 : 0 }}
      transition={{ type: 'spring', stiffness: 65 }}
      className= {`absolute top-1/2 left-80 -translate-y-1/10 z-40  w-[1280px] max-h-[95vh] min-h-[700px] max-w-7xl flex bg-gradient-to-br from-black to-gray-900 border-4 border-amber-700 rounded-xl shadow-[0_0_40px_rgba(255,191,0,0.3)] overflow-hidden ${cinzel.className}`}
    >
      {/* 左侧：项目预览内容 */}
      <div className="w-2/3 p-6 text-amber-100 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold mb-4 font-[Cinzel] text-amber-300">{selected.title}</h3>
          <img
            src={selected.image}
            alt={selected.title}
            className="max-h-[420px] h-auto object-contain rounded-lg mb-4 border border-yellow-700 shadow-lg"
          />
          <p className="mb-3">{selected.description}</p>
          <p className="text-sm text-amber-400 italic mb-4">
            Tech stack: {selected.tech.join(', ')}
          </p>
        </div>
      </div>

      {/* 右侧：项目列表 + 操作按钮 */}
      <div className="w-1/3 border-l border-amber-700 p-4 flex flex-col justify-between bg-black/80">
        <div className="flex flex-col overflow-y-auto gap-3">
          <h2 className="text-xl font-[Cinzel] text-amber-400 text-center mb-2">PROJECTS</h2>
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedId(project.id)}
              className={`text-left px-4 py-2 rounded-lg text-yellow-300 border border-yellow-700 bg-gray-800 hover:bg-amber-800 transition-all shadow-md ${
                selectedId === project.id ? 'bg-amber-900 text-white' : ''
              }`}
            >
              {project.title}
            </button>
          ))}
        </div>

        {/* 固定在整个 Panel 底部两侧的按钮组 */}
        <div className="absolute bottom-6 left-68 right-25 px-8 flex justify-between items-center z-50">
          {/* 右边：查看项目 */}
          <a
            href={selected.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-600 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-lg shadow hover:scale-105 transition mb-2 mt-[-10px]"
          >
            🔗 Show or start
          </a>

          {/* 左边：返回主菜单 */}
          <button
            onClick={onBackToMenu}
            className="bg-gray-700 hover:bg-gray-600 text-yellow-300 font-bold py-2 px-6 rounded-lg shadow hover:scale-105 transition"
          >
            🔙 返回主菜单
          </button>


        </div>


      </div>
    </motion.div>
  )
}
