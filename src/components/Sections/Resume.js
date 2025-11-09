import Title from "../UI/Title";
import { FaGraduationCap } from "react-icons/fa6";
import { FaUniversity } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import { FaFlag } from "react-icons/fa";
import ResumeCard from "../UI/ResumeCard";
import CircleProgress from "../UI/CircleProgress";
import Dots from "../UI/Dots";

const Resume = () => {
  return (
    <div className="p-7" id="Resume">
      <Title>Resume</Title>
      <div className="grid sm:grid-cols-[repeat(auto-fill,minmax(50%,1fr))]">
        <div className="sm:fading-border-to-b relative sm:pr-8 large:pl-4">
          <h1 className="fading-border-to-c text-primaryText relative flex items-center py-6 font-semibold uppercase">
            <span className="text-accent mr-2.5 text-2xl">
              <FaGraduationCap />
            </span>
            Experience
          </h1>
          <ResumeCard
            age={{ from: "2024", to: " 2024" }}
            position="Web developer"
            place="Chingu"
            desc="Collaborated remotely with a team to develop a color matching app using React. Contributed to designing, coding, and testing the application, ensuring a pleasing user experience and effective color matching functionality."
          />
          <ResumeCard
            age={{ from: "2021", to: " 2022" }}
            position="Online orders"
            place="Delhaize Group"
            desc="Receiving orders from customers via mail, phone, or
            other electronic means. Obtaining customers details and
            billing information, and entering the information correctly
            on the order form."
          />
        </div>
        <div className="sm:pl-8 large:pr-4">
          <h1 className="fading-border-to-c text-primaryText relative flex items-center py-6 font-semibold uppercase">
            <span className="text-accent mr-2.5 text-2xl">
              <FaUniversity />
            </span>
            Education
          </h1>
          <ResumeCard
            age={{ from: "2018", to: " 2023" }}
            position="Bachelor of Information and Technology"
            place="University Singidunum"
            desc="Learning and working with various
            technologies during university throughout
            projects and tasks."
            borderClass="fading-border-to-c"
          />
          <ResumeCard
            age={{ from: "2022", to: " 2023" }}
            position="The Complete Javascript Course"
            place="Udemy - Jonas Schmedtmann"
          />
          <ResumeCard
            age={{ from: "2023", to: " 2023" }}
            position="React Course (React Router & Redux)"
            place="Udemy - Maximilian Schwarzmüller"
            borderClass="fading-border-to-c"
          />
          <ResumeCard
            age={{ from: "2024", to: " 2025" }}
            position="Complete Node.js, Express & MongoDB Bootcamp"
            place="Udemy - Jonas Schmedtmann"
          />
          <ResumeCard
            age={{ from: "2025", to: " 2025" }}
            position="Understanding TypeScript"
            place="Udemy - Maximilian Schwarzmüller"
          />
        </div>
        <div className="sm:fading-border-to-b relative sm:pl-4 sm:pr-8">
          <h1 className="fading-border-to-c text-primaryText relative mb-5 flex items-center py-6 font-semibold uppercase">
            <span className="text-accent mr-2.5 text-2xl">
              <IoCodeSlash />
            </span>
            Coding
          </h1>
          <div className="text-secondaryText flex flex-wrap justify-around gap-y-5 sm:justify-between">
            <div className="basis-2/5">
              <div className="m-auto w-[100px] sm:w-full">
                <CircleProgress valueEnd={90} />
                <p className="mt-2 text-center text-sm">HTML5 / CSS3</p>
              </div>
            </div>
            <div className="basis-2/5">
              <div className="m-auto w-[100px] sm:w-full">
                <CircleProgress valueEnd={75} />
                <p className="mt-2 text-center text-sm">
                  React / TypeScript / JavaScript
                </p>
              </div>
            </div>
            <div className="basis-2/5">
              <div className="m-auto w-[100px] sm:w-full">
                <CircleProgress valueEnd={75} />
                <p className="mt-2 text-center text-sm">Jira</p>
              </div>
            </div>
            <div className="basis-2/5">
              <div className="m-auto w-[100px] sm:w-full">
                <CircleProgress valueEnd={80} />
                <p className="mt-2 text-center text-sm">SASS / Tailwind</p>
              </div>
            </div>
            <div className="basis-2/5">
              <div className="m-auto w-[100px] sm:w-full">
                <CircleProgress valueEnd={50} />
                <p className="mt-2 text-center text-sm">
                  Node.js / Express / MongoDB
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:pl-8 sm:pr-4">
          <h1 className="fading-border-to-c text-primaryText relative mb-5 flex items-center py-6 font-semibold uppercase">
            <span className="text-accent mr-2.5 text-2xl">
              <FaFlag />
            </span>
            Languages
          </h1>
          <div>
            <p className="text-secondaryText mb-3">Serbian</p>
            <Dots percentage={100} />
          </div>
          <div>
            <p className="text-secondaryText my-3">English</p>
            <Dots percentage={70} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
