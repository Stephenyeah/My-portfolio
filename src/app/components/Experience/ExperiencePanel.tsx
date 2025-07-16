'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, EffectCreative } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-creative'
import { useMemo } from 'react'

// ✅ 使用 next/font/google
import { Cinzel } from 'next/font/google'
const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '700'] })


const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

interface Image {
  id: number
  url: string
  title: string
}

interface Experience {
  title: string
  period: string
  role: string
  description: string
  images: Image[]
}

const experiences: Experience[] = [
  {
    title: 'Justice Lady 4.0 (Internship)',
    period: 'Nov 2024 - Now',
    role: 'Full Stack Developer',
    description:
      'Continue developing the AI chat functionality for legal issues on the Azure platform, including login and registration, file upload, and backend customer data storage. The front-end is built using React TypeScript. Deployment to Azure cloud, server-side AI model modification, and performance testing.',
    images: [
      { id: 1, url: `${basePath}/images/project-AI-snowlex/1.png`, title: 'Snowlx legal AI Chat Interface' },
      { id: 2, url: `${basePath}/images/project-AI-snowlex/4.png`, title: 'Azure Dashboard' },
      { id: 3, url: `${basePath}/images/project-AI-snowlex/3.png`, title: 'AI thought process' },
      { id: 4, url: `${basePath}/images/project-AI-snowlex/2.png`, title: 'User Authentication' }
    ]
  },
  {
    title: 'Nordic Shine Travel Oy (Part-Time)',
    period: 'Oct 2024 - Now',
    role: 'Web Developer',
    description:
      'Responsible for web front-end and back-end development, fulfilling customer requirements, coordinating backend services, deploying to AWS cloud, and optimizing deployment following AWS architecture best practices.',
    images: [
      { id: 1, url: `${basePath}/images/project-nodic-shine/1.png`, title: 'Travel Website' },
      { id: 2, url: `${basePath}/images/project-nodic-shine/3.png`, title: 'AWS Architecture' },
      { id: 3, url: `${basePath}/images/project-nodic-shine/2.png`, title: 'Booking System' }
    ]
  },
    {
      title: 'The Hacker’s Journey (Cybersecurity Course Project)',
      period: 'Aug 2024 - Dec 2024',
      role: 'Cybersecurity Student',
      description:
        'Participated in the “The Hacker’s Journey” course at Haaga-Helia, focusing on ethical hacking techniques, Linux terminal operations, Kali tools, and practical cybersecurity challenges. Developed a hands-on understanding of system vulnerabilities, privilege escalation, and network intrusion tactics in a controlled environment.',
      images: [
        { id: 1, url: `${basePath}/images/internet-security/1.png`, title: 'Reconstruct, Detect, Block' },
        { id: 2, url: `${basePath}/images/internet-security/2.png`, title: 'DNS Spoofing & IP Blacklisting' },
        { id: 3, url: `${basePath}/images/internet-security/3.png`, title: 'Sensitive Word Filtering in Real Time' },
        { id: 4, url: `${basePath}/images/internet-security/4.png`, title: 'Active Probing & Protocol Recognition' },
        { id: 5, url: `${basePath}/images/internet-security/5.png`, title: 'Breaking Through the Wall' },
        { id: 6, url: `${basePath}/images/internet-security/6.png`, title: 'VPN vs Proxy: Two Ways Out' },
        { id: 7, url: `${basePath}/images/internet-security/7.png`, title: 'Encrypted Proxies: Shadowsocks & V2ray' },
        { id: 8, url: `${basePath}/images/internet-security/8.png`, title: 'The TOR Dilemma' },
        { id: 9, url: `${basePath}/images/internet-security/9.png`, title: 'The Firewall That Listens' },
        { id: 10, url: `${basePath}/images/internet-security/10.png`, title: 'A Wall Beyond Geography' },
        { id: 11, url: `${basePath}/images/internet-security/11.png`, title: 'Censorship by Design: A Technical Overview' },
        { id: 12, url: `${basePath}/images/internet-security/12.png`, title: 'Digital Sovereignty or Suppression?' }
      ]
    },
  {
    title: 'Häme University of Applied Sciences',
    period: 'Sep 2022 - Oct 2022',
    role: 'App Developer',
    description:
      'My friend and I, who work at Huawei in China, have developed an embedded WeChat mini-program together. “New Life In Finland” is an all-in-one mini program designed for Chinese in Finland to share information, connect socially, and support daily life. Frontend WeChat Mini Program (Vue), Backend (Spring Boot + MyBatis + MySQL).',
    images: [
      { id: 1, url: `${basePath}/images/projects-Friends-in-Finland/1.png`, title: 'WeChat Mini Program' },
      { id: 2, url: `${basePath}/images/projects-Friends-in-Finland/2.png`, title: 'Home page' },
      { id: 3, url: `${basePath}/images/projects-Friends-in-Finland/3.png`, title: 'Tour and detail page' },
      { id: 4, url: `${basePath}/images/projects-Friends-in-Finland/4.png`, title: 'Publish function' },
      { id: 5, url: `${basePath}/images/projects-Friends-in-Finland/5.png`, title: 'Date of market' }
    ]
  },
  {
    title: 'YMCA-YWCA of Winnipeg Child Care',
    period: 'Feb 2019 – Jan 2021',
    role: 'Child Care Assistant',
    description:
      'Supported child care activities, engaged children in learning and play, and ensured a safe environment.',
    images: [
      { id: 1, url: `${basePath}/images/cca/1.png`, title: 'Education Certificate' },
      { id: 2, url: `${basePath}/images/cca/2.png`, title: 'Activity Planning' }
    ]
  },
  {
    title: 'Tax Bureau in Guangzhou, China',
    period: 'Apr 2015 - May 2018',
    role: 'Network Administrator',
    description:
      'I’m responsible for maintaining the network and over 200 computers at the Yuexiu District Taxation Bureau, including switches, routers, and file servers. I quickly resolve computer issues for colleagues and use my network security knowledge to handle server room problems efficiently.',
    images: [
      { id: 1, url: `${basePath}/images/tax-bureau/1.png`, title: 'Network Infrastructure' },
      { id: 2, url: `${basePath}/images/tax-bureau/2.png`, title: 'Server Management' },
      { id: 3, url: `${basePath}/images/tax-bureau/3.png`, title: 'System Monitoring' }
    ]
  },
  {
    title: 'Guangzhou Huadiyuan Design Institute',
    period: 'Apr 2012 – Aug 2014',
    role: '3D Cartographer',
    description:
      'Assisted in CAD façade drawings, 3D modeling in 3ds Max, rendering, VR visualization, and Photoshop diagramming.',
    images: [
      { id: 1, url: `${basePath}/images/guangzhou-huadiyuan/1.png`, title: '3D Modeling' },
      { id: 2, url: `${basePath}/images/guangzhou-huadiyuan/2.png`, title: 'Rendering' },
      { id: 3, url: `${basePath}/images/guangzhou-huadiyuan/3.png`, title: 'Rendering' },
      { id: 4, url: `${basePath}/images/guangzhou-huadiyuan/4.png`, title: 'Architectural Rendering' },
      { id: 5, url: `${basePath}/images/guangzhou-huadiyuan/5.png`, title: 'Architectural Rendering' }
    ]
  }
]

export default function ExperiencePanel({
  show,
  // onBackToMenu
}: {
  show: boolean
  // onBackToMenu: () => void
}) {
  const [showcaseImages, setShowcaseImages] = useState<Image[]>([])
  const [showShowcase, setShowShowcase] = useState(false)
  const [enlargedImage, setEnlargedImage] = useState<Image | null>(null)
  const [showEnlarged, setShowEnlarged] = useState(false)
  
    const isCompact = useMemo(() => showcaseImages.length > 5, [showcaseImages])



  const handleShowcase = (experience: Experience) => {
    if (showShowcase && showcaseImages.length > 0) {
      setShowShowcase(false)
      setTimeout(() => setShowcaseImages([]), 300)
    } else {
      setShowcaseImages(experience.images)
      setShowShowcase(true)
    }
  }

  const closeShowcase = () => {
    setShowShowcase(false)
    setTimeout(() => setShowcaseImages([]), 300)
  }

  return (
    <motion.div
      initial={{ y: -500, opacity: 0 }}
      animate={{ y: show ? 100 : -800, opacity: show ? 1 : 0 }}
      transition={{ type: 'spring', stiffness: 65 }}
      className={`absolute top-4/11 left-2/5 -translate-x-1/2 -translate-y-1/10 z-40 w-[1250px] max-h-[90vh] min-h-[680px] bg-gradient-to-br from-black to-gray-900 border-4 border-amber-700 rounded-xl shadow-[0_0_40px_rgba(255,191,0,0.3)] p-8 flex flex-col ${cinzel.className}`}
    >
      <h1 className="text-center text-3xl font-[Cinzel] text-amber-300 mb-6 drop-shadow">
        My Experience
      </h1>

      <Swiper
        modules={[Navigation, Autoplay, EffectCreative]}
        centeredSlides
        loop
        grabCursor
        navigation
        slidesPerView={3}
        effect="creative"
        creativeEffect={{
          prev: { translate: ['-115px', 0, 0], scale: 0.85, shadow: true },
          next: { translate: ['140px', 0, 0], scale: 0.85, shadow: true }
        }}
        className="w-full h-[500px]"
      >
        {experiences.map((exp, idx) => (
          <SwiperSlide
            key={idx}
            className="flex flex-col items-center justify-between px-8 py-6 text-white bg-black bg-opacity-90 rounded-xl border border-yellow-700 shadow-lg"
          >
            <div className="text-center text-base text-amber-100 space-y-2 max-w-[520px]">
              <h3 className="text-2xl font-bold text-amber-400">{exp.title}</h3>
              <p className="italic text-amber-300 text-sm">
                {exp.period} – {exp.role}
              </p>
              <p className="text-sm leading-relaxed">{exp.description}</p>
            </div>

            <div className="flex justify-center mt-30">
              <button
                onClick={() => handleShowcase(exp)}
                className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-black font-semibold py-2 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 border border-yellow-400"
              >
                ✨ Showcase
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <AnimatePresence>
        {showShowcase && showcaseImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
            onClick={closeShowcase}
          >
            <div className="relative w-full max-w-[1250px] h-[600px] flex flex-wrap items-center justify-center gap-6 p-8">
            {showcaseImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{
                  opacity: 0,
                  scale: 0.3,
                  y: 50,
                  rotate: Math.random() * 40 - 20,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  rotate: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.3,
                  y: -100,
                }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: 0,
                  zIndex: 10,
                  transition: { duration: 0.2 },
                }}
                className={`bg-white rounded-xl shadow-2xl overflow-hidden cursor-pointer border-4 border-amber-300 ${
                  isCompact ? 'w-[200px] h-[180px]' : 'w-[340px] h-[260px]'
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <div className={`overflow-hidden rounded-t-lg ${isCompact ? 'h-[125px]' : 'h-[220px]'}`}>
                  <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-[200px] object-cover border-b border-amber-300"
                  onClick={() => {
                    setEnlargedImage(image);
                    setShowEnlarged(true);
                  }}
                />
                </div>

                <div className="h-[16px] p-2  bg-amber-50 text-gray-800 font-semibold text-sm flex  justify-center">
                  {image.title}
                </div>
              </motion.div>
            ))}



              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ delay: 0.3 }}
                onClick={(e) => {
                  e.stopPropagation();
                  closeShowcase();
                }}
                className="absolute top-8 right-8 bg-red-600 hover:bg-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-lg hover:scale-110 transition-all z-20"
              >
                ×
              </motion.button>
            </div>
          </motion.div>

        )}
      </AnimatePresence>

      <AnimatePresence>
        {showEnlarged && enlargedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black bg-opacity-80 flex items-center justify-center"
            onClick={() => {
              setShowEnlarged(false)
              setTimeout(() => setEnlargedImage(null), 300)
            }}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-[50vw] max-h-[60vh] flex flex-col items-center justify-center"
            >
              <img
                src={enlargedImage.url}
                alt={enlargedImage.title}
                className="max-w-full max-h-[55vh]  w-auto h-auto rounded-xl shadow-2xl border-4 border-yellow-400 object-contain"
              />
              <p className="text-center text-amber-200 mt-4">{enlargedImage.title}</p>
              <button
                onClick={() => {
                  setShowEnlarged(false)
                  setTimeout(() => setEnlargedImage(null), 300)
                }}
                className="absolute top-0 right-0 mt-[-20px] mr-[-20px] bg-red-600 text-white rounded-full w-10 h-10 text-xl shadow-lg hover:bg-red-500"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* <div className="mt-6 text-center">
        <button
          onClick={onBackToMenu}
          className="bg-gray-700 hover:bg-gray-600 text-yellow-300 font-bold py-2 px-6 rounded-lg shadow hover:scale-105 transition"
        >
          🔙 Back to Main Menu
        </button>
      </div> */}
    </motion.div>
  )
}
