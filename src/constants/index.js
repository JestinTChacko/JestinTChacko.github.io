import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  flutter2,
  flutter,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  dart,
  firebase,
  php,
  contentCreator,
  ui_ux,
  ignitho,
  daiviksoft,
  edrona,
  freelance,
  dojobs,
  edrona1,
  medetuit1,
  rcyc1,
  reachamy1,
  deaks1,
  clubsports1,
  livy,
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
    title: "React Native Developer",
    icon: flutter2,
  },
  {
    title: "JavaScript Developer",
    icon: javascript,
  },
  {
    title: "Content Creator",
    icon: contentCreator,
  },
  {
    title: "UI UX Enthusiast",
    icon: ui_ux,
  },
];

const technologies = [
  {
    name: "React Native",
    icon: reactjs,
  },

  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "React Native Developer",
    company_name: "Freelance Work",
    icon: freelance,
    // iconBg: "#383E56",
    iconBg: "#FFFFFF",
    date: "July 2024 - Present",
    points: [
      "Led project involving the development of applications using React Native.",
      "Designed application architecture to ensure maintainability, scalability, and adaptability based on project needs.",
      "Developed features like social media authentication",
      "Used Redxu-toolkit for state management",
      "Acted as the liaison between the mobile team and the backend team, providing solutions to ensure smooth operations.",
      "Deployed applications to App Store and Google Play Console.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Daiviksoft Technologies PVT LTD",
    icon: daiviksoft,
    // iconBg: "#E6DEDD",
    iconBg: "#FFFFFF",
    date: "October 2022 - July 2024",
    points: [
      "Implemented features like google map integration, payment gateways, pushnotifications, realtime chating,",
      "Integrated media uploading like videos, images, and interactive modules.",
      "Managed and led a team focused on reducing bugs and minimizing project completion times.",
      "Developed social media authentication and social media posting.",
      "Deployed applications to App Store and Google Play Console.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "E-Drona Learning",
    icon: edrona,
    // iconBg: "#E6DEDD",
    iconBg: "#FFFFFF",
    date: "May 2021 - October 2022",
    points: [
      "Led projects involving the development of applications using React Native.",
      "Integrated multimedia elements (videos, quizzes, and interactive modules) to enhance the learning experience.",
      "Implemented tracking and reporting features to monitor user progress and performance.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Deployed applications to App Store and Google Play Console.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Ignitho Technologies",
    icon: ignitho,
    // iconBg: "#E6DEDD",
    iconBg: "#FFFFFF",
    date: "May 2019 - May 2021",
    points: [
      "Implemented with smooth UI UX experience in survey application.",
      "Implemented survey application for health case system.",
      "Developed and maintained online learning platforms to support a diverse range of educational needs and user requirements.",
      "Deployed applications to App Store and Google Play Console.",
    ],
  },
  {
    title: "React Native Trainee",
    company_name: "Ignitho Technologies",
    icon: ignitho,
    // iconBg: "#E6DEDD",
    iconBg: "#FFFFFF",
    date: "Jan 2019 - May 2019",
    points: [
      "Created React based chat application",
      "Integrated real-time chating using socket.io",
      "Implemented onlife ofline feature.",
      "Integrated with automatic chat reply with AI boat.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "After Jestin joined the team, the development of our projects accelerated significantly. His contributions greatly sped up our progress, and we couldn’t be more grateful!",
    name: "Unnikrishnan P",
    designation: "Mobile Team Lead",
    company: "Daiviksoft Technologies",
    image: null,
  },
  {
    testimonial:
      "His ability to integrate advanced features like real-time chat and Firebase services into our apps was impressive. Jestin is a reliable developer who brings great energy to the team.",
    name: "Rizvin C Usman",
    designation: "Senior Software Engineer",
    company: "Qburst",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    testimonial:
      "Jestin’s problem-solving skills and attention to detail have made complex tasks seem effortless. He’s a team player who always goes the extra mile to ensure the success of the project.",
    name: "Jerin Baby",
    designation: "Team Lead",
    company: "Viewber limited, UK",
    image: null,
  },
  {
    testimonial:
      "I thought creating a DOJobs app as seamless as our customer experience was impossible, but Jestin made it happen                                                                                                                                                       ",
    name: "Rahul Pallath",
    designation: "Senior Software Engineer",
    company: "Qburst",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    testimonial:
      "Jestin is an exceptional React Native developer with a deep understanding of mobile app development. He consistently delivers high-quality, scalable apps on time. ",
    name: "Mohammad Sulthan",
    designation: "Lead Frondend Developer",
    company: "DaivikSoft",
    image: null,
  },
];

const projects = [
  {
    name: "ClubSports",
    description:
      "ClubSports seamlessly organize matches, track player availability, manage payments, and streamline club operations—all in one powerful platform. Elevate club's game, empower your team's journey to victory, and unlock limitless possibilities for success. ",
    tags: [
      {
        name: "ReactNative",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Redux-toolkit",
        color: "pink-text-gradient",
      },
      {
        name: "TypeScript",
        color: "orange-text-gradient",
      },
      {
        name: "Android",
        color: "blue-text-gradient",
      },
      {
        name: "iOS",
        color: "green-text-gradient",
      },
      {
        name: "XD",
        color: "pink-text-gradient",
      },
      {
        name: "Git",
        color: "orange-text-gradient",
      },
      {
        name: "Firebase",
        color: "blue-text-gradient",
      },
    ],
    image: clubsports1,
    source_code_link: "https://github.com/Jestin-T-Chacko",
  },
  {
    name: "DOJobs",
    description:
      "DOJobs simplifies the hiring process,saving time and effort in finding the right labor for each task. Their digital procedure for transparent tracking of labor hour improves efficiency by accurately recording working hours and ensuring accountability.",
    tags: [
      {
        name: "ReactNative",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Redux-toolkit",
        color: "pink-text-gradient",
      },
      {
        name: "TypeScript",
        color: "orange-text-gradient",
      },
      {
        name: "Android",
        color: "blue-text-gradient",
      },
      {
        name: "iOS",
        color: "green-text-gradient",
      },
      {
        name: "XD",
        color: "pink-text-gradient",
      },
      {
        name: "Git",
        color: "orange-text-gradient",
      },
      {
        name: "Firebase",
        color: "blue-text-gradient",
      },
    ],
    image: dojobs,
    source_code_link: "https://github.com/Jestin-T-Chacko",
  },
  {
    name: "ReachAMY",
    description:
      "This project encompasses both web and mobile application development, with the primary goal of empowering users to create and share activities for social causes. Additionally, it aims to raise social awareness through the creation of blogs and petitions",
    tags: [
      {
        name: "ReactNative",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Redux-toolkit",
        color: "pink-text-gradient",
      },
      {
        name: "TypeScript",
        color: "orange-text-gradient",
      },
      {
        name: "GoogleMap",
        color: "blue-text-gradient",
      },
      {
        name: "StripePayment",
        color: "green-text-gradient",
      },
      {
        name: "XD",
        color: "pink-text-gradient",
      },
      {
        name: "Git",
        color: "orange-text-gradient",
      },
      {
        name: "Firebase",
        color: "blue-text-gradient",
      },
    ],
    image: reachamy1,
    source_code_link: "https://github.com/Jestin-T-Chacko",
  },
  {
    name: "Deaks",
    description:
      "Deaks is a part-time job booking and scheduling application. It provide facility to search part-time job on different locations and organizer can schedule part-time jobs and subcribed user get notifications each time new job is scheduled. Was responsible for developig from scratch and deploying into app store and play store",
    tags: [
      {
        name: "ReactNative",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
    ],
    image: deaks1,
    source_code_link: "https://github.com/Jestin-T-Chacko",
  },
  {
    name: "RCYC",
    description:
      "Enhance your Membership experience by downloading our App. Enhance your Membership experience by downloading our App. As a Member you will be able to use our App to access your Member profile, view your statements, view Club calendar, make new reservations, manage existing reservations.",
    tags: [
      {
        name: "Ionic",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
      {
        name: "Figma",
        color: "orange-text-gradient",
      },
      {
        name: "Android",
        color: "blue-text-gradient",
      },
      {
        name: "iOS",
        color: "green-text-gradient",
      },
    ],
    image: rcyc1,
    source_code_link: "https://github.com/Jestin-T-Chacko",
  },
  {
    name: "Medetuit",
    description:
      "Medetuit is an E-learning platform which offers users the chance to purchase and engage in MBBS courses or programs. It includes features for asking questions to online teachers, submitting assignments, and undergoing assessments related to the acquired courses.",
    tags: [
      {
        name: "ReactNative",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "XD",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "orange-text-gradient",
      },
      {
        name: "Git",
        color: "blue-text-gradient",
      },
      {
        name: "Android",
        color: "green-text-gradient",
      },
      {
        name: "iOS",
        color: "pink-text-gradient",
      },
      {
        name: "Redux",
        color: "orange-text-gradient",
      },
    ],
    image: medetuit1,
    source_code_link: "https://github.com/Jestin-T-Chacko",
  },
  {
    name: "EDrona",
    description:
      "Edrona is an E-learning platform which offers users the chance to purchase and engage in diverse courses or programs. It includes features for asking questions to online teachers, submitting assignments, and undergoing assessments related to the acquired courses.",
    tags: [
      {
        name: "ReactNative",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "XD",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "orange-text-gradient",
      },
      {
        name: "Git",
        color: "blue-text-gradient",
      },
      {
        name: "Android",
        color: "green-text-gradient",
      },
      {
        name: "iOS",
        color: "pink-text-gradient",
      },
      {
        name: "Redux",
        color: "orange-text-gradient",
      },
    ],
    image: edrona1,
    source_code_link: "https://github.com/Jestin-T-Chacko",
  },
  {
    name: "Livy",
    description:
      "Internal Application for the iDirect employees to improve their productivity. This Application enhances individual - employee engagement through digital transformation of all paper forms and client surveys.",
    tags: [
      {
        name: "ReactNative",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "XD",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "orange-text-gradient",
      },
      {
        name: "Android",
        color: "blue-text-gradient",
      },
      {
        name: "Bitbucket",
        color: "green-text-gradient",
      },
      {
        name: "Git",
        color: "pink-text-gradient",
      },
    ],
    image: livy,
    source_code_link: "https://github.com/Jestin-T-Chacko",
  },
];
export { services, technologies, experiences, testimonials, projects };
