import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I'm Garv Verma, a Full Stack Software Developer specializing in comprehensive software development and building real-world applications with modern web technologies. As a highly motivated and results-oriented developer, I possess a strong foundation in programming, web technologies, and software development principles, with expertise in creating user-centric, responsive, and scalable web applications using cutting-edge frameworks and tools.<br/>
        My technical proficiency extends to web scraping automation using Selenium, developing intelligent chatbot solutions with both knowledge base integration and RAG (Retrieval-Augmented Generation) implementation for enhanced conversational AI. I'm experienced in handling complex data pagination systems and leveraging AWS cloud services, including AWS Bedrock for advanced AI and machine learning capabilities.<br/>
        Adept at problem-solving, teamwork, and continuous learning, I'm passionate about building impactful solutions that drive meaningful results. Beyond coding, I'm committed to continuous learning and knowledge sharing, collaborating with fellow developers to enhance our collective skills and achieve ambitious goals together..
      </p>
      <div className="flex gap-5">
        <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
          <Link
            spy={true}
            smooth={true}
            duration={500}
            offset={-120}
            to="projects"
            className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
          >
            My Projects
          </Link>
        </button>

        <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
          <a
            href="https://drive.google.com/file/d/1avX5AybKTNWy83FGpX-JoC-anbmGT-Kq/view?usp=sharing" // Replace with your resume link
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Recommended for security when using target="_blank"
            className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
          >
            Download Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default AboutMeText;
