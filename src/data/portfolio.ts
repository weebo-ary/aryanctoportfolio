export const personalInfo = {
  name: "Aryan Bhardwaj",
  title: "CTO at TheDigitalFlix",
  tagline: "Tech Strategist | Full-Stack Engineer | Product Innovator",
  email: "aryan@thedigitalflix.com",
  phone: "+91-XXXXXXXXXX",
  location: "India",
  bio: `Passionate technology leader with a journey from B.Tech in Electronics & Communication Engineering to becoming a CTO. With extensive experience in MERN and Django development, I've successfully led teams and built scalable solutions. Winner of EHacks'21 and AICTE Ideathon, I combine technical expertise with strategic vision to drive product innovation and digital transformation.`,
  social: {
    linkedin: "https://linkedin.com/in/aryan-bhardwaj",
    github: "https://github.com/aryan-bhardwaj",
    showwcase: "https://showwcase.com/aryan-bhardwaj",
    resume: "/resume.pdf"
  }
};

export const experiences = [
  {
    id: 1,
    title: "Chief Technology Officer",
    company: "TheDigitalFlix",
    period: "Sept 2024 - Present",
    description: "Leading technical strategy and product development. Architecting scalable solutions and managing engineering teams to drive digital innovation.",
    technologies: ["React", "Django", "AWS", "PostgreSQL", "Docker"],
    achievements: [
      "Built and scaled engineering team from 2 to 12 developers",
      "Architected microservices infrastructure handling 100K+ daily users",
      "Led digital transformation initiatives reducing operational costs by 40%"
    ]
  },
  {
    id: 2,
    title: "Full Stack Engineer",
    company: "Dvimedha",
    period: "Feb 2023 - Sept 2024",
    description: "Developed end-to-end web applications using modern tech stack. Collaborated with cross-functional teams to deliver high-quality products.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Azure"],
    achievements: [
      "Delivered 5+ production-ready applications",
      "Improved application performance by 60%",
      "Mentored junior developers and established coding standards"
    ]
  },
  {
    id: 3,
    title: "MERN Stack Consultant",
    company: "PixeloDigital",
    period: "Aug 2022 - Feb 2023",
    description: "Provided technical consulting for MERN stack applications. Helped clients modernize their tech infrastructure and improve development workflows.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Firebase"],
    achievements: [
      "Successfully delivered 8 client projects",
      "Reduced development time by 35% through optimized workflows",
      "Implemented CI/CD pipelines improving deployment efficiency"
    ]
  }
];

export const techStack = {
  frontend: [
    { name: "React.js", icon: "⚛️", level: 95 },
    { name: "Next.js", icon: "▲", level: 90 },
    { name: "Tailwind CSS", icon: "🎨", level: 95 },
    { name: "TypeScript", icon: "🔷", level: 85 }
  ],
  backend: [
    { name: "Django", icon: "🐍", level: 90 },
    { name: "Node.js", icon: "🟢", level: 88 },
    { name: "Express.js", icon: "🚀", level: 87 },
    { name: "FastAPI", icon: "⚡", level: 82 }
  ],
  database: [
    { name: "MongoDB", icon: "🍃", level: 90 },
    { name: "PostgreSQL", icon: "🐘", level: 85 },
    { name: "Redis", icon: "🔴", level: 78 },
    { name: "Firebase", icon: "🔥", level: 80 }
  ],
  devops: [
    { name: "AWS", icon: "☁️", level: 85 },
    { name: "Azure", icon: "🌐", level: 80 },
    { name: "Docker", icon: "🐳", level: 83 },
    { name: "Linux", icon: "🐧", level: 88 }
  ]
};

export const projects = [
  {
    id: 1,
    title: "POS Weighing Scale System",
    description: "Advanced Point of Sale system integrated with weighing scales for retail businesses. Features real-time inventory management and automated billing.",
    image: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=500",
    technologies: ["React", "Django", "PostgreSQL", "Hardware Integration"],
    features: [
      "Real-time weight measurement integration",
      "Automated inventory tracking",
      "Multi-store management",
      "Comprehensive reporting dashboard"
    ],
    github: "https://github.com/aryan-bhardwaj/pos-weighing-system",
    demo: "https://pos-demo.thedigitalflix.com",
    status: "Production"
  },
  {
    id: 2,
    title: "Intelstrom - Solar Panel Platform",
    description: "Comprehensive platform for solar panel management and monitoring. Includes energy analytics, maintenance scheduling, and ROI calculations.",
    image: "https://images.pexels.com/photos/9875428/pexels-photo-9875428.jpeg?auto=compress&cs=tinysrgb&w=500",
    technologies: ["Next.js", "Django REST", "MongoDB", "IoT Integration"],
    features: [
      "Real-time energy monitoring",
      "Predictive maintenance alerts",
      "ROI calculation and reporting",
      "Mobile-responsive dashboard"
    ],
    github: "https://github.com/aryan-bhardwaj/intelstrom",
    demo: "https://intelstrom.com",
    status: "Production"
  },
  {
    id: 3,
    title: "Enterprise CRM System",
    description: "Full-featured Customer Relationship Management system built with React and Django. Includes lead management, sales pipeline, and analytics.",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=500",
    technologies: ["React", "Django", "PostgreSQL", "Redis"],
    features: [
      "Lead and opportunity management",
      "Sales pipeline visualization",
      "Advanced analytics and reporting",
      "Email automation and templates"
    ],
    github: "https://github.com/aryan-bhardwaj/enterprise-crm",
    demo: "https://crm-demo.thedigitalflix.com",
    status: "Production"
  }
];

export const blogs = [
  {
    id: 1,
    title: "Building Scalable SaaS Applications: Lessons from the Trenches",
    excerpt: "Key insights and best practices for building SaaS applications that can scale from zero to millions of users.",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["SaaS", "Architecture", "Scaling"],
    url: "https://showwcase.com/aryan-bhardwaj/building-scalable-saas"
  },
  {
    id: 2,
    title: "The Future of POS Systems: Integration and Innovation",
    excerpt: "Exploring how modern POS systems are evolving with hardware integration and real-time analytics.",
    date: "2024-01-08",
    readTime: "6 min read",
    tags: ["POS", "Hardware", "Innovation"],
    url: "https://showwcase.com/aryan-bhardwaj/future-of-pos"
  },
  {
    id: 3,
    title: "Open Source Contributions: Why Every Developer Should Participate",
    excerpt: "The importance of open source contributions in career growth and community building.",
    date: "2024-01-01",
    readTime: "5 min read",
    tags: ["Open Source", "Career", "Community"],
    url: "https://showwcase.com/aryan-bhardwaj/open-source-contributions"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    position: "CEO, TechVenture",
    company: "TechVenture Pvt Ltd",
    content: "Aryan's technical leadership and strategic vision have been instrumental in our digital transformation. His ability to translate complex requirements into scalable solutions is exceptional.",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Sharma",
    position: "Product Manager",
    company: "Dvimedha",
    content: "Working with Aryan was a game-changer for our product development. His full-stack expertise and attention to detail helped us deliver high-quality applications on time.",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5
  },
  {
    id: 3,
    name: "Amit Patel",
    position: "Founder",
    company: "PixeloDigital",
    content: "Aryan's consulting services helped us modernize our entire tech stack. His expertise in MERN development and best practices significantly improved our development workflow.",
    avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5
  }
];