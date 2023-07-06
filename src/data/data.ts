import EduImg1 from "../assets/edu1.png";
import EduImg2 from "../assets/edu2.png";
import EduImg3 from "../assets/edu3.png";
import WorkImg1 from "../assets/work1.png";
import WorkImg2 from "../assets/work2.png";
import NewsImg from "../assets/news.png";
import AroundImg from "../assets/about.png";

export const educationData = [
  {
    img: EduImg1,
    name: "King Mongkut's University of Technology Thonburi, Bangkok",
    major: "BAs Industrial Design (International Program)",
    date: "August 2017 - June 2021",
  },
  {
    img: EduImg2,
    name: "Ansal University, New Delhi, India",
    major: "BAs Product Design (Exchange Program)",
    date: "August 2019 - December 2019",
  },
  {
    img: EduImg3,
    name: "University of Northumbria, Newcastle upon tyne, United Kingdom",
    major: "MSc Computer Scienec with Advanced practise",
    date: "August 2021 - June 2023",
  },
];

export const experienceData = [
  {
    img: WorkImg1,
    title:
      "My life story book digital platform at TLSWI (Therapeutic Life Story Work International), Newcastle upon Tyne (Contract project)",
    date: "February 2023 — April 2023",
    position: "Full-stack developer",
    description:
      "Collaboration with Northumbria University and Therapeutic Life Story Work(TLSW) to develop and design innovative tools for TLSW. The project centers around the creation of a 3D web-based game, tailored specifically for therapeutic applications. Additionally, implementing a sophisticated content management system ensures that the game remains engaging, relevant, and beneficial for users.",
  },
  {
    img: WorkImg2,
    title:
      "Sentimental Analysis on Climate Change at S&T Consulting, Newcastle upon Tyne (Contract project)",
    date: "September 2022 - December 2022",
    position: "Project Manager",
    description:
      "Working at S&T Consulting involved analyzing Twitter data through Sentiment Analysis and key phrase extraction methods to gain insights into public perceptions of climate change effects. In addition, a user-friendly web-based dashboard was created for data visualization. Project timelines, team communication, and overall planning were overseen to ensure timely completion of the project.",
  },
];

export const projectData = [
  {
    img: NewsImg,
    title: "News Explorer Website",
    description:
      "a full-stack web application enabling keyword-based news search, article-saving functionality, and a robust user authentication system. ",
    link: "https://euphonious-twilight-07d568.netlify.app/",
    git: "https://github.com/four88/news-explorer-frontend/tree/main",
    frontend: "React.js",
    backend: "MongoDB, Express.js, Node.js",
  },
  {
    img: AroundImg,
    title: "Around Us",
    description:
      "Full-stack web application allow user to created, edit and deleted card. and robust user authentication system.",
    frontend: "React.js",
    backend: "MongoDB, Express.js, Node.js",
    link: "https://serene-nougat-43ac98.netlify.app/",
    git: "https://github.com/four88/react-around-api-full",
  },
];
