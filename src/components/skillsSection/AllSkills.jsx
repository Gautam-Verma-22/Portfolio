import SingleSkill from "./SingleSkill";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import { SiSelenium } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { FaGitlab } from "react-icons/fa6";
import { SiDbeaver } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { GrOracle } from "react-icons/gr";
import { IoLogoFirebase } from "react-icons/io5";
import { FaDocker } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { BsFillCCircleFill } from "react-icons/bs";
import { SiTypescript } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants"


const skills = [
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "TypeScript",
    icon: SiTypescript,
  },
  {
    skill: "Python",
    icon: FaPython,
  },
  {
    skill: "C/C++",
    icon: BsFillCCircleFill,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "NextJS",
    icon: SiNextdotjs,
  },
  {
    skill: "NodeJS",
    icon: FaNodeJs,
  },
  {
    skill: "ExpressJS",
    icon: SiExpress,
  },
  {
    skill: "MongoDB",
    icon: SiMongodb,
  },
  {
    skill: "PostgreSQL",
    icon: SiPostgresql,
  },
  {
    skill: "SQL",
    icon: AiOutlineConsoleSql,
  },
  {
    skill: "Oracle",
    icon: GrOracle,
  },
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
  {
    skill: "Bootstrap",
    icon: SiBootstrap,
  },
  {
    skill: "AWS",
    icon: FaAws,
  },
  {
    skill: "Docker",
    icon: FaDocker,
  },
  {
    skill: "Firebase",
    icon: IoLogoFirebase,
  },
  {
    skill: "Jest",
    icon: SiJest,
  },
  {
    skill: "Selenium",
    icon: SiSelenium,
  },
  {
    skill: "Postman",
    icon: SiPostman,
  },
  {
    skill: "Github",
    icon: BsGithub,
  },
  {
    skill: "Gitlab",
    icon: FaGitlab,
  },
  {
    skill: "DBEaver",
    icon: SiDbeaver,
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto animate-garv">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
