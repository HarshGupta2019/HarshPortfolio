import { Certificate, EducationItem, Project, Skill, SocialLink, StatItem } from '../types';

import profileImg from '../assets/images/harsh_profile_1785068712566.jpg.jpeg';
import renthubImg from '../assets/images/renthub_app_1785068732301.jpg';
import skyscopeImg from '../assets/images/skyscope_app_1785068746666.jpg';

export const PERSONAL_INFO = {
  name: "Harsh Gupta",
  titles: [
    "Full Stack Java Developer",
    "Spring Boot Developer",
    "Backend Developer",
    "Java Programmer",
    "Problem Solver",
    "Software Engineer"
  ],
  email: "121119harshgupta@gmail.com",
  phone: "+91 9392599135",
  location: "Hyderabad, India",
  profileImage: profileImg,
  aboutBio: "A tech enthusiast and quick learner aiming to bring clean code and creative solutions to life. Passionate about architecting scalable microservices with Spring Boot, robust databases with MySQL, and intuitive web interfaces using React. Looking to join a high-performing engineering team where I can grow my full-stack web development expertise and contribute meaningfully from day one.",
  resumeUrl: "#resume",
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/HarshGupta2019",
    username: "@HarshGupta2019",
    icon: "FaGithub"
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/harsh-gupta-073161353",
    username: "@Harsh Gupta",
    icon: "FaLinkedin"
  },
  {
    platform: "Email",
    url: "mailto:121119harshgupta@gmail.com",
    username: "121119harshgupta@gmail.com",
    icon: "FaEnvelope"
  },
  {
    platform: "Phone",
    url: "tel:+919392599135",
    username: "+91 9392599135",
    icon: "FaPhone"
  }
];

export const STATS: StatItem[] = [
  { label: "Completed Projects", value: 10, suffix: "+", description: "Full-Stack & Web Apps" },
  { label: "Certificates Earned", value: 5, suffix: "+", description: "Verified Credentials" },
  { label: "Core Technologies", value: 15, suffix: "+", description: "Java, React, SQL & Tools" },
  { label: "GitHub Contributions", value: 350, suffix: "+", description: "Commits & Pull Requests" },
  { label: "Coding Hours", value: 1000, suffix: "+", description: "Focused Engineering" }
];

export const SKILLS: Skill[] = [
  // Backend & Core
  { name: "Java", category: "Backend", level: 90, iconName: "FaJava", description: "Object-oriented programming, Collections framework, Streams, Multithreading", color: "#F89820" },
  { name: "Spring Boot", category: "Backend", level: 88, iconName: "SiSpringboot", description: "Microservices, Spring MVC, Spring Data JPA, Auto-configuration", color: "#6DB33F" },
  { name: "Spring Security", category: "Backend", level: 82, iconName: "SiSpringsecurity", description: "Authentication, Authorization, Filters, Role-based Access Control", color: "#6DB33F" },
  { name: "REST APIs", category: "Backend", level: 88, iconName: "TbApi", description: "API Design, JSON payloads, HTTP Verbs, Exception Handling", color: "#06B6D4" },
  { name: "JWT", category: "Backend", level: 85, iconName: "SiJsonwebtokens", description: "Stateless security, Token generation, validation & claims", color: "#8B5CF6" },
  { name: "Hibernate", category: "Backend", level: 80, iconName: "SiHibernate", description: "ORM mapping, HQL queries, Entity relationships & caching", color: "#59666C" },
  { name: "Basics of DSA", category: "Backend", level: 78, iconName: "FaCode", description: "Data structures, Arrays, Linked lists, Trees, Searching & Sorting", color: "#6366F1" },

  // Frontend
  { name: "React.js", category: "Frontend", level: 85, iconName: "FaReact", description: "Component state, Custom Hooks, Context API, Virtual DOM", color: "#61DAFB" },
  { name: "JavaScript (ES6+)", category: "Frontend", level: 85, iconName: "FaJs", description: "Async/Await, Promises, Closures, DOM manipulation", color: "#F7DF1E" },
  { name: "HTML5", category: "Frontend", level: 95, iconName: "FaHtml5", description: "Semantic markup, Accessibility, DOM structure", color: "#E34F26" },
  { name: "CSS3 / Tailwind", category: "Frontend", level: 90, iconName: "SiTailwindcss", description: "Flexbox, Grid, Animations, Responsive layouts, Glassmorphism", color: "#38BDF8" },
  { name: "Bootstrap", category: "Frontend", level: 82, iconName: "FaBootstrap", description: "Grid system, Utility classes, Pre-styled UI components", color: "#7952B3" },

  // Database
  { name: "MySQL", category: "Database", level: 86, iconName: "SiMysql", description: "Relational database design, Complex JOINs, Indexing, Transactions", color: "#4479A1" },
  { name: "DBMS", category: "Database", level: 84, iconName: "FaDatabase", description: "Normalization, ACID properties, Entity-Relationship modeling", color: "#06B6D4" },

  // Tools & Analytics
  { name: "Git & GitHub", category: "Tools", level: 88, iconName: "FaGitAlt", description: "Version control, Branching strategies, PR reviews, Merge conflict resolution", color: "#F05032" },
  { name: "VS Code", category: "Tools", level: 92, iconName: "TbBrandVscode", description: "Extensions, Debugging, Snippets, Integrated Terminal", color: "#007ACC" },
  { name: "Postman", category: "Tools", level: 88, iconName: "SiPostman", description: "API Testing, Automated collection runners, Mocking & Env variables", color: "#FF6C37" },
  { name: "Figma", category: "Tools", level: 75, iconName: "FaFigma", description: "UI/UX wireframing, Prototyping, Component design systems", color: "#F24E1E" },
  { name: "Data Analytics & Excel", category: "Tools", level: 80, iconName: "FaChartBar", description: "Data visualization, Pivot tables, Formulas & insights extraction", color: "#107C41" }
];

export const EDUCATION: EducationItem[] = [
  {
    id: "edu-1",
    degree: "Computer Engineering (B.Tech)",
    institution: "St. Mary's Integrated Campus",
    location: "Hyderabad, Telangana",
    period: "2023 - 2027 (Expected)",
    score: "Graduating: [2027]",
    scoreType: "Graduating",
    details: [
      "Specializing in Software Engineering, Database Management Systems, and Web Technologies.",
      "Building full-stack Java Spring Boot and React applications for academic & research projects.",
      "Active participant in technical symposiums, hackathons, and developer coding challenges."
    ],
    icon: "FaGraduationCap"
  },
  {
    id: "edu-2",
    degree: "XII - Intermediate (MPC)",
    institution: "Chaitanya Junior College",
    location: "Hyderabad, Telangana",
    period: "2021 - 2023",
    score: "9.7 CGPA",
    scoreType: "CGPA",
    details: [
      "Graduated with Distinction in Mathematics, Physics, and Chemistry.",
      "Demonstrated strong problem-solving and analytical aptitude in mathematical logic."
    ],
    icon: "FaSchool"
  },
  {
    id: "edu-3",
    degree: "X - Secondary School Certificate",
    institution: "Kakatiya Techno School",
    location: "Hyderabad, Telangana",
    period: "2020 - 2021",
    score: "10.0 CGPA",
    scoreType: "CGPA",
    details: [
      "Achieved Perfect 10.0 CGPA score in All India Secondary School Examinations.",
      "Recognized for top academic performance and leadership in extracurricular activities."
    ],
    icon: "FaAward"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "project-renthub",
    title: "RentHub",
    tagline: "Full-Stack Rental Marketplace",
    category: "Full Stack Java",
    description: "Developed a full-stack rental marketplace that enables users to rent and list products through a secure, high-performance platform. Features JWT authentication, booking engine, search, and MySQL persistence.",
    longDescription: "RentHub is a modern, end-to-end full stack rental platform designed to streamline gear, furniture, and item rentals. Built with a React.js single-page application frontend and a Spring Boot backend API layer, it incorporates enterprise-grade security via Spring Security and JWT. Users can browse products with real-time filtering, create rental bookings with date ranges, save item favorites, and manage listings through an integrated admin control panel.",
    techStack: [
      "React.js",
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "REST APIs",
      "MySQL",
      "Maven",
      "Git"
    ],
    features: [
      "JWT-based Authentication & Role-Based Access Control (User/Admin)",
      "Interactive Product Listing, Category Filtering & Live Search",
      "Seamless Rental Booking System with Date Calculation & Pricing Engine",
      "User Profile Dashboard & Wishlist / Favorites Manager",
      "MySQL Database Relational Schema with Spring Data JPA Hibernate",
      "Clean Architecture with DTO Mappers & Global Exception Handling"
    ],
    architecture: [
      "Client UI: React.js + Tailwind CSS with responsive glassmorphism state managers",
      "API Layer: RESTful Spring Boot Controllers handling JSON DTO contracts",
      "Security Layer: Custom JWT Authentication Filter + BCrypt Password Encoder",
      "Service Layer: Business logic for rental validation, availability checks, & pricing",
      "Database Layer: MySQL 8 with Hibernate ORM relational entity mapping"
    ],
    image: renthubImg,
    githubUrl: "https://github.com/Harshgupta1211/RentHub",
    liveUrl: "#renthub-demo",
    featured: true,
    demoType: "renthub"
  },
  {
    id: "project-skyscope",
    title: "SkyScope - WeatherNow",
    tagline: "Real-Time Interactive Weather Platform",
    category: "Web Application",
    description: "Developed a responsive web app providing real-time weather metrics using Geolocation API and OpenWeatherMap API with custom UI widgets, city search, and atmospheric gauges.",
    longDescription: "SkyScope WeatherNow delivers instant meteorological data with an ultra-sleek glassmorphic dashboard interface. It automatically detects user coordinates via browser Geolocation API or allows instant global city lookup. Integrated with OpenWeatherMap REST endpoints, it visualizes temperature, humidity percentages, wind velocity, atmospheric pressure, sunrise/sunset times, and dynamic weather condition graphics.",
    techStack: [
      "React",
      "JavaScript (ES6+)",
      "OpenWeatherMap API",
      "Geolocation API",
      "HTML5 / CSS3",
      "Tailwind CSS",
      "Lucide Icons"
    ],
    features: [
      "Automatic User Geolocation Detection with one-click refresh",
      "Global City Search with instant debounce auto-suggestions",
      "Real-time Temperature, Humidity, Wind Speed, & Pressure Gauges",
      "Dynamic weather theme transitions (Sun, Rain, Snow, Clouds, Thunder)",
      "Interactive 5-Day forecast breakdown cards with hourly trends",
      "Responsive Glassmorphic UI designed for mobile, tablet, and desktop"
    ],
    architecture: [
      "Frontend UI: React functional components with custom hooks for weather fetching",
      "API Integration: Fetch API wrappers querying OpenWeatherMap 2.5 Current & OneCall endpoints",
      "Browser Capabilities: Navigator Geolocation API integration with error handling fallback"
    ],
    image: skyscopeImg,
    githubUrl: "https://github.com/Harshgupta1211/SkyScope-WeatherNow",
    liveUrl: "#skyscope-demo",
    featured: true,
    demoType: "skyscope"
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: "cert-1",
    title: "GenAI Powered Data Analytics",
    issuer: "Tata Group",
    date: "2024",
    skills: ["GenAI", "Prompt Engineering", "Data Analytics", "Insights"],
    badgeColor: "from-blue-500 to-indigo-600",
    iconName: "SiTata"
  },
  {
    id: "cert-2",
    title: "Spring Boot Development",
    issuer: "Infosys Springboard",
    date: "2026",
    skills: ["Spring Boot", "RESTful Web Services", "Dependency Injection", "Spring Data"],
    credentialUrl: "https://drive.google.com/file/d/1IfgeLcUXkI9Cp7uezSJmW7uq5Y3Feku_/view?usp=drivesdk",
    badgeColor: "from-emerald-500 to-teal-600",
    iconName: "SiInfosys"
  },
  {
    id: "cert-3",
    title: "React.js Certification",
    issuer: "Unstop",
    date: "2024",
    skills: ["React Hooks", "State Management", "JSX", "Component Architecture"],
    badgeColor: "from-cyan-500 to-blue-600",
    iconName: "FaReact"
  },
  {
    id: "cert-4",
    title: "Data Entry & Analytics Training",
    issuer: "Flipkart",
    date: "2023",
    skills: ["Data Verification", "MS Excel", "Workflow Automation", "Analytics"],
    badgeColor: "from-amber-500 to-orange-600",
    iconName: "SiFlipkart"
  },
  {
    id: "cert-5",
    title: "National Tech Challenges & Hackathons",
    issuer: "Various Institutions",
    date: "2023 - 2024",
    skills: ["Competitive Coding", "Problem Solving", "Rapid Prototyping", "Team Work"],
    badgeColor: "from-purple-500 to-pink-600",
    iconName: "FaTrophy"
  }
];
