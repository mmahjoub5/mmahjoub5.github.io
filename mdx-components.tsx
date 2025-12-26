import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Headings
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold text-gray-900 mb-6 mt-8">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 border-b border-gray-200 pb-2">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold text-gray-900 mb-2 mt-4">
        {children}
      </h4>
    ),
    
    // Paragraphs
    p: ({ children }) => (
      <p className="text-gray-700 leading-relaxed mb-4">
        {children}
      </p>
    ),
    
    // Lists
    ul: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="ml-4">
        {children}
      </li>
    ),
    
    // Links
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-gray-900 underline hover:text-gray-600 transition-colors"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
    
    // Code blocks
    pre: ({ children }) => (
      <pre className="bg-gray border border-gray-200 rounded-lg p-4 overflow-x-auto mb-6 text-sm text-gray-900 font-mono">
        {children}
      </pre>
    ),
    code: ({ children, className }) => {
      // Inline code
      if (!className) {
        return (
          <code className="bg-gray-100 text--900 px-1.5 py-0.5 rounded text-sm font-mono">
            {children}
          </code>
        )
      }
      // Code block
      return (
        <code className={className}>
          {children}
        </code>
      )
    },
    
    // Blockquotes
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700 my-4">
        {children}
      </blockquote>
    ),
    
    // Horizontal rule
    hr: () => (
      <hr className="border-gray-200 my-8" />
    ),
    
    // Tables
    table: ({ children }) => (
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-gray-50">
        {children}
      </thead>
    ),
    th: ({ children }) => (
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
        {children}
      </td>
    ),
    
    ...components,
  }
}
