import React from 'react'; // Import React to use React.Fragment
import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Software Engineering Intern",
    company: "Dataflow",
    date: "Aug 2025 - Present",
    responsibilities: [
      "Full-stack development of CommunifAI portal.",
      "Integrated chatbot using Amazon Bedrock and AI tools.",
      "Developed RESTful APIs with Express.js and Postman.",
      "Automated testing with Jest, achieving 90%+ coverage.",
      "Integrated SonarQube and Trivy in CI/CD pipeline.",
    ],
  },
  {
    job: "Front-End Developer",
    company: "VRV Security",
    date: "Nov 2024 - Mar 2025",
    responsibilities: [
      "Implemented reusable components for large-scale apps.",
      "Optimized web application performance.",
      "Built responsive and scalable web applications.",
      "Generated innovative ideas for better UX.",
    ],
  },
];

const AllExperiences = () => {
  return (
    /* This parent div is completely unchanged from your original code */
    <div className="flex sm:flex-row items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          /* Using <React.Fragment> with a key is a small but necessary change.
             React requires a unique key on the parent element inside a .map() */
          <React.Fragment key={index}>
            {/* The key is removed from here as it's now on the parent Fragment */}
            <SingleExperience experience={experience} />

            {/* This condition ensures the arrow only appears BETWEEN experiences */
            index < experiences.length - 1 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                /* This is the new part: A flex container for the line and arrow */
                className="flex items-center gap-x-3 mx-4"
              >
                {/* The arrow icon */}
                <FaArrowRightLong className="text-[#fb9718] text-4xl"/>
              </motion.div>
            ) : null /* Using null is slightly better practice than "" */
            }
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default AllExperiences;