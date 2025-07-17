// src/components/SoundButton.tsx
'use client'
import { Howl } from 'howler'
import Link from 'next/link'

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const clickSound = new Howl({
  src: [`${basePath}/iron-chain-3.mp3`],
  volume: 0.5,
})

type Props = {
  text: string
  icon: string
  href?: string
  onClick?: () => void
}

export default function SoundButton({ text, icon, href, onClick }: Props) {
  const handleClick = (e: React.MouseEvent) => {
    clickSound.play()

    // 调用外部传入的 onClick（如果存在）
    if (onClick) {
      e.preventDefault() // 阻止默认跳转（由外部逻辑决定跳转时机）
      onClick()
    }
  }

  return (
    <Link
      href={href ?? '#'}
      onClick={handleClick}
      className="    
            flex items-center justify-center gap-2
            w-full md:w-[300px] py-2 md:py-3 px-3 md:px-4
            text-base md:text-lg font-bold tracking-wider text-yellow-300
            bg-gradient-to-b from-gray-800 to-black
            border-2 border-yellow-700 rounded-md
            shadow-md hover:brightness-110 active:translate-y-0.5
            transition-all duration-200
            text-center
          "
    >
      <span className="text-xl md:text-2xl">{icon}</span>
      <span className="hidden md:inline">{text}</span>
    </Link>
  )
}
