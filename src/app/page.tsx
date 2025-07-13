'use client'

import { useEffect, useState, useRef } from 'react'
import MenuPanel from '@/app/components/MenuPanel/MenuPanel'
import AboutPanel from '@/app/Pages/about/page'
import ProjectsPanel from '@/app/Pages/projects/page'
import ExperiencePanel from '@/app/Pages/Experience/page'
import EducationPanel from './Pages/Education/page'
import SettingPanel from './Pages/settings/page'
import LinkPanel from './Pages/Link/page'

export default function HomePage() {
  const [, setShowMenu] = useState(false)
  const [activePanel, setActivePanel] = useState<'menu' | 'about' | 'projects' | 'settings' | 'link' | 'experience' | 'education' | null>('menu')


  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setTimeout(() => setShowMenu(true), 300)
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75 // 设置为半速播放
    }
  }, [])

  const handlePanelSelect = (panel: string) => {
    const keepMenuOpen = ['about', 'settings', 'link'] // 这些 panel 会保留 MenuPanel 打开
    const delay = 400

    // 立即清除所有 panel（为了触发动画）
    setActivePanel(null)

    // 设置下一个 panel，带动画延迟
    setTimeout(() => {
      if (keepMenuOpen.includes(panel)) {
        setActivePanel('menu') // 菜单保留
      }
      setActivePanel(panel as any)
    }, delay)
  }


  return (
    <div className="page-background">
      {/* 背景视频 */}
      <video
        ref={videoRef}
        className="bg-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/yilidan2-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 遮罩层（覆盖视频，但在菜单之下） */}
      <div className="overlay" />

      {/* 主内容层 */}
      <div className="content-container">
        <MenuPanel show={activePanel === 'menu' || ['about', 'settings', 'link', 'experience', 'education' ].includes(activePanel!)} onSelect={handlePanelSelect} />
        <AboutPanel show={activePanel === 'about'} />
        <ProjectsPanel show={activePanel === 'projects'} onBackToMenu={() => setActivePanel('menu')}/>
        <ExperiencePanel show={activePanel === 'experience'} />
        <EducationPanel show={activePanel === 'education'} />
        <SettingPanel show={activePanel === 'settings'} />
        <LinkPanel show={activePanel === 'link'} />
      </div>
    </div>
  )
}
