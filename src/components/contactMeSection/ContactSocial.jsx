import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/garv-verma-42770631a" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/Gautam-Verma-22" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/wd_gautam_verma/?hl=en" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
