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
}

// CV interface extends Profile and adds CV-specific fields
export interface CV extends Profile {
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

export const profile: CV = {
  // Basic Information
  name: "Amin Mahjoub",
  title: "Electrical Engineer",
  tagline: "Building robust hardware & software systems",
  email: "aminmahjoub2000@gmail.com",
  location: "Mountain View, CA", // Optional

  // About Section
  about: "I am an Electrical Engineer at Aurora, where I design the analog and mixed-signal electronics behind in-house FMCW lidar — power supply stability, transimpedance amplifiers, analog control loops, and the electro-optical and firmware integration that ties the sensor together. Previously I spent three years at Microsoft Surface on high-speed digital and mixed-signal systems shipping at high volume. I also work on machine learning and computer vision research, with interests in hardware & software co-design, efficient inference, and robust perception pipelines for real-world deployment.",

  // Social Links
  links: {
    cv: "/cv.pdf", // Path to your CV PDF in the public folder
    googleScholar: "[PUT GOOGLE SCHOLAR URL HERE]",
    github: "https://github.com/mmahjoub5",
    linkedin: "https://www.linkedin.com/in/amin-mahjoub/",
    twitter: "[PUT TWITTER URL HERE]", // Optional
  },

  // Research Interests (3-6 items recommended)
  interests: [
    "Analog & Mixed-Signal Design",
    "FMCW Lidar & Electro-Optical Systems",
    "Digital Systems",
    "Embedded Systems",
    "Signal Processing",
    "VLSI Design",
  ],

  // Projects (3-6 recommended for homepage)
  projects: [
    {
      title: "Defogging Benchmark for Autonomous Driving (WACV 2026 Submission)",
      description:
        "Designed and ran a large-scale benchmark comparing classical filters, transformer-based models, chained preprocessing, and VLM-based image editing for fog removal. Built quantitative evaluation for object detection (mAP) and panoptic segmentation (PQ/RQ/SQ) using YOLOv11l and Mask2Former, and developed a VLM-as-a-judge rubric that strongly correlated with mAP (r = 0.94).",
      links: [
        { label: "Paper (Submission)", url: "https://aradfir.github.io/filters-to-vlms-defogging-page/" }, // add arXiv / PDF when available
      ],
      tags: ["Computer Vision", "Evaluation", "Autonomous Driving", "VLMs"],
    },
    {
      title: "Lensless Imaging via Iterative ADMM & Deep / Learned ADMM",
      description:
        "Built a physics-informed lensless imaging reconstruction pipeline from coded diffraction patterns using wave optics constraints. Implemented iterative ADMM and an unrolled Deep/Learned ADMM architecture, benchmarking against CNN denoisers and U-Net reconstructions to improve PSNR and perceptual sharpness under noise.",
      links: [
        { label: "Code", url: "https://github.com/mmahjoub5/EE592_FinalProject" }, // if the space breaks, replace with the exact repo URL
      ],
      tags: ["Computational Imaging", "ADMM", "PyTorch", "Inverse Problems"],
    },
    {
      title: "JobHuntTool — AI-Powered Job Search & Interview Assistant",
      description:
        "Led a hackathon build of an AI job-application agent using CrewAI to parse job descriptions, create embeddings, and generate structured interview insights. Built a Chrome extension + backend pipeline for automated job extraction, RAG-style querying, and Google Sheets integration for job tracking and resume-to-job alignment.",
      links: [
        { label: "Code", url: "https://github.com/Leon753/JobHuntTool" },
      ],
      tags: ["Agents", "RAG", "Chrome Extension", "Backend", "Google Sheets"],
    },
    {
      title: "LLM-Driven Task Manager for Robot Arm Control",
      description:
        "Designed a distributed control framework where an LLM acts as a high-level planner for a robot arm, producing natural-language action sequences that are parsed and executed. Implemented world-state tracking, task decomposition, and action execution with a simulation environment to validate planning and state updates.",
      links: [
        { label: "Code", url: "https://github.com/mmahjoub5/Multi_Agent_Goal_Manager" },
      ],
      tags: ["Robotics", "LLMs", "Planning", "Simulation", "Multi-Agent"],
    },
  ],

  // Publications (most recent first)
  publications: [
    {
      authors:
        "Aryashad, A.; Razmara, P.; Mahjoub, A.; Azizi, S.; Salmani, M.; Firouzkouhi, A.",
      title:
        "From Filters to VLMs: Benchmarking Defogging Methods through Object Detection and Segmentation Performance",
      venue: "Submitted to WACV 2026 Workshop",
      year: 2025,
      links: [
        { label: "Manuscript", url: "https://arxiv.org/abs/2510.03906" }, // add PDF/arXiv when available
      ],
    },
  ],

  // News / Updates (most recent first, 3-5 items recommended)
  news: [
    {
      date: "Jun 2026",
      text: "Joined Aurora as Electrical Engineer 2, working on analog and electro-optical design for in-house FMCW lidar.",
    },
    {
      date: "Dec 2025",
      text: "WACV 2026 workshop submission and recent project work.",
    },
    {
      date: "Aug 2023",
      text: "Started as Electrical Engineer at Microsoft Surface, owning end-to-end electrical development for high-volume products.",
    },
    {
      date: "Jan 2022",
      text: "Co-inventor on patent: Systems and Methods for Automated Music-Level Generation from Sheet Music (WO2025024205A2).",
    },

  ],

  // CV Page Content
  education: [
    {
      degree: "M.S. in Electrical and Computer Engineering",
      institution: "University of Southern California (USC), Los Angeles, CA",
      year: "Aug 2019 – May 2023",
      details: ["GPA: 3.66/4.0"],
    },
    {
      degree: "B.S. in Electrical and Computer Engineering",
      institution: "University of Southern California (USC), Los Angeles, CA",
      year: "Aug 2019 – May 2023",
      details: ["GPA: 3.77/4.0"],
    },
  ],

  experience: [
    {
      title: "Electrical Engineer 2",
      organization: "Aurora — Mountain View, CA",
      period: "Jun 2026 – Present",
      details: [
        "Own analog and mixed-signal PCB design for in-house FMCW lidar, including power supply stability, transimpedance amplifiers (TIA), and op-amp signal chains.",
        "Design and characterize analog control loops, using LTSpice simulation and bode plot analyzer measurements to validate stability margins.",
        "Lead lab bring-up and board debug with oscilloscopes, bode analyzers, and electronic loads, closing the loop between simulation and measured silicon.",
        "Implement on-board digital logic and support electro-optical integration between the photonic front end and the electrical subsystem.",
        "Develop and integrate firmware for sensor control, calibration, and data path bring-up.",
      ],
    },
    {
      title: "Electrical Engineer",
      organization: "Microsoft Surface — Seattle, WA",
      period: "Aug 2023 – Jun 2026",
      details: [
        "Led end-to-end electrical development including architecture, prototyping, validation, and mass production (500K+ units annually).",
        "Designed high-speed digital and mixed-signal PCB systems (10+ layers) integrating SoCs, GPUs, DDR, NVMe, 5G, and camera subsystems.",
        "Performed SI analysis (PCIe Gen4, USB 3.2, MIPI, DDR), reducing prototype iterations by ~30%.",
        "Developed RTOS/HAL firmware for ARM MCUs to improve responsiveness and power management.",
        "Modeled AC/DC power rails and built LTSpice simulations for motor drivers, converters, and mixed-signal blocks.",
      ],
    },
    {
      title: "Lead Researcher",
      organization: "Defogging Benchmark for Autonomous Driving (WACV 2026 Submission) — Los Angeles, CA",
      period: "2024 – 2025",
      details: [
        "Designed empirical benchmark across 54+ defogging pipelines (classical, transformer, chained preprocessing, VLM editing).",
        "Built downstream perception evaluation for detection (mAP) and panoptic segmentation (PQ/RQ/SQ).",
        "Developed VLM-as-a-judge rubric and prompt strategy; observed strong alignment with quantitative metrics (r = 0.94 with mAP).",
      ],
    },
    {
      title: "Software Engineer",
      organization: "Notey’s World — Los Angeles, CA",
      period: "Feb 2022 – Oct 2023",
      details: [
        "Built a real-time pitch and chord detection audio engine (~4 ms latency) using Harmonic Product Spectrum.",
        "Designed analytics pipelines and data-driven features; deployed backend with Firebase NoSQL.",
      ],
    },
  ],

  skills: [
    "Python, C/C++, TypeScript/JavaScript",
    "PyTorch, CUDA, ADMM optimization, CNN/UNet models, VLM evaluation",
    "Analog design: TIAs, op-amp signal chains, power supply stability, control loop compensation",
    "High-speed digital design (PCIe, USB, MIPI, DDR), mixed-signal circuits",
    "Lab bring-up & characterization: oscilloscope, bode plot analyzer, electronic load, power analysis",
    "Signal / power integrity, ARM RTOS/HAL firmware, LTSpice",
    "Docker, Linux, CI/CD, Google Sheets API, backend pipelines",
  ],
};
