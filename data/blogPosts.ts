export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'autograd',
    title: 'Building a Minimal Tensor Autograd Engine in C++',
    date: '2025-01-20',
    excerpt: 'Reverse-mode autodiff, matrix multiply backprop, and gradient verification via finite differences. A deep dive into implementing automatic differentiation from scratch.',
    tags: ['C++', 'Machine Learning', 'Autodiff'],
    readTime: '12 min read',
  },
]
