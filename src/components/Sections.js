import About from "./Sections/About";
import Resume from "./Sections/Resume";
import Projects from "./Sections/Projects";
import Contact from "./Sections/Contact";
import { useRef } from "react";

const Sections = ({ curSection }) => {
  const sectionRef = useRef(null);
  const sections = ["About", "Resume", "Projects", "Contact"];

  const sectionComponents = {
    About: <About />,
    Resume: <Resume />,
    Projects: <Projects />,
    Contact: <Contact />,
  };

  return (
    <div className="grow large:h-[95%]">
      <div className="relative h-full w-full rounded-r large:overflow-hidden">
        {sections.map((section) => (
          <div
            key={section}
            ref={sectionRef}
            className={`${
              curSection === section
                ? "large:animate-fadeIn"
                : "large:animate-fadeOut"
            } float-right mt-4 h-full w-full rounded bg-white sm:w-[87%] large:absolute large:mt-0 large:w-full large:overflow-y-auto large:rounded-none`}
          >
            {sectionComponents[section]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sections;
