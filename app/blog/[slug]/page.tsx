import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkMath from 'remark-math'
import remarkGfm from 'remark-gfm'
import rehypeKatex from 'rehype-katex'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { profile } from '@/data/profile'
import { getAllSlugs, getPostBySlug } from '@/lib/posts'
import { useMDXComponents } from '@/mdx-components'

export async function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const post = getPostBySlug(params.slug)
    return {
      title: `${post.title} | ${profile.name}`,
      description: post.excerpt,
    }
  } catch {
    return {}
  }
}

const mdxOptions = {
  mdxOptions: {
    remarkPlugins: [remarkMath, remarkGfm],
    rehypePlugins: [rehypeKatex],
  },
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  let post
  try {
    post = getPostBySlug(params.slug)
  } catch {
    notFound()
  }

  return (
    <div className="w-full min-h-screen bg-white">
      <main className="min-h-screen bg-white">
        <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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

          <div className="prose prose-lg max-w-none blog-content">
            <MDXRemote
              source={post.content}
              options={mdxOptions}
              components={useMDXComponents({})}
            />
          </div>

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
