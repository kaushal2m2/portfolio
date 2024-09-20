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
      date: "June 2024 - August 2024",
      points:[
        "Consulted for a large-size company with 16M monthly users, assisting in 3+ client proposals and maintaining project documentation while guiding the transition to a cloud-native approach.",
        "Architected comprehensive cloud solutions using 5 AWS services, including API Gateway and Lambda functions, resulting in an estimated 40% lower latency, and resource optimization leading to a 25% reduction in operating costs.",
        "Participated in a GenAI initiative, developing a proof of concept for an AI-powered internal tool utilizing Python, OpenAI, and Claude AI that accelerated company processes by an estimated 50%.",
      ]
    },
    {
      title: "Undergraduate Machine Learning Researcher",
      company_name: "UC Davis Center for Mind and Brain",
      icon: cmb,
      iconBg: "#383E56",
      date: "May 2024 - Present",
      points: [
        "Performing research directly under Dr. Petr Janata, leading my project utilizing 150+ subjects’ fMRI brain data stimulated to music, to explore optimizing the design of deep CNNs to more closely resemble ’the brain’.",
        "Integrating research with Convolutional Neural Networks using the Emergent software in Go and Jack2 in Python, creating models with 15\% lower loss than existing genre classifiers.",
        "Implemented a transformer architecture centered around attention and variational autoencoders with PyTorch to create a generative music model, leveraging 2000+ songs with lyrics to train the model.",
      ]
    },
    {
      title: "Sofware Developer",
      company_name: "UC Davis CodeLab",
      icon: cl,
      iconBg: "#E6DEDD",
      date: "Oct 2023 - Present",
      points: [
        "Consulted for BillionMinds (startup), and developed 3 product iterations in Next.js and TailwindCSS, and worked continuously with designers and BillionMinds to advance it to a single product with 2 dashboards, with 10+ interactive components integrated with queried data.",
        "Reconstructed the data store structure by aggregating data from 4 external APIs into a single MongoDB database using AWS Lambda Serverless functions and a Kubernetes CronJob and built 5+ API endpoints to populate the dashboard, reducing data loading latency by 50\%."
      ],
    }, 
    {
      title: "Software Engineering Director",
      company_name: "Davis Quant Collective",
      icon: dqc,
      iconBg: "#E6DEDD",
      date: "August 2023 - Dec 2023",
      points: [
        "Incorporated findings from 5+ research papers into our ML Architecture for a stock portfolio manager, streamlining project progress by 25\%, and assembled the model with an architecture of 3+ HuggingFace models for preprocessing and GPU-trained PyTorch neural networks.",
        "Led a team of 6 to develop a Python trading bot, using scikit-learn and PyTorch to create the ML model, and integrated and cross-tested with the stock portfolio manager, reaching a 5\% average annual ROI on historical and present day markets.",
      ],     
    },
    {
      title: "Software Engineer Intern",
      company_name: "Brain Racers (startup)",
      icon: br,
      iconBg: "#383E56",
      date: "July 2023 - September 2023",
      points: [
        "Revamped structure of MySQL \& Redis database framework containing 10000+ data points for 25\% quicker access with 80\% less queries for required user data with PHP Laravel.",
        "Created 3 REST API services with 10+ additional endpoints, reducing real-time data retrieval latency by 50\%; documented APIs functionality to streamline frontend development by an estimated 3x.",
        "Worked with the design team to design and implement 5+ reusable new elements in React and CSS, and added them to the existing product, including a line graph showing user progress with the additional API endpoints.",
      ],
    },
    {
      title: "Data Analyst Intern",
      company_name: "DigitalMain (startup)",
      icon: dg,
      iconBg: "#E6DEDD",
      date: "June 2022 - August 2022",
      points: [
        "Wrote 10 robust Python scripts using Selenium Webdriver and BeautifulSoup to conduct in-depth analysis of 6 cybersecurity forums, leveraging 15,000+ scraped data points to identify 100+ keywords, trends, and FAQs to optimize data handling processes by 7x.",
        "Collaborated with product manager to devise a comprehensive project blueprint, integrating machine learning models for efficient data organization.",
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