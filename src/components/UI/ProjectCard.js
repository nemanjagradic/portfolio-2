import { FaGithub } from "react-icons/fa";
import { IoOpenOutline } from "react-icons/io5";
import { FaLink } from "react-icons/fa6";

const ProjectCard = ({
  projectImg,
  title,
  desc,
  programs,
  githubLink,
  netlifyLink,
}) => {
  return (
    <div className="group mb-10 mt-6 h-full w-full overflow-hidden text-center sm:mb-0 sm:p-5">
      <a
        className="cursor-pointer"
        href={netlifyLink}
        target="_blank"
        rel="noreferrer"
      >
        <div
          className={`relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-green/40 before:opacity-0 before:transition-all before:duration-300 before:content-[''] group-hover:before:opacity-100`}
        >
          <span className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 text-4xl text-white opacity-0 transition duration-300 group-hover:opacity-100">
            <FaLink />
          </span>
          <img
            className="h-full w-full overflow-hidden transition-all duration-300 group-hover:scale-[1.02]"
            src={projectImg}
            alt="project"
          ></img>
        </div>
      </a>
      <h1 className="my-2.5 text-lg font-semibold duration-300 group-hover:text-green">
        {title}
      </h1>
      <p className="mb-5 leading-7 text-lightBlack">{desc}</p>
      <div className="mb-5 flex items-center justify-center gap-2">
        {programs.map((program) => (
          <span className="border px-2 py-1 shadow">{program}</span>
        ))}
      </div>
      <div className="flex justify-evenly text-lg">
        <a
          href={githubLink}
          target="_blank"
          rel="noreferrer"
          className="mr-6 flex cursor-pointer items-center transition hover:text-green"
        >
          Code
          <span href={githubLink} className="inline-block">
            <FaGithub className="ml-2.5" />
          </span>
        </a>
        <a
          href={netlifyLink}
          target="_blank"
          rel="noreferrer"
          className="flex cursor-pointer items-center transition hover:text-green"
        >
          Live Demo
          <span className="inline-block">
            <IoOpenOutline className="ml-2.5" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
