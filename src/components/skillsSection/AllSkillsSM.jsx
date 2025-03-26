import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { BsFillCCircleFill, BsGithub } from "react-icons/bs";

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
    skill: "MongoDB",
    icon: SiMongodb,
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
    skill: "Github",
    icon: BsGithub,
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
  {
    skill: "Bootstrap",
    icon: FaBootstrap,
  },
];

const AllSkillsSM = () => {
  return (
    <div className="overflow-hidden h-[400px] relative"> {/* Fixed height for the container */}
      <motion.div
        className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12"
        style={{
          animation: "scrollUp 12s linear infinite", // Apply the vertical scroll animation
        }}
      >
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              key={index}
              className="flex flex-col items-center"
            >
              <item.icon className="text-7xl text-orange" />
              <p className="text-center mt-4">{item.skill}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default AllSkillsSM;