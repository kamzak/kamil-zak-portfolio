import {
  mobile,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextjs,
  redux,
  tailwind,
  nodejs,
  git,
  docker,
  agh,
  wip,
  odlewnie,
  bazodlew,
  conf,
  threejs,
  claudius,
  dell,
  joseph,
  distancemeter,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "UX / UI Designer",
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
    name: "Next JS",
    icon: nextjs,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "AGH - University of Science and Technology",
    icon: agh,
    iconBg: "#E6DEDD",
    date: "May 2022 - Present",
    points: [
      "Developing and maintaining frontend part of application using React, Next.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Using the latest technologies to deliver the highest quality product.",
    ],
  },
  {
    title: "Testing technologist",
    company_name: "Odlewnie Polskie S.A.",
    icon: odlewnie,
    iconBg: "#383E56",
    date: "July 2021 - September 2021",
    points: [
      "I designed technologies in NX CAD software from Siemens. Each of the casting proposals was simulated in the ProCAST software, which enabled me to find the most optimal technology.",
      "By attending technological trials, I learned the practical aspects of making and optimizing the production of ductile iron castings.",
    ],
  },
  {
    title: "Laboratory Worker - Quality Control",
    company_name: "Odlewnie Polskie S.A.",
    icon: odlewnie,
    iconBg: "#E6DEDD",
    date: "July 2019 - September 2019",
    points: [
      "Preparation of tests for strength, hardness, impact strength and evaluation of structures in the field of ductile iron.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "Every man is the architect of their own fortune.",
    name: "Appius Claudius Caecus",
    designation: "Politician",
    company: "Rome",
    image: claudius,
  },
  {
    testimonial: "Ideas are a commodity. Execution of them is not.",
    name: "Michael Dell",
    designation: "CEO",
    company: "Dell",
    image: dell,
  },
  {
    testimonial:
      "It's only those who do nothing that make no mistakes, I suppose.",
    name: "Joseph Conrad",
    designation: "Novelist and short story writer",
    image: joseph,
  },
];

const projects = [
  {
    name: "BazOdlew",
    description:
      "BazOdlew is a database system for archiving metallographic research  in foundry. This page was used as my master thesis. By creating this website, I developed my skills in React, React Hooks, JavaScript, CSS3, HTML5, Firebase, styled components, REST API.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: bazodlew,
    source_code_link: "https://github.com/kamzak/BazOdlew-NextJs",
    live_demo_link: "https://bazodlew.vercel.app/",
  },
  {
    name: "Distance Meter - Vue",
    description:
      "A simple application to measure the geographical distance between two coordinates. By default, the user's location is set as the first point (after consent to sharing). The second point can be selected by clicking the mouse or typing in the form.",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "google-maps-api",
        color: "green-text-gradient",
      },
    ],
    image: distancemeter,
    source_code_link: "https://github.com/kamzak/distance-meter",
    live_demo_link: "https://distance-meter.netlify.app/",
  },
  {
    name: "AGH Project",
    description:
      "Web application with a lot of functionalities. CRUD, Chat (with use of websockets), payments, admin panel, user panel, authentication, and many more. By leading frontend of this website, I developed my skills in related technologies and managing a large project.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "nextjs",
        color: "pink-text-gradient",
      },
      {
        name: "websocket",
        color: "blue-text-gradient",
      },
      {
        name: "react-query",
        color: "green-text-gradient",
      },
      {
        name: "MUI",
        color: "pink-text-gradient",
      },
    ],
    image: conf,
  },
  {
    name: "Drag & drop with Typescript",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
    ],
    image: wip,
  },
];

const certificates = [
  {
    name: "React - The Complete Guide (incl Hooks, React Router, Redux)",
    organization: "Udemy",
    date: "September 2022",
    link: "https://www.udemy.com/certificate/UC-621a89e4-d6e8-4dd8-b558-ce63010bb4ea/",
  },
  {
    name: "Next.js & React - The Complete Guide (incl. Two Paths!)",
    organization: "Udemy",
    date: "September 2022",
    link: "https://www.udemy.com/certificate/UC-44dca29c-c5e6-447c-b14c-f818ef074cc6/",
  },
  {
    name: "ChatGPT - The Complete Guide to ChatGPT & OpenAI APIs",
    organization: "Udemy",
    date: "June 2023",
    link: "https://www.udemy.com/certificate/UC-2d2abb61-0fde-4975-acce-d85b28756872/",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  certificates,
};
