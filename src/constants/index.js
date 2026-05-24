import {
    img1,
    img2,
    img3,
    img4,
    javascript,
    reactjs,
    nodejs,
    mongodb,
    git,
    tc,
    nn,
    cl,
    cmb,
    del,
    goog,
    dqc,
    na,
    pytorch,
    tensorflow,
    aws,
    keras,
    flask,
    logo
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "AI Agent-First Developer",
      icon: img1,
    },
    {
      title: "Low Latency Optimization",
      icon: img2,
    },
    {
      title: "Complex Algorithms",
      icon: img3,
    },
    {
      title: "Client Interactions",
      icon: img4,
    },
  ];
  
  const technologies = [
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React",
      icon: reactjs,
    },
    {
      name: "Node.js",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "PyTorch",
      icon: pytorch,
    },
    {
      name: "TensorFlow",
      icon: tensorflow,
    },
    {
      name: "Keras",
      icon: keras,
    },
    {
      name: "Flask",
      icon: flask,
    },
  ];

  const skillGroups = [
    {
      title: "Languages",
      items: ["Java", "C/C++", "Python", "SQL", "JavaScript", "TypeScript", "Golang"],
    },
    {
      title: "Frameworks",
      items: ["React", "Node.js", "Next.js", "Flask", "Spring", "Redux"],
    },
    {
      title: "Data + Infra",
      items: ["MongoDB", "PostgreSQL", "Docker", "AWS", "Git"],
    },
    {
      title: "ML + AI",
      items: ["TensorFlow", "PyTorch", "Keras", "HuggingFace", "LLM agents", "Autoresearch", "llm-wiki"],
    },
    {
      title: "Developer Tools",
      items: ["Claude Code", "Codex", "Antigravity"],
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "Google",
      icon: goog,
      iconBg: "#E6DEDD",
      date: "Jan 2026 - Present",
      points: [
        "Launched a high-throughput privacy library across 5+ distributed storage systems handling 1M+ QPS, using OS-level optimizations to reduce lock contention and improve p99.9 latency by 5%.",
        "Reduced API migration timelines from 3 months to 2 weeks by automating 90% of migration work with a customizable AI agent toolset productionizing frontier workflows like autoresearch and llm-wiki.",
        "Drove AI adoption across a 150+ engineer organization by leading 3 presentations and writing 5 agentic integration playbooks used 200+ times.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Google",
      icon: goog,
      iconBg: "#E6DEDD",
      date: "Jun 2025 - Sept 2025",
      points: [
        "Engineered a privacy standards chatbot that scaled across 80+ systems and 1,000+ employees, reducing onboarding and support time from days to seconds.",
        "Automated reliability and maintenance with monitoring, auto-updates, and logging, eliminating manual upkeep while preserving continuous accuracy.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Deloitte",
      icon: del,
      iconBg: "#383E56",
      date: "Jun 2024 - Aug 2024",
      points:[
        "Built an AI tool with Python to automate client data parsing into spreadsheets and email workflows, used by 1,000+ employees.",
        "Presented a proof of concept for migrating a 16M-user product from on-prem to AWS, projected to reduce latency by 40% with edge compute and cut TCO by 12%.",
      ]
    },
    {
      title: "Undergraduate ML Researcher",
      company_name: "UC Davis Center for Mind and Brain",
      icon: cmb,
      iconBg: "#383E56",
      date: "Jan 2024 - Aug 2024",
      points: [
        "Conducted research using 150+ fMRI brain scans to optimize CNN design for music-stimulated brain modeling.",
        "Architected a generative music model using transformers and a CNN genre classifier trained on 2,000+ songs.",
      ]
    },
    {
      title: "Projects Lead & Software Developer",
      company_name: "CodeLab",
      icon: cl,
      iconBg: "#E6DEDD",
      date: "Oct 2023 - Dec 2025",
      points: [
        "Secured partnerships with Reddit, Goodnotes, and Render, bringing in $30k to build software experiences for products reaching 100M+ users.",
        "Created a proof of concept that helped Goodnotes evaluate 10+ AI and LLM features and de-risk future product investments.",
        "Built a live MLB scoreboard app for Reddit that generated 1M+ weekly impressions and supported its MLB partnership.",
      ],
    }, 
    {
      title: "Software Engineering Director",
      company_name: "Davis Quant Collective",
      icon: dqc,
      iconBg: "#E6DEDD",
      date: "Jul 2023 - Dec 2023",
      points: [
        "Incorporated research from 5 articles into a stock portfolio analyzer, improving risk prediction accuracy by 15%.",
        "Engineered a Python trading bot that achieved a 5% average annual ROI on historical and live markets.",
      ],     
    },
    {
      title: "Software Engineer Intern",
      company_name: "Brain Racers (startup)",
      icon: na,
      iconBg: "#383E56",
      date: "Jul 2023 - Sept 2023",
      points: [
        "Aggregated data from five legacy SQL databases into a unified system, reducing database queries by 80% and improving API response times by 25%.",
        "Built a unified backend data layer that simplified downstream product development and supported faster feature delivery.",
      ]
    },
    {
      title: "Data Analyst Intern",
      company_name: "DigitalMain (startup)",
      icon: na,
      iconBg: "#E6DEDD",
      date: "Jun 2022 - Aug 2022",
      points: [
        "Created an ETL pipeline that automated extraction and machine learning analysis of 15,000+ data points from 6 cybersecurity forums, increasing throughput by 4x.",
      ],
    },
    {
      title: "Competitive Programmer",
      company_name: "USACO Gold",
      icon: na,
      iconBg: "#383E56",
      date: "High School - Present",
      points: [
        "Reached USACO Gold through contest problem solving focused on algorithms, data structures, and performance-oriented reasoning.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Virtual Tour Guide",
      description:
        "Built an AI-powered mobile experience that lets users explore landmarks with a real-time tour guide in their ear, blending location-aware product thinking with LLM-driven narration.",
      tags: [
        {
          name: "swift",
          color: "blue-text-gradient",
        },
        {
          name: "openai",
          color: "green-text-gradient",
        },
        {
          name: "product",
          color: "pink-text-gradient",
        },
      ],
      image: na,
      source_code_link: "https://github.com/kaushal2m2/virtualtourguide",
    },
    {
      name: "Tomato Classifier",
      description:
        "Built a TensorFlow and Keras image classifier that identifies tomato plant diseases across 10 classes from a 16,000+ image dataset and deployed it with Flask.",
      tags: [
        {
          name: "tensorflow",
          color: "blue-text-gradient",
        },
        {
          name: "keras",
          color: "green-text-gradient",
        },
        {
          name: "flask",
          color: "pink-text-gradient",
        },
      ],
      image: tc,
      source_code_link: "https://github.com/kaushal2m2/tomatoclassify",
    },
    {
      name: "Neural Networks",
      description:
        "Implemented neural networks from scratch in Python with NumPy, including feedforward and convolutional architectures, to better understand training dynamics, initialization strategies, and loss functions.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "neuralnetworks",
          color: "green-text-gradient",
        },
        {
          name: "numpy",
          color: "pink-text-gradient",
        },
      ],
      image: nn,
      source_code_link: "https://github.com/kaushal2m2/neuralnetwork",
    },
    {
      name: "Portfolio",
      description:
        "Built this portfolio with React, Three.js, and Tailwind CSS, then deployed it on AWS using S3, Route 53, CloudFront, and a CI/CD pipeline.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "aws",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: logo,
      source_code_link: "https://github.com/kaushal2m2/portfolio",
    },
  ];
  
  export { services, technologies, skillGroups, experiences, projects };