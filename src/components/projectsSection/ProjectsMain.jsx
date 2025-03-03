import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { link } from "framer-motion/client";

const projects = [
  {
    name: "Youtube Sentiment Analyzer",
    year: "2024",
    techStack: "React, Node, Express, MongoDB",
    align: "right",
    image: "/images/CommentAnalyzerSS.png",
    link: "https://youtube-comment-analyzer-delta.vercel.app/",
  },
  {
    name: "Password Manager",
    year: "2025",
    align: "left",
    image: "/images/website-img-2.webp",
    link: "#",
  },
  {
    name: "Chat Application",
    year: "2025",
    align: "right",
    image: "/images/website-img-3.jpg",
    link: "#",
  },
  {
    name: "Omni Food",
    year: "2024",
    techStack: "HTML, Bootstrap, JavaScript, jQuery",
    align: "left",
    image: "/images/OmniFoodSS.jpg",
    link: "https://omni-food-ws4s.onrender.com",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              techStack={project.techStack}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
