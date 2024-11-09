import {
    img1,
    img2,
    img3,
    img4,
    javascript,
    cpp,
    java,
    python,
    swift,
    reactjs,
    nodejs,
    mongodb,
    git,
    vtg,
    tc,
    nn,
    br,
    dqc,
    dg,
    cl,
    cmb,
    del,
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
      title: "Machine Learning Enthusiast",
      icon: img1,
    },
    {
      title: "Cloud Engineer",
      icon: img2,
    },
    {
      title: "Algorithm Engineer",
      icon: img3,
    },
    {
      title: "Full Stack Developer",
      icon: img4,
    },
  ];
  
  const technologies = [
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
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
      name: "AWS",
      icon: aws,
    },
    {
      name: "Swift",
      icon: swift,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Flask",
      icon: flask,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "ReactJS",
      icon: reactjs,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer Intern",
      company_name: "Deloitte",
      icon: del,
      iconBg: "#383E56",
      date: "Jun 2024 - Aug 2024",
      points:[
        "Built AI tool using Python to automate client data parsing into spreadsheet/email, utilized by 1000+ employees.",
        "Developed pipeline for employer/industry info on government benefits dashboard, allowing 8 benefits programs to be supported.",
        "Presented a PoC for on-prem to AWS migration for a 16M user product, projected to reduce latency by 40\% with edge compute and cut TCO by 12\%.",
      ]
    },
    {
      title: "Undergraduate Machine Learning Researcher",
      company_name: "UC Davis Center for Mind and Brain",
      icon: cmb,
      iconBg: "#383E56",
      date: "Jan 2024 - Aug 2024",
      points: [
        "Conducted research using 150+ fMRI brain scans to optimize CNN design for music-stimulated brain modeling.",
        "Developed a generative music model using transformers, trained on 2000+ songs.",
        "Improved genre classification accuracy by 15\% with CNN models built using Emergent software and Go.",
      ]
    },
    {
      title: "Sofware Developer",
      company_name: "UC Davis CodeLab",
      icon: cl,
      iconBg: "#E6DEDD",
      date: "Oct 2023 - Present",
      points: [
        "Built 10+ interactive components and consolidated 3 product iterations into a unified dashboard for BillionMinds.",
        "Aggregated data from 4 APIs into a MongoDB database, reducing data loading latency by 50\%.",
        "Managed a team for 16 weeks to build video summarizing software using TypeScript, Node.js and Google Gemini.",
      ],
    }, 
    {
      title: "Software Engineering Director",
      company_name: "Davis Quant Collective",
      icon: dqc,
      iconBg: "#E6DEDD",
      date: "Aug 2023 - Dec 2023",
      points: [
        "Incorporated research from 5 articles into stock portfolio analyzer, boosting risk prediction accuracy by 15\%.",
        "Developed a Python trading bot, achieving a 5\% average annual ROI on historical and live markets.",
      ],     
    },
    {
      title: "Software Engineer Intern",
      company_name: "Brain Racers (startup)",
      icon: br,
      iconBg: "#383E56",
      date: "Jul 2023 - Sept 2023",
      points: [
        "Aggregated data from five legacy SQL databases into a unified system, reducing database queries by 80% and improving API response times by 25%.",
        "Created 3 API endpoints integrated with 3 modular components, accelerating subsequent frontend tasks by 50%.",
      ],
    },
    {
      title: "Data Analyst Intern",
      company_name: "DigitalMain (startup)",
      icon: dg,
      iconBg: "#E6DEDD",
      date: "Jun 2022 - Aug 2022",
      points: [
        "Created ETL pipeline automating extraction and ML analysis of 15,000+ data points from 6 cybersecurity forums, increasing data throughput by 4x.",
      ]
    },
  ];
  
  const projects = [
    {
      name: "Virtual Tour Guide",
      description:
        "A virtual tour guide that harnesses AI to allow users to explore the world with an AI tour guide in their ear. Users can learn about the history of different places and landmarks wherever they are currently located.",
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
          name: "MERNstack",
          color: "pink-text-gradient",
        },
      ],
      image: vtg,
      source_code_link: "https://github.com/kaushal2m2/virtualtourguide",
    },
    {
      name: "Tomato Classifier",
      description:
        "Built a Sequential Tensorflow Keras model to classify images of tomato plants into 10 classes, 9 types of diseases or healthy. The model was trained on 16000+ images and currently achieves 93% accuracy, and the model continues to be changed. I deployed the model using Flask.",
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
        "Implemented a neural network from scratch in python using just numpy. I took a deep dive into the math and theory behind neural networks, building a basic feedforward network and a convolutional neural network, incorporating different initializations and activations and losses from research papers. See the readme for more.",
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
        "Built this website, hosted on AWS using S3, Route53, and Cloudfront for caching, and a ci/cd pipeline with CodePipeline. Built using React and ThreeJS with TailwindCSS.",
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
  
  export { services, technologies, experiences, projects };