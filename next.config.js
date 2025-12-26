const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      [require('remark-math').default || require('remark-math')]
    ],
    rehypePlugins: [
      [require('rehype-katex').default || require('rehype-katex')]
    ],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}

module.exports = withMDX(nextConfig)
