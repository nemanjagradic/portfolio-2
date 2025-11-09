import Title from "../UI/Title";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  const emailAddress = "nemanjagradic12345@gmail.com";
  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };
  return (
    <div className="p-7" id="Contact">
      <Title>Get In Touch</Title>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2829.0478382874417!2d20.39107595381263!3d44.84095911555915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a65bece8e4f27%3A0x26073f7b0aeefc5!2sPrvomajska%2025%2C%20Beograd!5e0!3m2!1sen!2srs!4v1703845460660!5m2!1sen!2srs"
        className="my-6 h-72 w-full"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="address"
      ></iframe>
      <div className="flex flex-wrap items-center sm:justify-between">
        <div className="fading-border-to-c relative mb-2 basis-full items-center justify-between pb-3 sm:basis-[45%] sm:pb-1">
          <h2 className="bg-accent mb-1 w-fit px-2 py-0.5 text-sm text-white">
            Address:
          </h2>
          <p className="text-secondaryText text-sm">Belgrade, Serbia</p>
        </div>
        <div className="fading-border-to-c relative mb-2 basis-full items-center justify-between pb-3 sm:basis-[45%] sm:pb-1">
          <h2 className="bg-accent mb-1 mr-2.5 w-fit px-2 py-0.5 text-sm text-white">
            Email:
          </h2>
          <a
            className="text-secondaryText hover:text-accent cursor-pointer text-sm transition"
            href={`mailto:${emailAddress}`}
            onClick={handleEmailClick}
          >
            {emailAddress}
          </a>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between">
        <div className="fading-border-to-c relative mb-2 basis-full items-center justify-between pb-3 sm:basis-[45%] sm:pb-1">
          <h2 className="mb-1 w-fit bg-[#3c8136] px-2 py-0.5 text-sm text-white">
            Phone:
          </h2>
          <p className="text-secondaryText text-sm">+381 628155263</p>
        </div>
        <div className="fading-border-to-c relative mb-2 basis-full items-center justify-between pb-3 sm:basis-[45%] sm:pb-1">
          <h2 className="bg-accent mb-1 w-fit px-2 py-0.5 text-sm text-white">
            Social Networks:
          </h2>
          <p className="text-primaryText">
            <a
              href="https://github.com/nemanjagradic"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent mr-2.5 inline-block cursor-pointer transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/nemanja-gradic-33230b1bb/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent mr-2.5 inline-block cursor-pointer transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/conee_g/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent inline-block cursor-pointer transition"
            >
              <FaInstagram />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
