"use client";

import { FaReact, FaNodeJs, FaPython, FaVuejs, FaCss3, FaHtml5 } from 'react-icons/fa';
import { SiTypescript, SiDjango, SiNextDotJs, SiJavascript, SiNuxtDotJs, SiExpress, SiTailwindcss, SiBootstrap, SiFlask, SiMongodb, SiMysql } from 'react-icons/si';

const techStack = [
  // JavaScript Frameworks and Libraries
  { icon: <FaReact className="text-accent text-6xl" />, name: 'React' },
  { icon: <FaVuejs className="text-accent text-6xl" />, name: 'Vue.js' },
  { icon: <SiNextDotJs className="text-accent text-6xl" />, name: 'Next.js' },
  { icon: <SiNuxtDotJs className="text-accent text-6xl" />, name: 'Nuxt.js' },
  { icon: <SiExpress className="text-accent text-6xl" />, name: 'Express' },
  { icon: <SiJavascript className="text-accent text-6xl" />, name: 'JavaScript' },
  { icon: <SiTypescript className="text-accent text-6xl" />, name: 'TypeScript' },
  { icon: <FaNodeJs className="text-accent text-6xl" />, name: 'Node.js' },

  // Python Frameworks and Libraries
  { icon: <FaPython className="text-accent text-6xl" />, name: 'Python' },
  { icon: <SiDjango className="text-accent text-6xl" />, name: 'Django' },
  { icon: <SiFlask className="text-accent text-6xl" />, name: 'Flask' },

  // CSS Frameworks
  { icon: <FaCss3 className="text-accent text-6xl" />, name: 'CSS3' },
  { icon: <SiTailwindcss className="text-accent text-6xl" />, name: 'Tailwind CSS' },
  { icon: <SiBootstrap className="text-accent text-6xl" />, name: 'Bootstrap' },

  // HTML
  { icon: <FaHtml5 className="text-accent text-6xl" />, name: 'HTML5' },

  // Databases
  { icon: <SiMysql className="text-accent text-6xl" />, name: 'MySQL' },
  { icon: <SiMongodb className="text-accent text-6xl" />, name: 'MongoDB' },
];

const TechStack = () => {
  return (
    <section className="pt-12 pb-12 xl:pt-0 xl:pb-0">
    <div className="container mx-auto">
      <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
        {techStack.map((tech, index) => (
          <div key={index} className="flex-1 flex flex-col items-center justify-center xl:justify-start">
            {tech.icon}
            <p className="text-xl mt-2">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default TechStack
