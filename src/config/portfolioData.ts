import type { Portfolio, TagColors } from "../types/portfolio";

export const PORTFOLIO_INFO: Portfolio = {
  meta: {
    createdAt: new Date().toISOString(),
    locale: "en-US",
    url: "https://ruma13.github.io/Ruma-Akter-Portfolio/",
    pdf: "/Ruma_Akter_Resume.pdf",
  },
  personal: {
    name: "Ruma Akter",
    title: "Data Analyst",
    headline: "MySQL · Python · Power BI · ETL",
    avatar: [
      { url: "./pp1.jpeg", label: "" },
      { url: "./pp2.jpeg", label: "" },
    ],
    summary:
      "Computer Science and Engineering graduate with internship experience in Software Testing and Game Development. Passionate about Data Analytics, with hands-on skills in SQL, Python, Power BI, Excel, and MySQL. Currently focused on building a career by transforming data into meaningful business insights.",
    hero: {
      summary:
        "Turning data into actionable insights through SQL, Python, Power BI, and Excel. I build interactive dashboards, analyze datasets, and create data-driven solutions that support informed business decisions.",
    },
    contact: {
      email: "rumapiasi13@gmail.com",
      phone: "+880 1400331663",
      location: "Narayanganj, Bangladesh",
      website: "https://ruma13.github.io/Ruma-Akter-Portfolio/",
      socials: [
        {
          label: "LinkedIn",
          url: "https://www.linkedin.com/in/ruma-akter-326799396/",
          icon: "SiLinkedin",
        },
        {
          label: "GitHub",
          url: "https://github.com/Ruma13",
          icon: "SiGithub",
        },
        {
          label: "Kaggle",
          url: "https://www.kaggle.com/rumaaktertushi",
          icon: "SiKaggle",
          size: 32,
        },
      ],
    },
  },
  skills: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 85, icon: "SiPython", category: "Programming" },
        { name: "Java", level: 65, icon: "SiOpenjdk", category: "Programming" },
        { name: "JavaScript", level: 75, icon: "SiJavascript", category: "Programming" },
        { name: "TypeScript", level: 60, icon: "SiTypescript", category: "Programming" },
        { name: "C", level: 75, icon: "SiC", category: "Programming" },
        { name: "C++", level: 75, icon: "SiCplusplus", category: "Programming" },
        { name: "C#", level: 60, icon: "SiCsharp", category: "Programming" },
      ],
    },
    {
      title: "Data Analytics",
      skills: [
        { name: "Power BI", level: 90, icon: "SiPowerbi", category: "data" },
        { name: "Microsoft Excel", level: 90, icon: "SiMicrosoftexcel", category: "data" },
        { name: "Data Analysis", level: 88, icon: "SiTableau", category: "data" },
        { name: "Data Visualization", level: 88, icon: "SiPlotly", category: "data" },
        { name: "Data Cleaning", level: 85, icon: "SiPandas", category: "data" },
        { name: "ETL", level: 82, icon: "SiApache", category: "data" },
        { name: "Dashboard Development", level: 88, icon: "SiPowerbi", category: "data" },
      ],
    },
    {
      title: "Libraries",
      skills: [
        { name: "Pandas", level: 88, icon: "SiPandas", category: "Libraries" },
        { name: "NumPy", level: 82, icon: "SiNumpy", category: "Libraries" },
        { name: "Matplotlib", level: 75, icon: "SiPlotly", category: "Libraries" },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 70, icon: "SiReact", category: "Software" },
        { name: "TypeScript", level: 60, icon: "SiTypescript", category: "Software" },
        { name: "JavaScript", level: 75, icon: "SiJavascript", category: "Software" },
        { name: "HTML5", level: 90, icon: "SiHtml5", category: "Software" },
        { name: "CSS3", level: 88, icon: "SiCss3", category: "Software" },
        { name: "Tailwind CSS", level: 80, icon: "SiTailwindcss", category: "Software" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Python", level: 85, icon: "SiPython", category: "backend" },
        { name: "FastAPI", level: 70, icon: "SiFastapi", category: "backend" },
        { name: "Node.js", level: 65, icon: "SiNodedotjs", category: "backend" },
      ],
    },
    {
      title: "AI & ML",
      skills: [
        { name: "NumPy", level: 82, icon: "SiNumpy", category: "data" },
        { name: "Pandas", level: 88, icon: "SiPandas", category: "data" },
        { name: "Scikit-learn", level: 75, icon: "SiScikitlearn", category: "data" },
        { name: "TensorFlow", level: 70, icon: "SiTensorflow", category: "data" },
        { name: "PyTorch", level: 70, icon: "SiPytorch", category: "data" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "PostgreSQL", level: 75, icon: "SiPostgresql", category: "database" },
        { name: "MySQL", level: 80, icon: "SiMysql", category: "database" },
        { name: "MongoDB", level: 70, icon: "SiMongodb", category: "database" },
      ],
    },
    {
      title: "Software Testing (SQA)",
      skills: [
        { name: "Manual Testing", level: 90, icon: "SiTestinglibrary", category: "Software" },
        { name: "Test Case Design", level: 88, icon: "SiTestinglibrary", category: "Software" },
        { name: "Bug Reporting", level: 90, icon: "SiBugatti", category: "Software" },
        { name: "SDLC", level: 85, icon: "SiProcesswire", category: "Software" },
        { name: "STLC", level: 85, icon: "SiProcesswire", category: "Software" },
        { name: "Agile Scrum", level: 80, icon: "SiJira", category: "Software" },
        { name: "API Testing", level: 82, icon: "SiPostman", category: "Software" },
        { name: "Postman", level: 85, icon: "SiPostman", category: "Software" },
        { name: "Selenium", level: 70, icon: "SiSelenium", category: "Software" },
        { name: "Playwright", level: 65, icon: "SiPlaywright", category: "Software" },
        { name: "JMeter", level: 70, icon: "SiApachejmeter", category: "Software" },
        { name: "Jira", level: 85, icon: "SiJira", category: "Software" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", level: 80, icon: "SiGit", category: "Tools" },
        { name: "GitHub", level: 82, icon: "SiGithub", category: "Tools" },
        { name: "Jupyter Notebook", level: 88, icon: "SiJupyter", category: "Tools" },
        { name: "Google Colab", level: 90, icon: "SiGooglecolab", category: "Tools" },
        { name: "Unity", level: 80, icon: "SiUnity", category: "Tools" },
        { name: "DBeaver", level: 85, icon: "SiDatabricks", category: "Tools" },
        { name: "VS Code", level: 90, icon: "SiVisualstudiocode", category: "Tools" },
      ],
    },
  ],
  experience: [
    {
      id: "goinnovior-sqa-2025",
      title: "Software Quality Assurance Intern",
      company: "Goinnovior Limited",
      location: "Mirpur DOHS, Dhaka, Bangladesh",
      date: { start: "2025-12", end: "2026-03" },
      summary:
        "Contributed to software quality assurance by performing manual and API testing, documenting defects, and collaborating with development teams to improve product quality.",
      bullets: [
        "Analyzed software testing results to identify recurring defects and improve application quality.",
        "Documented bugs with severity levels, reproduction steps, and supporting evidence using Jira.",
        "Prepared detailed test reports and collaborated with cross-functional teams to monitor defect trends.",
        "Performed functional, UI, smoke, and regression testing while maintaining accurate testing documentation.",
        "Conducted API testing using Postman and utilized Browser DevTools for debugging and network analysis.",
      ],
      tech: [
        "Manual Testing",
        "Jira",
        "Postman",
        "Browser DevTools",
        "API Testing",
        "Regression Testing",
        "Smoke Testing",
      ],
    },
    {
      id: "batterylow-arvr-2025",
      title: "AR/VR Game Development Intern",
      company: "Battery Low Interactive Ltd",
      location: "Baridhara, Dhaka, Bangladesh",
      date: { start: "2025-10", end: "2025-11" },
      summary:
        "Developed and delivered an AR mobile application using Unity, contributing to application development, testing, and deployment.",
      bullets: [
        "Designed and developed an AR mobile application using Unity.",
        "Built and delivered an Android APK for internal testing and demonstration.",
        "Collaborated with the development team to implement features and resolve issues.",
        "Participated in application testing, debugging, and deployment activities.",
      ],
      tech: ["Unity", "C#", "AR", "Android", "Mobile Development"],
    },
  ],
  certifications: [
    {
      name: "Data Analyst with SQL and Python",
      issuer: "Farhan's Academy",
      date: "March 2025",
      description:
        "Completed training in SQL, Python, data cleaning, exploratory data analysis, and data visualization.",
    },
    {
      name: "Job Ready: Employability Skills at the Basic",
      issuer: "Wadhwani Foundation",
      date: "December 2025",
      description:
        "Completed employability skills training focused on communication, teamwork, and workplace readiness.",
    },
  ],
  projects: [
    {
      id: "retail-sales-performance",
      title: "Retail Sales Performance & Customer Behavior Analytics",
      description:
        "Developed an interactive sales analytics dashboard to evaluate revenue, customer purchasing behavior, product performance, and sales trends. Performed data cleaning, transformation, and analysis using SQL, Python, Excel, and Power BI to deliver actionable business insights for data-driven decision-making.",
      tags: ["Python", "Excel", "EDA", "Data Visualization", "Retail Analytics"],
      image: "./sales_executive_dashboard.png",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/Ruma13/Sales-Data-Analysis",
          icon: "SiGithub",
        },
      ],
      isUnderDevelopment: false,
    },
    {
      id: "online-banking-dashboard",
      title: "Online Banking Performance Dashboard",
      description:
        "Designed an interactive banking dashboard to analyze transaction trends, customer activity, account performance, and financial metrics. Utilized SQL for data extraction, Python for preprocessing, and Power BI for creating insightful visualizations that support business reporting and operational decisions.",
      tags: ["Power BI", "SQL", "Python", "MySQL", "ETL", "Banking Analytics", "Dashboard"],
      image: "./Online_Banking_Dashboard (1).jpg",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/Ruma13/Online_Banking_DashBoard",
          icon: "SiGithub",
        },
      ],
      isUnderDevelopment: false,
    },
    {
      id: "restaurant-revenue-analytics",
      title: "Restaurant Revenue & Customer Loyalty Analytics",
      description:
        "Built a business intelligence dashboard to analyze restaurant revenue, customer loyalty, order trends, and menu performance. Leveraged SQL, Python, Excel, and Power BI to transform raw data into meaningful insights that help improve customer retention and business performance.",
      tags: ["Power BI", "SQL", "Python", "Excel", "Restaurant Analytics", "Customer Analytics", "ETL"],
      image: "./kacci-dashboard (1).jpg",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/Ruma13/Kacci.com_DashBoard",
          icon: "SiGithub",
        },
      ],
      isUnderDevelopment: false,
    },
  ],
  education: [
    {
      degree: "B.Sc. in Computer Science Engineering",
      school: "Green University Of Bangladesh",
      date: "2022-2026",
    },
    {
      degree: "Higher Secondary",
      school: "Govt. Tolaram College",
      date: "2018-2020",
    },
    {
      degree: "Secondary School",
      school: "Kachpur Omar Ali High School",
      date: "2017",
    },
  ],
  extras: {
    languages: [
      { name: "Bangla", level: "Native" },
      { name: "English", level: "Upper Intermediate (B2)" },
    ],
    interests: ["astronomy", "music"],
  },
};

export const tagColors: TagColors = {
  Python: "bg-yellow-100 text-yellow-800",
  SQL: "bg-blue-100 text-blue-800",
  MySQL: "bg-sky-100 text-sky-800",
  Java: "bg-red-100 text-red-800",
  JavaScript: "bg-yellow-200 text-yellow-900",
  TypeScript: "bg-blue-200 text-blue-900",
  "C++": "bg-indigo-100 text-indigo-800",
  C: "bg-gray-200 text-gray-800",
  "C#": "bg-purple-100 text-purple-800",
  "Power BI": "bg-yellow-300 text-yellow-900",
  Excel: "bg-green-100 text-green-800",
  ETL: "bg-indigo-100 text-indigo-800",
  "Data Analysis": "bg-blue-100 text-blue-800",
  "Data Visualization": "bg-purple-100 text-purple-800",
  "Data Cleaning": "bg-cyan-100 text-cyan-800",
  Dashboard: "bg-pink-100 text-pink-800",
  "Dashboard Development": "bg-pink-100 text-pink-800",
  Pandas: "bg-indigo-200 text-indigo-900",
  NumPy: "bg-blue-200 text-blue-900",
  Matplotlib: "bg-orange-100 text-orange-800",
  "Retail Analytics": "bg-orange-100 text-orange-800",
  "Banking Analytics": "bg-green-100 text-green-800",
  "Restaurant Analytics": "bg-red-100 text-red-800",
  "Customer Analytics": "bg-pink-100 text-pink-800",
  "Sales Analytics": "bg-teal-100 text-teal-800",
  Healthcare: "bg-red-200 text-red-900",
  "Manual Testing": "bg-red-100 text-red-800",
  "API Testing": "bg-orange-100 text-orange-800",
  Postman: "bg-orange-200 text-orange-900",
  Selenium: "bg-green-200 text-green-900",
  Playwright: "bg-lime-100 text-lime-800",
  Jira: "bg-blue-200 text-blue-900",
  JMeter: "bg-red-200 text-red-900",
  "Regression Testing": "bg-purple-200 text-purple-900",
  "Smoke Testing": "bg-yellow-100 text-yellow-900",
  SDLC: "bg-gray-200 text-gray-900",
  STLC: "bg-gray-300 text-gray-900",
  "Agile Scrum": "bg-teal-100 text-teal-900",
  Git: "bg-orange-100 text-orange-800",
  GitHub: "bg-gray-800 text-white",
  Unity: "bg-gray-900 text-white",
  "VS Code": "bg-blue-100 text-blue-800",
  "Google Colab": "bg-yellow-100 text-yellow-900",
  "Jupyter Notebook": "bg-orange-100 text-orange-900",
  DBeaver: "bg-teal-100 text-teal-800",
  Analytics: "bg-blue-100 text-blue-800",
  Visualization: "bg-purple-100 text-purple-800",
};
