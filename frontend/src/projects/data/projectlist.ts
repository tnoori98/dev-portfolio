import type { Project } from "../interfaces/Project";

export const projectlist: Project[] = [
  {
    title: "readme-universe",
    description: "Remix your README.md files into epic narratives",
    tech: ["TypeScript", "VS Code Extension", "OpenAI API"],
    github: "https://github.com/tnoori98/readme-universe",
    demo: "https://marketplace.visualstudio.com/items?itemName=readme-universe.readme-universe",
    image: "assets/readme.webp",
    details: "Built a developer tool using TypeScript and the OpenAI API that transforms README.md files into creative narratives (e.g., fantasy, horror, sci-fi)",
    category: "personal"
  },
  {
    title: "SimpleScheduler",
    description: "An comprehensive employee scheduling and time management application",
    tech: ["TypeScript", "Angular", "Express.js", "TypeORM"],
    github: "https://github.com/tnoori98",
    image: "/assets/simplescheduler.webp",
    details: "Developed a scheduling app using Angular (TypeScript) and Express.js, where employees can view shift plans and request vacation, sick leave, or work entries in a personal calendar.",
    category: "personal"
  },
  {
    title: "SimpleBookers",
    description: "An interactive map to pin favorite travel locations",
    tech: ["TypeScript", "NestJS", "React"],
    github: "https://github.com/tnoori98",
    image: "/assets/simplebooker.webp",
    details: "Built an interactive travel map using React (TypeScript) and NestJS, where agency employees can pin destinations and search for travel options based on tags like climate or time of year.",
    category: "personal"
  },
  {
    title: "Middle Earth Maps",
    description: "An interactive map of Gandalf and his fellowship",
    tech: ["React", "Java Spring Boot"],
    github: "https://github.com/tnoori98/middle-earth-maps",
    image: "/assets/the-one-map.webp",
    details: "Created an interactive map of Tolkien's world using Java Spring Boot and React (TypeScript), showing character journeys and quizzes like “Which LOTR character are you?”",
    category: "personal"
  },
  {
    title: "Hotel Access Control",
    description: "A secure card-based access control system for hotel room and facility entry",
    tech: [".NET 8.0", "Console Application"],
    image: "/assets/spotlight-bg.webp",
    details: "Implemented a TCP server using the strategy pattern to process MIFARE/DESFire card access requests via Oracle FIAS protocol. Handled key read/encode operations (e.g., room or spa access) using C# and .NET 8.0",
    category: "siemens"
  },
  {
    title: "Time Tracking System",
    description: "A terminal-based system for tracking employee project hours using RFID cards",
    tech: [".NET Blazor", "Console Application"],
    image: "/assets/spotlight-bg.webp",
    details: "Developed a terminal-based time tracking tool that recorded project work hours via RFID card scans. Users scanned in/out at terminals to log time against specific projects (e.g., 2 hours on Project ABC). Implemented backend logic using .NET and Blazor Server to handle authentication, time calculations, and data persistence.",
    category: "siemens"
  },
  {
    title: "Bank Austria RAID Monitor",
    description: "A lightweight RAID monitoring utility to detect hardware failures in real-time",
    tech: [".NET 8.0", "Console Application"],
    image: "/assets/spotlight-bg.webp",
    details: "Developed a lightweight diagnostic tool using .NET to monitor SSD/HDD RAID state and alert IT personnel of failures or inconsistencies.",
    category: "siemens"
  },
  {
    title: "WebEvidenz - Document Evidence Management System",
    description: "A document evidence management system for legal and financial case tracking",
    tech: [".NET", "React"],
    image: "/assets/spotlight-bg.webp",
    details: "Developed a full-stack application for the Federal Ministry of Finance (BMF) to manage and review document-based evidence and case data. Built with C# (.NET) on the backend and React on the frontend.",
    category: "brz"
  },
  {
    title: "PKT - Pension Management Platform",
    description: "An internal pension platform to manage civil servant retirement data and workflows",
    tech: ["ASP.NET MVC"],
    image: "/assets/spotlight-bg.webp",
    details: "Developed pension account management software for Austrian civil servants in cooperation with the Austrian Pension Insurance Institution (PVA). Used ASP.NET MVC to build secure, user-facing modules for managing contributions and statements.",
    category: "brz"
  },
  {
    title: "BRZ & BiOffice Add-Ins",
    description: "Microsoft Office add-ins to streamline document workflows and internal communication tools",
    tech: [".NET 4.8 WPF"],
    image: "/assets/spotlight-bg.webp",
    details: "Built Word, PowerPoint, and Outlook add-ins (WPF / .NET Framework 4.8) to automate document templates, sync contacts, and route internal communication. Extended similar functionality for the Ministry of Finance's internal tools (BiOffice).",
    category: "brz"
  },
  {
    title: "COFAG - Covid-19 Financing Platform",
    description: "A COVID-19 financial support platform for processing business aid applications securely",
    tech: ["ASP.NET MVC"],
    image: "/assets/spotlight-bg.webp",
    details: "Developed a secure ASP.NET MVC dashboard for Austria's Ministry of Finance to manage COVID19 funding inquiries from businesses. Enabled case tracking, validation, and approval of financial aid requests during the pandemic.",
    category: "brz"
  },
  {
    title: "Finanzprokuratur Hosting & DevOps",
    description: "DevOps support and system monitoring for Austria's legal case management infrastructure",
    tech: ["Grafana"],
    image: "/assets/spotlight-bg.webp",
    details: "Oversaw DevOps and hosting infrastructure for a legal case management system used by Austrian government jurists. Ensured deployment, monitoring, and system availability in coordination with external developers. Used Grafana for system monitoring and performance visualization.",
    category: "brz"
  },
  {
    title: "Digital MMPI-2 Test Platform",
    description: "A digital platform for conducting MMPI-2 psychological tests with accessibility features",
    tech: ["Java 7", ".NET WPF", "Kotlin"],
    image: "/assets/spotlight-bg.webp",
    details: "Digitalized the psychological MMPI-2 test for desktop and mobile using .NET (WPF) and Kotlin (Java 7), adding voice recognition and speech output. Integrated custom USB input (green/red buttons) for accessible, alternative input modes.",
    category: "academic"
  },
];