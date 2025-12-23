'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function TopNavLink() {
  const pathname = usePathname()
  const isCV = pathname === '/cv'


  const [visible, setVisible] = useState(true)

  useEffect(() => {
    console.log('useEffect', isCV)
    console.log('pathname', pathname)
    if (isCV) {
      setVisible(true)
      return
    }

    const onScroll = () => {
      setVisible(window.scrollY < 20)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [isCV])

  if (!visible) return null

  return (
    <div
      className={`flex pt-6 ${
        isCV ? 'justify-start pl-6' : 'justify-end pr-6'
      }`}
    >
      <Link
        href={isCV ? '/' : '/cv'}
        className="font-bold hover:underline"
      >
        {isCV ? '← Home' : 'Go to CV →'}
      </Link>
    </div>
  )
}
