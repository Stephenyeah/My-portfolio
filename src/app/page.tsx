'use client'

import { useEffect, useState, useRef } from 'react'
import MenuPanel from './components/MenuPanel/MenuPanel'
import AboutPanel from './components/about/AboutPanel'
import ProjectsPanel from './components/projects/ProjectsPanel'
import ExperiencePanel from './components/Experience/ExperiencePanel'
import EducationPanel from './components/Education/EducationPanel'
import SettingPanel from './components/settings/SettingPanel'
import LinkPanel from './components/Link/LinkPanel'

type PanelType = 'menu' | 'about' | 'projects' | 'settings' | 'link' | 'experience' | 'education' | null

export default function HomePage() {
  const [, setShowMenu] = useState(false)
  const [activePanel, setActivePanel] = useState<PanelType>('menu')
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setTimeout(() => setShowMenu(true), 300)
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75
    }
  }, [])

  const handlePanelSelect = (panel: string) => {
    const allowedPanels: PanelType[] = ['menu', 'about', 'projects', 'settings', 'link', 'experience', 'education']
    if (!allowedPanels.includes(panel as PanelType)) return

    const keepMenuOpen: PanelType[] = ['about', 'settings', 'link']
    const delay = 400

    setActivePanel(null)

    setTimeout(() => {
      if (keepMenuOpen.includes(panel as PanelType)) {
        setActivePanel('menu')
      }
      setActivePanel(panel as PanelType)
    }, delay)
  }


  return (
    <div className="page-background">
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

      <div className="overlay" />

      <div className="content-container">
        <MenuPanel
          show={
            activePanel === 'menu' ||
            ['about', 'settings', 'link', 'experience', 'education'].includes(activePanel!)
          }
          onSelect={handlePanelSelect}
        />
        <AboutPanel show={activePanel === 'about'} />
        <ProjectsPanel
          show={activePanel === 'projects'}
          onBackToMenu={() => setActivePanel('menu')}
        />
        <ExperiencePanel show={activePanel === 'experience'} />
        <EducationPanel show={activePanel === 'education'} />
        <SettingPanel show={activePanel === 'settings'} />
        <LinkPanel show={activePanel === 'link'} />
      </div>
    </div>
  )
}
