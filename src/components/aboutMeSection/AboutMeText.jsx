import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I'm Garv Verma, a Full-Stack Web Developer specializing in MERN stack (MongoDB, Express.js, React.js, Node.js) with expertise in TypeScript, RESTful APIs, and real-time applications using Socket.IO. Proficient in cloud services (AWS S3, ECS, Lambda, Bedrock), CI/CD pipeline (Git, GitHub Actions), and test automation (Selenium, Jest, 90%+ code coverage). Strong background in Agile development, code quality analysis (SonarQube), and security scanning (Trivy).<br/>
        My technical proficiency extends to developing intelligent chatbot solutions using Amazon Bedrock and Generative AI tools, implementing automated testing with Jest and React Testing Library, and building full-stack applications with real-time multiplayer capabilities. I'm experienced in leveraging AWS cloud services including AWS Bedrock, Knowledge Bases, ECS, and Lambda for scalable solutions.<br/>
        Adept at problem-solving, teamwork, and continuous learning, I'm passionate about building impactful solutions that drive meaningful results. I specialize in creating user-centric, responsive, and scalable web applications using cutting-edge frameworks and tools, with a strong foundation in Agile development and modern DevOps practices.
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
            href="https://drive.google.com/file/d/1KGzkV3UYUj162_6s85_3yUGwMS1ozIQm/view?usp=sharing" // Replace with your resume link
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
