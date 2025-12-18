'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-semibold text-lg text-gray-900 hover:text-gray-600 transition-colors">
            Home
          </Link>
          <div className="flex space-x-6">
            {isHomePage ? (
              <>
                <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">
                  About
                </a>
                <a href="#research" className="text-gray-700 hover:text-gray-900 transition-colors">
                  Research
                </a>
                <a href="#projects" className="text-gray-700 hover:text-gray-900 transition-colors">
                  Projects
                </a>
                <a href="#publications" className="text-gray-700 hover:text-gray-900 transition-colors">
                  Publications
                </a>
                <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors">
                  Contact
                </a>
              </>
            ) : null}
            <Link 
              href="/cv" 
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              CV
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
