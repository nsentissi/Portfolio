import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaCode,
  FaGithub
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/project-1.png";
import Work2 from "./assets/project-2.png";
import Work3 from "./assets/project-3.png";
import Work4 from "./assets/project-4.jpeg";
import Work5 from "./assets/project-5.jpg";
import Work6 from "./assets/project-6.jpg";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

import skill1 from "./assets/html5.svg";
import skill2 from "./assets/css3.svg";
import skill3 from "./assets/javascript.svg";
import skill4 from "./assets/react.svg";
import skill5 from "./assets/nodejs.svg";
import skill6 from "./assets/express.svg";
import skill7 from "./assets/mongodb.svg";
import skill8 from "./assets/wordpress.svg";
import skill9 from "./assets/sql.svg";
import skill10 from "./assets/tailwind.svg";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Nawfal",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Sentissi",
  },

  {
    id: 3,
    title: "Date of Birth : ",
    description: "19/11/1991",
  },

  {
    id: 4,
    title: "Based In : ",
    description: "Hamburg, Germany",
  },

  {
    id: 5,
    title: "Phone Number : ",
    description: "+49 1573 3917793",
  },

  {
    id: 6,
    title: "Email : ",
    description: "sentissinawfal@gmail.com",
  },
  {
    id: 8,
    title: "Langages : ",
    description: "English, French, German",
  },
];

export const stats = [
  {
    id: 1,
    no: "5+",
    title: "Personal <br /> Projects",
  },

  {
    id: 2,
    no: "500+",
    title: "Hours of <br /> Study & Practice",
  },

  {
    id: 3,
    no: "50+",
    title: "Coding <br /> Challenges",
  },

  {
    id: 4,
    no: "15+",
    title: "GitHub <br /> Repositories",
  },
];

export const skills = [
  {
    id: 1,
    title: "HTML",
    img: skill1,
    percentage: "85",
  },

  {
    id: 2,
    title: "CSS",
    img: skill2,
    percentage: "70",
  },

  {
    id: 3,
    title: "Javascript",
    img: skill3,
    percentage: "75",
  },

  {
    id: 4,
    title: "React",
    img: skill4,
    percentage: "80",
  },

  {
    id: 5,
    title: "Node.js",
    img: skill5,
    percentage: "85",
  },

  {
    id: 6,
    title: "Express",
    img: skill6,
    percentage: "85",
  },

  {
    id: 7,
    title: "MongoDB",
    img: skill7,
    percentage: "82",
  },

  {
    id: 8,
    title: "WordPress",
    img: skill8,
    percentage: "90",
  },
  {
    id: 9,
    title: "SQL",
    img: skill9,
    percentage: "83",
  },
  {
    id: 10,
    title: "Tailwind",
    img: skill10,
    percentage: "72",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "BarkNBath",
    description: "Full-stack pet spa booking application built with the MERN stack. Features secure authentication, appointment management, blog functionality for community interaction, and an intuitive admin dashboard.",
    tech: "React, Node.js, Express, MongoDB, TailwindCss.",
    links: [
     
      {
        icon: <FiExternalLink />,
        desc: "https://barknbath.onrender.com/",
      },
      {
        icon: <FaGithub/>,
        desc: "https://github.com/nsentissi/BarkNBath-.git"
      
      }
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "Pokedex",
    description: "Full-stack Pokemon battle simulator built with the MERN stack. Features dynamic Pokemon filtering, engaging battle mechanics, and a persistent leaderboard to track top trainers.",
    tech: "React, Node.js, Express, MongoDB, CSS.",
    links: [
     
      {
        icon: <FiExternalLink />,
        desc: "https://pokefight-044.netlify.app/",
      },
      {
        icon: <FaGithub/>,
        desc: "https://github.com/nsentissi/Pokefight-.git"
      
      }
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "E-commerce",
    description: "Gained essential React skills building a product-focused app. Implemented dynamic data fetching, filtering logic, and component-based structures.",
    tech: "React CSS.",
    links: [
     
      {
        icon: <FiExternalLink />,
        desc: "https://pokefight-044.netlify.app/",
      },
      {
        icon: <FaGithub/>,
        desc: "https://github.com/nsentissi/ecommerce-react.git"
      
      }
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "Video Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Video",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Premium",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: "Landing Page",
    details: [
      {
        title: "Project : ",
        desc: "Website",
      },
      {
        title: "Client : ",
        desc: "Dribble",
      },
      {
        title: "Language : ",
        desc: "React JS, Node JS",
      },
      {
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: "Photo Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Photoshop",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dibble.com",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
