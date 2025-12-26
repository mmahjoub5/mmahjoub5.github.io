import Link from 'next/link'
import { profile } from '@/data/profile'
import { blogPosts } from '@/data/blogPosts'

export const metadata = {
  title: `Blog | ${profile.name}`,
  description: `Blog posts by ${profile.name}`,
}

export default function BlogPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="mb-12">
            <Link 
              href="/"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Blog
            </h1>
            <p className="text-xl text-gray-600">
              Thoughts on engineering, research, and building systems
            </p>
          </div>

          {/* Blog Posts List */}
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article 
                key={post.id}
                className="border-b border-gray-200 pb-8 last:border-b-0"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                  <time className="text-sm text-gray-600 font-medium">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <span className="text-sm text-gray-500">
                    {post.readTime}
                  </span>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-gray-700 transition-colors">
                  <Link href={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-gray-900 hover:text-gray-600 font-medium transition-colors"
                >
                  Read more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>

          {/* Empty State (if no posts) */}
          {blogPosts.length === 0 && (
            <div className="text-center py-12">
              <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No blog posts yet
              </h3>
              <p className="text-gray-600">
                Check back soon for new content!
              </p>
            </div>
          )}
        </div>
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
