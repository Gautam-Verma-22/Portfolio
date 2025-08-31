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
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants"


const skills = [
  {
    skill: "C/C++",
    icon: BsFillCCircleFill,
  },
  {
    skill: "Python",
    icon: FaPython,
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
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "NodeJS",
    icon: FaNodeJs,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "ExpressJS",
    icon: SiExpress,
  },
  {
    skill: "NextJS",
    icon: SiNextdotjs,
  },
  {
    skill: "MongoDB",
    icon: SiMongodb,
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
    skill: "Firebase",
    icon: IoLogoFirebase,
  },
  {
    skill: "Docker",
    icon: FaDocker,
  },
  {
    skill: "Kubernetes",
    icon: SiKubernetes,
  },
  {
    skill: "Selenium",
    icon: SiSelenium,
  },
  {
    skill: "DBEaver",
    icon: SiDbeaver,
  },
  {
    skill: "AWS",
    icon: FaAws,
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
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
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
