import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";
import Navigation from "./Navigation";

const Profile = ({ changeSection, curSection }) => {
  return (
    <div className="h-full basis-[42%]">
      <div className="flex h-full flex-col items-center sm:flex-row">
        <Navigation curSection={curSection} changeSection={changeSection} />
        <div className="relative z-10 mt-4 h-full w-full shadow-[10px_5px_15px_rgba(0,0,0,0.05)] large:mt-0">
          <div className="frame-bg absolute -left-4 -top-4 z-[-1] h-full w-full rounded"></div>
          <div className="h-full">
            <div className="before:bg-primaryBackground after:bg-primaryBackground relative h-[60%] w-full overflow-hidden rounded-t before:absolute before:-bottom-[86%] before:-left-[130px] before:z-10 before:h-full before:w-[85%] before:rotate-[14deg] before:content-[''] after:absolute after:-bottom-[86%] after:-right-[130px] after:z-10 after:h-full after:w-[85%] after:-rotate-[14deg] after:content-['']">
              <img
                className="h-full w-full"
                src="./images/portfolio-img.jpeg"
                alt="profile"
              />
            </div>
            <div className="bg-primaryBackground flex h-[40%] flex-col rounded-b">
              <div className="fading-border-to-c relative flex-1 text-center">
                <h1 className="text-primaryText pt-5 text-center text-3xl font-semibold tracking-wide">
                  Nemanja Gradic
                </h1>
                <h2 className="text-accent mb-4 mt-2.5">Front-End Developer</h2>
                <a
                  href="https://www.linkedin.com/in/nemanja-gradic-33230b1bb/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primaryText hover:text-accent mx-2 inline-block cursor-pointer text-lg transition"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://github.com/nemanjagradic"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primaryText hover:text-accent mx-2 inline-block cursor-pointer text-lg transition"
                >
                  <FaGithub />
                </a>
              </div>
              <div
                onClick={changeSection.bind(null, "Contact")}
                className="text-primaryText hover:text-accent group w-full cursor-pointer py-5 text-center transition duration-300"
              >
                <p className="text-sm font-semibold uppercase tracking-wider">
                  <span className="mr-2 group-hover:mr-4">Contact Me</span>
                  <span className="inline-block">
                    <FaRegPaperPlane />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
