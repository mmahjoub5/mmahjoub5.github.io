'use client'
import Link from 'next/link'

export default function GoToCVButton() {
  return (
    <Link
      href="/cv"
      style={{
        background: 'transparent',
        padding: 0,
        borderRadius: 0,
        border: 'none',
        boxShadow: 'none',
        textDecoration: 'underline',
        color: '#1f2937', // gray-800
      }}
      className="fixed top-6 right-6 z-50"
    >
      Go to CV →
    </Link>
  )
}
