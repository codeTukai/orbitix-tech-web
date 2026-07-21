import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaAws,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiOpenai,
  SiGooglegemini,
  SiVercel,
  SiRender,
  SiPostman,
  SiVisualstudiocode,
} from "react-icons/si";

export const technologies = [
  {
    title: "Frontend",
    icon: "💻",
    items: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
    ],
  },

  {
    title: "Backend",
    icon: "⚙️",
    items: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "JWT Authentication" },
      { name: "REST API" },
    ],
  },

  {
    title: "Database",
    icon: "🗄️",
    items: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "Firebase", icon: SiFirebase },
    ],
  },

  {
    title: "Artificial Intelligence",
    icon: "🤖",
    items: [
      { name: "OpenAI", icon: SiOpenai },
      { name: "Gemini", icon: SiGooglegemini },
      { name: "Prompt Engineering" },
    ],
  },

  {
    title: "Cloud",
    icon: "☁️",
    items: [
      { name: "AWS", icon: FaAws },
      { name: "Vercel", icon: SiVercel },
      { name: "Render", icon: SiRender },
    ],
  },

  {
    title: "Tools",
    icon: "🛠️",
    items: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Docker", icon: FaDocker },
      { name: "VS Code", icon: SiVisualstudiocode },
      { name: "Postman", icon: SiPostman },
    ],
  },
];