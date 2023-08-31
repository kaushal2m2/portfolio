import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    cpp,
    java,
    python,
    swift,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    vtg,
    br,
    dqc,
    dg,
    na,
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
      title: "Frontend Web Developer",
      icon: web,
    },
    {
      title: "Swift Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
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
      name: "Swift",
      icon: swift,
    },
    {
      name: "ReactJS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer Intern",
      company_name: "Brain Racers (startup)",
      icon: br,
      iconBg: "#383E56",
      date: "August 2023 - Present",
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
      date: "July 2023 - Present",
      points: [
        "Used Django and ReactJS to help implement the club website with 2 other directors, used prior React experience to deliver the website 1 week ahead of schedule.",
        "Working with 2 other directors to build a stock portfolio manager and risk assessor using Alpha Vantage API, implementing risk analysis libraries from Scipy and leveraging existing ML models with Scikit Learn.",
        "Leading a team of 6 aspiring SWE’s to develop a Python trading bot to be integrated and cross tested with the stock portfolio manager.",
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
        "Orchestrated team collaboration and version control through GitHub, facilitating centralized project management and ensuring seamless workflow.",
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
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "swift",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: vtg,
      source_code_link: "https://github.com/kaushal2m2/virtualtourguide",
    },
  ];
  
  export { services, technologies, experiences, projects };