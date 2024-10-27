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
  pisf,
  agh,
  dnd_ts,
  odlewnie,
  bazodlew,
  conf,
  threejs,
  claudius,
  dell,
  joseph,
  distancemeter,
  nodejsblog,
  threads
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
    id: "projects",
    title: "Projects",
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
    company_name: "Polish Film Institute",
    icon: pisf,
    iconBg: "#383E56",
    date: "September 2023 - Present",
    points: [
      "As the lead frontend developer in the team, I am responsible for the structure of the main project, which I built from scratch and have been developing to this day.",
      "I take care to ensure the highest possible code quality and extensibility."
    ]
  },
  {
    title: "Frontend Developer",
    company_name: "AGH - University of Science and Technology",
    icon: agh,
    iconBg: "#E6DEDD",
    date: "May 2022 - January 2024",
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
    name: "Threads App Clone - FullStack MERN | Next.js 13, Typescript, MongoDB",
    description: `Introducing Threads-inspired app, powered by the MERN stack.

      🔑 Seamless Google Authentication via Clerk.
      🧵 Craft threads, engage with comments, and show appreciation with likes.
      🔔 Stay updated with an Activity page that alerts you to thread replies.
      👥 Explore the Profile page to view user posts.
      🔍 Use the Search page to discover users and dive into Communities to explore various groups.
      🌐 Found a community or make it your own! Post, invite others via email invitations, and grow your circle.
      💡 Developed using React, Next.js, TypeScript, and MongoDB.
      
      #NextGenWeb`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
    ],
    image: threads,
    source_code_link: "https://github.com/kamzak/threads_app/",
    live_demo_link: "https://threads-app-kamil-zak.vercel.app/",
  },
  {
    name: "Simple Blog - Nodejs + React",
    description:
      "Simple blog with use of external api. Added filters, sorting, infinite scroll and tests. Technologies used: React, React Query, Redux + Redux Toolkit, Node.js, JEST, RTL.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: nodejsblog,
    source_code_link: "https://github.com/kamzak/nodejs-blog/",
    live_demo_link: "https://nodejs-blog-eight.vercel.app/",
  },
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
      "Simple drag & drop application with use of Typescript. By creating this website, I developed my skills in TypeScript and all its advantages.",
    tags: [
      {
        name: "typescript",
        color: "green-text-gradient",
      },
    ],
    image: dnd_ts,
    source_code_link: "https://github.com/kamzak/dnd-ts",
    live_demo_link: "https://dragndrop-ts.vercel.app/",
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
  {
    name: "Understanding TypeScript",
    organization: "Udemy",
    date: "August 2023",
    link: "https://www.udemy.com/certificate/UC-d7614510-bf03-4b5a-b32a-a0ab00a5708b/",
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
