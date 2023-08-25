import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    ngo,
    iws,
    shopify,
    carrent,
    tripguide,
    threejs,
    assess,
    content,
    bewakoof,
    masai
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience"
    },
    {
      id: "skills",
      title: "Skills"
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    }
  ];
  
  const services = [
    {
      title: "MERN Developer",
      icon: web,
    },
    {
      title: "Prompt Engineer",
      icon: mobile,
    },
    {
      title: "Instructor",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Co-Founder",
      company_name: "Donate A Smile Foundation",
      icon: ngo,
      iconBg: "#ffffff",
      date: "December 2016 - Present",
      points: [
        "Student Police Cadets: Empowering student-police connections for community engagement.",
        "Shivpuri City Library: Efficient management of a thriving public library.",
        "Cloth Donation Drive: Organizing annual winter camps for clothing donations.",
        "Shivpuri Youth Forum: Collaborative solutions for city issues and community engagement.",
      ],
    },
    {
      title: "Teaching",
      company_name: "Innovative World School",
      icon: iws,
      iconBg: "#ffffff",
      date: "April 2017 - Mar 2019",
      points: [
        "Educated aspiring students in school and private institutions for over 6 years.",
        "Played a vital role in managing school activities, ensuring smooth operations and fostering a conducive learning environment.",
        "Introduced new initiatives that significantly improved user experience and learning outcomes",
        "Led and contributed to community development programs by leveraging web technology, creating impactful digital solutions for the school.",
      ],
    },
    {
      title: "Instructional Associate",
      company_name: "Masai School",
      icon: masai,
      iconBg: "#ffffff",
      date: "March 2022 - October 2022",
      points: [
        "Spearheaded internal projects, including an online coding platform.",
        "Delivered React and advanced JavaScript classes, addressing one-on-one and group doubts effectively.",
        "Managed a student cohort of 2000+, mentoring 5 team members and overseeing data handling.",
        "Led a team responsible for handling diverse responsibilities.",
      ],
    },
    {
      title: "Curriculum and Pedagogy Instructor",
      company_name: "Masai School",
      icon: masai,
      iconBg: "#ffffff",
      date: "October 2022 - Present",
      points: [
        "Initiated complete app development from scratch, contributing significantly to the Generative AI team's projects.",
        "Excelled as a prompt engineer and contributed to the placement of over 1000 students in the outcomes team.",
        "Directed the Generative AI team, accelerating project development in various tech stacks.",
        "Proficient in AI, worked extensively on embeddings, fine-tuning, and langchain.",
        "Conducted impactful one-on-one and group doubt-solving sessions, alongside process innovation.", 
        "Pioneered data analysis projects, contributing to insightful conclusions and actionable recommendations."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Bewakoof Clone",
      description:
        "Collaboratively replicated Bewakoof.com, employing HTML, CSS, JS, NodeJS, MongoDB, and Express. Project faithfully mirrors the bewakoof site's functionalities",
      features : ["Developed dynamic product pages, allowing users to view details and select various categories (men, women, accessories).", "Implemented user authentication with social sign-in and sign-up pages.", "Utilized MongoDB for efficient data management, storing information related to products, orders, and user profiles.", "Developed a functional shopping cart where users can add, remove, and modify items before proceeding to the payment stage.", "Implemented smooth transitions, animations, and intuitive UI elements to improve the overall user experience and engagement.", "Implemented robust error handling and input validation mechanisms enhancing website's reliability"],
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
        {
          name: "NodeJS",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
        {
          name: "Express",
          color: "blue-text-gradient",
        },
      ],
      image: bewakoof,
      source_code_link: "https://github.com/KalyaniSahu879/bewakoofClone",
    },
    {
      name: "Assess",
      description:
        "Assess app is an internal Masai app, which allows multiple students to get access to their assessment links and view their AI generated feedback",
      features : ["Store and organize multiple users' links, ensuring data privacy by allowing users to access only their own set of links.", "Empower users to easily filter and view their specific links, enhancing efficiency and relevance in link management.", "Provide a comprehensive feedback system where users can explore submitted videos, transcripts, and AI-generated ChatGPT feedback for each question.", " Implement secure authentication and authorization mechanisms, safeguarding user data and ensuring that users can only access their own information.", "Enable seamless interaction with external APIs, supporting Create, Read, Update, and Delete (CRUD) operations to effectively manage and modify user data."],
      tags: [
        {
          name: "NextJs",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "NodeJs",
          color: "pink-text-gradient",
        },
        {
          name: "MongoDB",
          color: "blue-text-gradient",
        },
        {
          name: "Express",
          color: "green-text-gradient",
        },
        {
          name: "Generative AI",
          color: "pink-text-gradient",
        },
      ],
      image: assess,
      source_code_link: "https://github.com/",
    },
    {
      name: "AI Content Generation",
      description:
        "The AI Content Generation is a full-stack web application. The app allows users to generate Shayari, Jokes, Stories, and Quotes based on keywords provided by the user.",
        features : [
          "Crafted a full-stack web app using React.js and Express.js that dynamically generates Shayari, Jokes, Stories, and Quotes based on user-provided keywords, showcasing innovative content creation.", "Designed an elegant frontend user interface using Chakra UI, offering a seamless and visually pleasing experience for users to input keywords and access the generated content.", "Implemented backend integration with the OpenAI API, leveraging cutting-edge AI technology to generate diverse and engaging content, enhancing user interaction.", " Developed the app with Node.js and organized the codebase to maintain both frontend and backend components, streamlining development and future enhancements."
        ],
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Generative AI",
          color: "green-text-gradient",
        },
        {
          name: "Chakra UI",
          color: "pink-text-gradient",
        },
        {
          name: "OpenAI",
          color: "blue-text-gradient",
        },
        {
          name: "Express",
          color: "green-text-gradient",
        },
        {
          name: "NodeJS",
          color: "pink-text-gradient",
        }
      ],
      image: content,
      source_code_link: "https://github.com/mohitsvp/AI-Shayari-app",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };