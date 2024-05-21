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
      title: "Incoming Solutions Engineer Summer Scholar",
      company_name: "Deloitte",
      icon: del,
      iconBg: "#383E56",
      date: "June 2024 - August 2024",
      points:[]
    },
    {
      title: "Undergraduate Machine Learning Researcher",
      company_name: "UC Davis Center for Mind and Brain",
      icon: cmb,
      iconBg: "#383E56",
      date: "May 2024 - Present",
      points: [
        "Performing research under Dr. Petr Janata on the relationship between music on the brain, utilizing fMRI brain data from the UC Davis Mind and Brain Center to explore optimizing the design of neural networks to more closely resemble 'the brain', with 150+ real subjects brain data reactions to music over years.",
        "Implementing a transformer architecture centered around attention and variational auto encoders with PyTorch to create a generative music model, leveraging 1500-2000 songs with lyrics to train the model."
      ]
    },
    {
      title: "Sofware Developer",
      company_name: "UC Davis CodeLab",
      icon: cl,
      iconBg: "#E6DEDD",
      date: "Oct 2023 - Present",
      points: [
        "Worked on the Client team, consulting for the company BillionMinds, and built two dashboards using Next.ts and TailwindCSS for BillionMinds and its clients to manage and view their company’s data.",
        "Aggregated data from 4 APIs into a MongoDB database with AWS Lambda Serverless functions and queried Mongo from the frontend to populate the dashboard and charts.",
        "Developed 3 low fidelity iterations in Next.ts from the ground up, and worked continuously with designers and BillionMinds to combine and advance it to a single, functioning, high fidelity product.",
      ],
    }, 
    {
      title: "Software Engineer Intern",
      company_name: "Brain Racers (startup)",
      icon: br,
      iconBg: "#383E56",
      date: "July 2023 - September 2023",
      points: [
        "Updated structure of MySQL & Redis database framework containing 10000+ data points for 25% quicker access of user data queried with PHP Laravel.",
        "Created 3 REST API services with 10+ additional endpoints to retrieve and parse necessary info from the Redis database, provided docs for the API’s functionality to streamline frontend development by 3x, and integrated them into 4 existing React TypeScript components on the dashboard to use this real time data.",
        "Worked with the design team to design and implement 5+ reusable new elements in ReactTS and CSS, and added them to the existing product, including a line graph showing user progress."
      ],
    },
    {
      title: "SWE Director",
      company_name: "Davis Quant Collective",
      icon: dqc,
      iconBg: "#E6DEDD",
      date: "August 2023 - Dec 2023",
      points: [
        "Analyzed and incorporated findings from 5+ research papers into our ML Model Architecture for a stock portfolio manager and risk assessor project, streamlining project progress by 25%.",
        "Assembled the model in Python using an architecture of multiple HuggingFace models for initial processing and GPU-trained comprehensive PyTorch neural networks, and serving it using Django for easy queries from the frontend Next.js website with the user’s positions and analytics.",
        "Used TailwindCSS and ReactJS to help implement the club website with 2 other directors, delivering the website 1 week ahead of schedule."   
      ],     
    },
    {
      title: "Data Analyst Intern",
      company_name: "DigitalMain (startup)",
      icon: dg,
      iconBg: "#E6DEDD",
      date: "June 2022 - August 2022",
      points: [
        "Wrote 10 robust Python Scripts using Selenium Webdriver and BeautifulSoup to conduct in-depth analysis of 6 cybersecurity forums, leveraging 15,000+ scraped data points to identify 100+ keywords, trends, and FAQs to optimize data handling processes by 7x.",
        "Collaborated closely with DigitalMain's product manager to devise a comprehensive project blueprint, integrating machine learning models for efficient data organization.",
      ],
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
        "Built this website for myself as a portfolio, hosted on AWS using S3, Route53, and Cloudfront for caching, and a ci/cd pipeline with CodePipeline. Built using React and ThreeJS with TailwindCSS.",
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