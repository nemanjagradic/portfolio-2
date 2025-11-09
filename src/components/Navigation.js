import { FaRegUser } from "react-icons/fa";
import { AiOutlineProfile } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";

const Navigation = ({ curSection, changeSection }) => {
  const navLinks = [
    { link: "About", icon: <FaRegUser /> },
    { link: "Resume", icon: <AiOutlineProfile /> },
    { link: "Projects", icon: <FaEye /> },
    { link: "Contact", icon: <FaRegPaperPlane /> },
  ];

  return (
    <div className="bg-primaryBackground text-secondaryText z-20 mr-2.5 w-full rounded sm:w-20">
      <ul className="flex list-none text-xs uppercase sm:block sm:divide-y">
        {navLinks.map((navLink, i) => (
          <li
            key={navLink.link}
            onClick={changeSection.bind(null, navLink.link)}
            className={`bg-primaryBackground flex-1 cursor-pointer py-4 font-semibold sm:px-0 ${
              curSection === navLink.link ? "text-accent" : ""
            } hover:text-accent text-center transition ${
              i === 0 ? "sm:rounded-t" : ""
            } ${i === navLinks.length - 1 ? "sm:rounded-b" : ""}`}
          >
            <span className="m-auto mb-1.5 block w-fit text-xl">
              {navLink.icon}
            </span>
            {navLink.link}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
