import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I’m Garv Verma, a Full Stack Software developer. I specialize in MERN
        stack development, and building real-world projects and master modern
        web technologies. Highly motivated and results-oriented full-stack web
        developer with a strong foundation in programming, web technologies, and
        software development principles. Proficient in creating user-centric,
        responsive, and scalable web applications using modern frameworks and
        tools. Adept at problem-solving, teamwork, and continuous learning, with
        a passion for building impactful solutions. Outside of coding, I enjoy
        continuous learning and sharing knowledge to further develop our skills
        to achieve our goals.
      </p>
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
    </div>
  );
};

export default AboutMeText;
