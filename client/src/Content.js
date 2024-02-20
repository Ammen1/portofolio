// import images
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
    firstName: "Amen",
    LastName: "Abush",
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
        name: "django",
        para: "I have over three years of experience in Django .",
        logo: django,
        description:
          "Over the past three years,I spearheaded the creation of a dynamic fashion design e-commerce website, where I meticulously crafted both the backend and frontend components.I played a pivotal role in developing a Coffee Leaf Disease Prediction website, integrating  AI models for disease forecasting while handling both backend and frontend aspects. Furthermore, my contributions extended to the development of the backend and frontend for Goderash Fuel Delivery, a mobile app facilitating fuel delivery services. Notably, I incorporated language translation features within the app to facilitate effective communication by translating local languages. These experiences have honed my skills in web development, machine learning integration.",
      },
      {
        name: "Node js",
        para: "I have over three years of experience in Node.js.",
        logo: nodejs,
        description:
          "i have more then 2 years expereinces in and I spearheaded the creation of a dynamic getjobs backend at eaglelion  ",
      },
      {
        name: "Vue.js",
        para: "I have over one years of experience in Node.js.",
        logo: vue,
        description: "",
      },
      {
        name: "docker",
        para: "I've successfully implemented Docker for streamlined and efficient application deployment and management.",
        logo: docker,
        description:
          "In my professional journey, I've successfully implemented Docker for streamlined and efficient application deployment and management. I leveraged Docker's containerization technology to encapsulate applications and their dependencies, ensuring consistency across different environments.",
      },
      {
        name: "Mongo",
        para: "I've gained extensive experience in working with MongoDB, a NoSQL database",
        logo: mongo,
        description:
          "I've gained extensive experience in working with MongoDB, a NoSQL database that excels in handling large volumes of unstructured or semi-structured data. I have successfully integrated MongoDB into various projects, leveraging its flexibility to store and retrieve data in a schema-less format. ",
      },
      {
        name: "Djnago Reat Framwork",
        para: "I have demonstrated a strong command of Django REST Framework, a powerful tool for building robust and scalable Web APIs with the Django framework",
        logo: rest1,
      },
      {
        name: "Kubernet",
        para: "I have acquired substantial experience in working with Kubernetes, a powerful container orchestration platform.",
        logo: kubermet,
        description:
          "I have acquired substantial experience in working with Kubernetes, a powerful container orchestration platform. I have successfully implemented and managed containerized applications using Kubernetes, leveraging its robust features for automating deployment, scaling, and management of containerized workloads. ",
      },
      {
        name: "Node js",
        para: "Lorem ipsum text  dummy",
        logo: nodejs,
      },

      {
        name: "React js",
        para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },
      {
        name: "ninja",
        para: "have honed my skills in utilizing the Ninja web framework.",
        logo: ninja,
        description:
          " have honed my skills in utilizing the Ninja web framework. and my experience involves leveraging its capabilities to build modern and scalable web applications. I have successfully contributed to projects where Ninja's simplicity and efficiency played a crucial role.",
      },
      {
        name: "Python",
        para: "Lorem ipsum text  dummy",
        logo: python,
      },
      {
        name: "deploy",
        para: "I have demonstrated a comprehensive understanding of deployment processes.",
        logo: deploye,
        description:
          "I have demonstrated a comprehensive understanding of deployment processes, ensuring the smooth transition of applications from development to production environments. I am proficient in employing various deployment strategies, including continuous integration and continuous delivery (CI/CD) pipelines, to automate and streamline the deployment lifecycle",
      },
      {
        name: "JavaScripts",
        para: "I have demonstrated a comprehensive understanding of deployment processes.",
        logo: js,
        description:
          "I have demonstrated a comprehensive understanding of deployment processes, ensuring the smooth transition of applications from development to production environments. I am proficient in employing various deployment strategies, including continuous integration and continuous delivery (CI/CD) pipelines, to automate and streamline the deployment lifecycle",
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
