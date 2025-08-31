import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center max-w-lg">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl  uppercase text-lightGrey "
      >
        Full stack Software developer
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
      >
        Garv <br className="sm:hidden md:block" />
        Verma
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4"
      >
        A passionate Software and Generative AI Developer with a deep-seated drive for building intelligent systems at the intersection of code and machine learning. My expertise is centered on the end-to-end ML/AI lifecycle, leveraging MLOps principles to ensure scalable, reproducible, and efficient workflows. <br />

        I have hands-on experience architecting and deploying solutions on AWS, utilizing S3 for robust data lake management and Amazon Bedrock to harness the power of foundational models like Claude and others. I specialize in using frameworks like LangChain to create sophisticated, context-aware applications that bridge the gap between powerful LLMs and practical, production-ready use cases. <br />

        My core motivation is a relentless curiosity for learning new technologies and applying them to solve complex, real-world problems. I thrive in environments that challenge me to push the boundaries of what's possible with AI <br /> with a keen interest in learning new technologies.
      </motion.p>
    </div>
  );
};

export default HeroText;
