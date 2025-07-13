'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function LogoIntro({ onFinish }: { onFinish: () => void }) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false)
      onFinish()
    }, 2000) // 显示 2 秒后消失
    return () => clearTimeout(timer)
  }, [onFinish])

  if (!show) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
    >
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 150 }}
        className="text-5xl text-yellow-400 font-bold"
      >
        ⚔️ 魔兽争霸菜单站 ⚔️
      </motion.h1>
    </motion.div>
  )
}
