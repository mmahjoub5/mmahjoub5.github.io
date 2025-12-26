import Link from 'next/link'
import { profile } from '@/data/profile'

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full min-h-screen bg-white">
      <main className="min-h-screen bg-white">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Navigation */}
          <div className="mb-8">
            <Link 
              href="/blog"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Blog
            </Link>
          </div>

          {/* Blog Post Content */}
          <div className="prose prose-lg max-w-none">
            {children}
          </div>

          {/* Footer Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link 
              href="/blog"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} {profile.name}
          </p>
        </div>
      </footer>
    </div>
  )
}
