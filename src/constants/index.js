import project1 from "../assets/projects/Project1.png";
import project2 from "../assets/projects/InvoiceApp.png";
import project3 from "../assets/projects/DailyNews.png";
import project4 from "../assets/projects/Doctor.png";

export const HERO_CONTENT = `
I am a passionate Full Stack Developer with a knack for building efficient and scalable web applications. With 2 years of backend experience in Java, Spring Boot, and Node.js, and 1 year of expertise in frontend technologies like ReactJS, Tailwind CSS, MaterialUI and Bootstrap, I specialize in creating seamless user experiences. Proficient in databases like MySQL and MongoDB, I strive to deliver innovative solutions that meet client needs and drive business success.`;

export const ABOUT_TEXT = `
I am a dedicated and versatile Full Stack Developer passionate about designing scalable and user-centric web applications. With 2 years of backend experience in Java, Spring Boot, and Node.js, and 1 year of frontend expertise in ReactJS, Tailwind CSS, and Bootstrap, I bring a comprehensive skill set to every project. My journey in development has been fueled by a constant drive to learn and adapt, ensuring I stay at the forefront of evolving technologies. I excel in collaborative environments, solving complex challenges to deliver high-quality solutions. Beyond coding, I enjoy exploring new tech trends and refining my craft.`;

export const EXPERIENCES = [
  {
    year: "01/2023 - 02/2024",
    role: "Associate Software Engineer",
    company: "Tech Mahindra Ltd. Pune",
    description: `Led the development and implementation of robust software solutions, collaborating closely with development and
testing teams to meet client requirements.
Enhanced system functionality and performance through meticulous maintenance and updates of existing software
systems.
Modernized legacy code bases, applying contemporary standards to ensure scalability and efficiency.
Contributed specialized knowledge in the Telecom domain, utilizing Java 8, Spring Boot API creation, and Core
Java to optimize project outcomes.
Demonstrated proficiency in UI technologies, leveraging ReactJS, HTML5, CSS, and Bootstrap to enhance user
experience.`,
    technologies: [
      "Java",
      "React.js",
      "Springboot",
      "Mysql",
      "Git",
      "Bootstrap",
      "CSS",
    ],
  },
  {
    year: "07/2019 - 08/2019",
    role: "Inter",
    company: "Feasible Technology, Raipur, Chhattishgarh",
    description: `Stayed updated with industry trends by attending regular training sessions related to Java development
technologies and techniques.`,
    technologies: ["HTML", "CSS", "JAVA", "Springboot", "MySql"],
  },
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project1,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    url:"https://github.com/Bhupesh96/react-portfolio-bhupesh"
  },
  {
    title: "Invoice Generator",
    image: project2,
    description:
      "Developed a user-friendly invoice generation application using ReactJS. The app allows users to create, customize, and manage invoices efficiently. It features dynamic form handling, real-time calculations, and a responsive design for seamless use across devices.",
    technologies: ["HTML", "CSS", "React", "Tailwind Css"],
    url:"https://github.com/Bhupesh96/Invoice-Generator"
  },
  {
    title: "Daily News",
    image: project3,
    description:
      "Built a daily news application using Node.js and NewsAPI. The app fetches and displays real-time news articles from various categories, featuring API integration, efficient data handling, and a clean, user-friendly interface.",
    technologies: ["HTML", "CSS", "React", "Tailwind Css", "NewsAPI", "NodeJs"],
    url:"https://github.com/Bhupesh96/NewsAppUsingReact"
  },
  {
    title: "Doctor Appointment System",
    image: project4,
    description:
      " Designed and developed a full-stack doctor appointment platform enabling doctor and patient registration, appointment booking, and secure payment processing with Stripe integration. Features include user authentication, role-based dashboards, and a seamless booking experience.",
    technologies: ["React", "Tailwind Css", "Stripe Payment", "NodeJs", "MongoDB"],
    url:"https://github.com/Bhupesh96/Doctor-Appointment-Booking-App-React-NodeJs"
  },
 
 
];

export const CONTACT = {
  address: "Dhnora Ekta-Nagar Bhilai, Chhattishgarh 491001",
  phoneNo: "+91-7000046519",
  email: "bs.work9617@gmail.com",
};
