import Hero_person from "./assets/images/Hero/3.png";

import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import deploye from "./assets/images/Skills/deploye.jpg";
import docker from "./assets/images/Skills/docker.jpg";
import js from "./assets/images/Skills/js.jpg";
import mongo from "./assets/images/Skills/mongo.jpg";
import kubermet from "./assets/images/Skills/kubermet.jpg";
import ninja from "./assets/images/Skills/ninja.jpg";
import rest1 from "./assets/images/Skills/rest1.jpg";
import vue from "./assets/images/Skills/vue.jpg";
import django from "./assets/images/Skills/django.jpg";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#facebook",
      icon: BsFacebook,
    },
    {
      link: "#instagram",
      icon: BsInstagram,
    },
    {
      link: "#services",
      icon: BsTwitter,
    },
    {
      link: "https://www.github.com/Ammen1",
      icon: BsGithub,
    },
    {
      link: "#contact",
      icon: BsDribbble,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "Tamirat",
    LastName: " Guda",
    btnText: "Telegratm",
    image: Hero_person,
    hero_content: [
      {
        count: "3+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "44+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Django",
        para: "I have over three years of experience in Django.",
        logo: django,
        description:
          "I led the development of a fashion design e-commerce site, a Coffee Leaf Disease Prediction platform, and a fuel delivery app with language translation, mastering both backend and frontend aspects.",
      },
      {
        name: "Node.js",
        para: "I have over three years of experience in Node.js.",
        logo: nodejs,
        description:
          "I spearheaded the backend creation for a dynamic job platform at EagleLion, focusing on scalability and performance over two years.",
      },
      {
        name: "Vue.js",
        para: "I have over one year of experience in Vue.js.",
        logo: vue,
        description:
          "I have built dynamic and responsive user interfaces with Vue.js, leveraging its component-based architecture.",
      },
      {
        name: "Docker",
        para: "I have successfully implemented Docker for efficient deployment.",
        logo: docker,
        description:
          "I utilized Docker's containerization to ensure consistent application deployment across various environments.",
      },
      {
        name: "MongoDB",
        para: "I have extensive experience with MongoDB, a NoSQL database.",
        logo: mongo,
        description:
          "I integrated MongoDB into various projects, leveraging its flexibility to manage large volumes of unstructured data.",
      },
      {
        name: "Django REST Framework",
        para: "I have strong command of Django REST Framework.",
        logo: rest1,
        description:
          "I built scalable web APIs, integrating them seamlessly with Django for efficient data handling.",
      },
      {
        name: "Kubernetes",
        para: "I have experience in managing containerized apps with Kubernetes.",
        logo: kubermet,
        description:
          "I implemented Kubernetes for automating deployment, scaling, and management of containerized workloads.",
      },
      {
        name: "Node.js",
        para: "Node.js powers scalable server-side apps with high performance.",
        logo: nodejs,
        description:
          "I used Node.js to build APIs, real-time apps, and microservices, leveraging its non-blocking I/O for efficiency.",
      },
      {
        name: "React.js",
        para: "I have experience building dynamic UIs with React.js.",
        logo: reactjs,
        description:
          "React's component-based architecture allows me to create reusable UI elements for scalable development.",
      },
      {
        name: "Ninja Framework",
        para: "I have honed my skills in the Ninja web framework.",
        logo: ninja,
        description:
          "I used Ninja to build modern, scalable web applications, contributing to projects where its efficiency was crucial.",
      },
      {
        name: "Python",
        para: "Python is a versatile language for web development and more.",
        logo: python,
        description:
          "I use Python for rapid development in web, data science, and automation, leveraging its extensive libraries.",
      },
      {
        name: "Deployment",
        para: "I have a comprehensive understanding of deployment processes.",
        logo: deploye,
        description:
          "I ensure smooth app transitions from development to production with CI/CD pipelines for automated deployment.",
      },
      {
        name: "JavaScript",
        para: "JavaScript is essential for dynamic web development.",
        logo: js,
        description:
          "I use JavaScript for creating interactive, responsive web applications, mastering both frontend and backend uses.",
      },
    ],
    icon: MdArrowForward,
  },
  
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "As a full-stack developer, I seamlessly integrate both frontend and backend components, providing end-to-end solutions. This holistic approach ensures a cohesive and efficient digital ecosystem for your business.",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "In a world where digital interactions span various devices, I prioritize responsive design principles. Your website or application will not only look exceptional on desktops but will also provide a flawless experience on tablets and smartphones. Accessibility is ingrained in every design, ensuring inclusivity for all users.",
        logo: services_logo2,
      },
      {
        title: "DTABASEGNING",
        para: "My approach to database design begins with strategic data modeling. I meticulously analyze your business requirements to create a data model that not only reflects your current needs but is also flexible enough to accommodate future growth. Each table, relationship, and field is carefully crafted to optimize data storage and retrieval.",
        logo: services_logo3,
      },
    ],
  },

  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "amenguda@gmail.com",
        icon: GrMail,
        link: "mailto:amenguda@gmail.com",
      },
      {
        text: "+251 944365493",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "Amen Guda",
        icon: BsInstagram,
        link: "https://www.instagram.com/amen31",
      },
    ],
  },
};
