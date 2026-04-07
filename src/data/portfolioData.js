export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const resumePath = "/Miruthul_Kumar_Resume.pdf";

export const hero = {
  name: "Miruthul Kumar M",
  headline: "Full Stack Developer | ECE Undergraduate",
  intro:
    "I build clean full stack and IoT projects with focus on practical engineering and real-world usability.",
  image: "/profile.jpg",
  badges: ["MERN", "Java", "IoT"],
};

export const about = {
  title: "About Me",
  paragraphs: [],
  highlights: [
    { label: "B.E. ECE Student", value: "ECE" },
    { label: "Web Development Intern", value: "Internship" },
    { label: "Full Stack & IoT Projects", value: "Builder" },
  ],
  internship: {
    role: "Web Development Intern – Naavaladi Technology Solutions, Karur",
    description:
      "Gained hands-on exposure to front-end web development workflows and project structuring. Worked with HTML, CSS, and JavaScript to build and improve responsive web interfaces, while strengthening practical understanding of UI implementation and development tools.",
  },
};

export const skillCategories = [
  {
    title: "Programming",
    iconKey: "code",
    skills: ["Java", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Web Development",
    iconKey: "web",
    skills: ["MERN Stack Fundamentals", "React.js", "Node.js", "Express.js"],
  },
  { title: "Databases", iconKey: "database", skills: ["MongoDB", "SQL"] },
  {
    title: "Core Concepts",
    iconKey: "brain",
    skills: ["OOP Basics", "Problem Solving", "Debugging"],
  },
  {
    title: "Embedded & IoT",
    iconKey: "chip",
    skills: ["Arduino", "ESP32", "Sensor Integration", "Relay Control"],
  },
  {
    title: "Tools & Platforms",
    iconKey: "tool",
    skills: ["Git", "GitHub", "Visual Studio Code", "ThingSpeak", "Blynk"],
  },
  {
    title: "Systems & Hardware",
    iconKey: "system",
    skills: [
      "Windows",
      "macOS",
      "PC Building",
      "Hardware Troubleshooting",
      "Basic Circuit Prototyping",
    ],
  },
];

export const projects = [
  {
    title: "Department Library Management System",
    type: "Full Stack Web Application",
    description:
      "Developing a web-based library management system for a department using MERN stack to replace manual record-keeping and improve resource accessibility.",
    keyFeatures: [
      "Role-based access for students, faculty, and librarian",
      "Secure authentication",
      "Book issue, return, and reservation management",
      "Real-time availability tracking",
      "Advanced search and filtering by title, author, category, and availability",
      "Dedicated Japanese language section for JLPT N5, N4, and N3 resources",
    ],
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    github: "https://github.com/Miruthulkumar/Ece-Library-Management",
    viewLink: "https://github.com/Miruthulkumar/Ece-Library-Management",
  },
  {
    title: "Online Exam Portal",
    type: "Web Application",
    description:
      "Developed a web-based examination platform to create, organize, and manage online tests for academic use.",
    keyFeatures: [
      "Exam handling modules",
      "Content organization",
      "Structured navigation",
      "Clean and usable interface for academic workflows",
    ],
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Miruthulkumar",
    viewLink: "https://github.com/Miruthulkumar",
  },
  {
    title: "Smart Plant Monitoring System",
    type: "IoT / Embedded System Project",
    description:
      "Built an IoT-based automated plant care system using ESP32 for real-time environmental monitoring and automated watering.",
    keyFeatures: [
      "Soil moisture monitoring",
      "Temperature sensing",
      "Light intensity sensing",
      "Relay-controlled water pump automation",
      "OLED live display",
      "ThingSpeak cloud-based remote monitoring",
    ],
    techStack: [
      "ESP32",
      "Arduino IDE",
      "Sensors",
      "Relay Module",
      "OLED",
      "ThingSpeak",
    ],
    github: "https://github.com/Miruthulkumar",
    viewLink: "https://github.com/Miruthulkumar",
  },
  {
    title: "Medicine Inventory System",
    type: "Front-End Web Application",
    description:
      "Developed a front-end application to improve medicine inventory tracking and stock visibility in a supply chain workflow as part of Smart India Hackathon (SIH) 2024.",
    keyFeatures: [
      "Inventory visibility",
      "Medicine record management",
      "Structured UI for tracking and workflow support",
    ],
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Miruthulkumar",
    viewLink: "https://github.com/Miruthulkumar",
  },
];

export const certifications = [
  "JLPT N4 – Japanese Language Proficiency Test",
  "JLPT N5 – Japanese Language Proficiency Test",
  "NPTEL – Cloud Computing",
  "NPTEL – Design & Implementation of Human-Computer Interfaces",
];

export const achievements = [
  "1st Prize Winner – Nuero Quest: Full Stack Development, intra-college hackathon conducted by IBM Skills Student Club (January 2026)",
  "4th Prize Winner – National Level Hackathon (CICADA), organized by KPR Institute of Engineering and Technology",
];

export const contact = {
  location: "Salem, Tamil Nadu, India",
  email: "saimiruthul@gmail.com",
  phone: "+91 9150715137",
  languages: ["Tamil", "English", "Japanese"],
  socials: {
    github: "https://github.com/Miruthulkumar",
    linkedin: "https://www.linkedin.com/in/",
    email: "mailto:saimiruthul@gmail.com",
  },
};

export const footer = {
  name: "Miruthul Kumar M",
  tagline: "Aspiring Full Stack Developer | ECE Undergraduate | IoT Enthusiast",
};
