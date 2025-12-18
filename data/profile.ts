// =================================================================
// EDIT THIS FILE TO UPDATE YOUR WEBSITE CONTENT
// =================================================================
// Simply replace the placeholder text with your own information.
// Add or remove items from arrays as needed.
// =================================================================

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  email: string;
  location?: string;
  about: string;
  links: {
    cv: string;
    googleScholar?: string;
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  interests: string[];
  projects: Array<{
    title: string;
    description: string;
    links?: Array<{ label: string; url: string }>;
    tags?: string[];
  }>;
  publications: Array<{
    authors: string;
    title: string;
    venue: string;
    year: number;
    links?: Array<{ label: string; url: string }>;
  }>;
  news: Array<{
    date: string;
    text: string;
  }>;
  education: Array<{
    degree: string;
    institution: string;
    year: string;
    details?: string[];
  }>;
  experience: Array<{
    title: string;
    organization: string;
    period: string;
    details?: string[];
  }>;
  skills: string[];
}

// =================================================================
// YOUR INFORMATION - EDIT BELOW
// =================================================================

export const profile: Profile = {
  // Basic Information
  name: "[PUT NAME HERE]",
  title: "[PUT TITLE HERE]",
  tagline: "I research and build intelligent systems that push the boundaries of what's possible.",
  email: "[PUT EMAIL HERE]",
  location: "San Francisco, CA", // Optional

  // About Section
  about: "[PUT ABOUT HERE] - This is a placeholder paragraph about your research background and interests. Replace this with 2-4 sentences describing your academic journey, research focus, and what drives your work. For example: 'I'm a PhD student in Computer Science at XYZ University, advised by Prof. ABC. My research focuses on machine learning and natural language processing, with emphasis on making AI systems more interpretable and robust.'",

  // Social Links
  links: {
    cv: "/cv.pdf", // Path to your CV PDF in the public folder
    googleScholar: "[PUT GOOGLE SCHOLAR URL HERE]",
    github: "[PUT GITHUB URL HERE]",
    linkedin: "[PUT LINKEDIN URL HERE]",
    twitter: "[PUT TWITTER URL HERE]", // Optional
  },

  // Research Interests (3-6 items recommended)
  interests: [
    "[PUT INTEREST 1 HERE - e.g., Machine Learning]",
    "[PUT INTEREST 2 HERE - e.g., Natural Language Processing]",
    "[PUT INTEREST 3 HERE - e.g., Computer Vision]",
    "[PUT INTEREST 4 HERE - e.g., Reinforcement Learning]",
    "[PUT INTEREST 5 HERE - e.g., AI Safety & Interpretability]",
  ],

  // Projects (3-6 recommended for homepage)
  projects: [
    {
      title: "[PUT PROJECT 1 TITLE HERE]",
      description: "[PUT PROJECT 1 DESCRIPTION HERE] - A brief 2-3 sentence description of what this project does, what techniques you used, and why it matters.",
      links: [
        { label: "Paper", url: "#" },
        { label: "Code", url: "#" },
        { label: "Demo", url: "#" },
      ],
      tags: ["Machine Learning", "Python", "PyTorch"],
    },
    {
      title: "[PUT PROJECT 2 TITLE HERE]",
      description: "[PUT PROJECT 2 DESCRIPTION HERE] - Another project description highlighting your technical skills and research contributions.",
      links: [
        { label: "Paper", url: "#" },
        { label: "Code", url: "#" },
      ],
      tags: ["Deep Learning", "NLP"],
    },
    {
      title: "[PUT PROJECT 3 TITLE HERE]",
      description: "[PUT PROJECT 3 DESCRIPTION HERE] - Describe the impact and technical novelty of this project.",
      links: [
        { label: "Paper", url: "#" },
      ],
      tags: ["Computer Vision", "Research"],
    },
  ],

  // Publications (most recent first)
  publications: [
    {
      authors: "[PUT AUTHORS HERE - e.g., Jane Doe, John Smith, Alice Johnson]",
      title: "[PUT PUBLICATION 1 TITLE HERE]",
      venue: "Conference on Neural Information Processing Systems (NeurIPS)",
      year: 2024,
      links: [
        { label: "Paper", url: "#" },
        { label: "Code", url: "#" },
        { label: "arXiv", url: "#" },
      ],
    },
    {
      authors: "[PUT AUTHORS HERE]",
      title: "[PUT PUBLICATION 2 TITLE HERE]",
      venue: "International Conference on Machine Learning (ICML)",
      year: 2023,
      links: [
        { label: "Paper", url: "#" },
        { label: "arXiv", url: "#" },
      ],
    },
    {
      authors: "[PUT AUTHORS HERE]",
      title: "[PUT PUBLICATION 3 TITLE HERE]",
      venue: "Conference on Computer Vision and Pattern Recognition (CVPR)",
      year: 2023,
      links: [
        { label: "Paper", url: "#" },
      ],
    },
  ],

  // News / Updates (most recent first, 3-5 items recommended)
  news: [
    {
      date: "Dec 2024",
      text: "[PUT NEWS 1 HERE - e.g., Paper accepted to NeurIPS 2024!]",
    },
    {
      date: "Sep 2024",
      text: "[PUT NEWS 2 HERE - e.g., Started PhD at XYZ University]",
    },
    {
      date: "Jun 2024",
      text: "[PUT NEWS 3 HERE - e.g., Presented research at ABC Workshop]",
    },
  ],

  // CV Page Content
  education: [
    {
      degree: "Ph.D. in Computer Science",
      institution: "[PUT UNIVERSITY HERE]",
      year: "2024 - Present",
      details: [
        "Advisor: [PUT ADVISOR NAME HERE]",
        "Focus: [PUT RESEARCH FOCUS HERE]",
      ],
    },
    {
      degree: "M.S. in Computer Science",
      institution: "[PUT UNIVERSITY HERE]",
      year: "2022 - 2024",
      details: [
        "GPA: 4.0/4.0",
        "Thesis: [PUT THESIS TITLE HERE]",
      ],
    },
    {
      degree: "B.S. in Computer Science",
      institution: "[PUT UNIVERSITY HERE]",
      year: "2018 - 2022",
      details: [
        "Summa Cum Laude",
        "Minor in Mathematics",
      ],
    },
  ],

  experience: [
    {
      title: "Research Intern",
      organization: "[PUT ORGANIZATION HERE - e.g., Google Research]",
      period: "Summer 2024",
      details: [
        "[PUT DETAIL 1 - e.g., Worked on large language models]",
        "[PUT DETAIL 2 - e.g., Improved model efficiency by 20%]",
        "[PUT DETAIL 3 - e.g., Collaborated with senior researchers]",
      ],
    },
    {
      title: "Research Assistant",
      organization: "[PUT ORGANIZATION HERE - e.g., XYZ Lab]",
      period: "2022 - Present",
      details: [
        "[PUT DETAIL 1]",
        "[PUT DETAIL 2]",
      ],
    },
    {
      title: "Software Engineer Intern",
      organization: "[PUT ORGANIZATION HERE]",
      period: "Summer 2023",
      details: [
        "[PUT DETAIL 1]",
        "[PUT DETAIL 2]",
      ],
    },
  ],

  skills: [
    "Python, C++, JavaScript, TypeScript",
    "PyTorch, TensorFlow, JAX",
    "Machine Learning, Deep Learning, NLP, Computer Vision",
    "Git, Docker, Linux, AWS",
    "Research, Technical Writing, Collaboration",
  ],
};
