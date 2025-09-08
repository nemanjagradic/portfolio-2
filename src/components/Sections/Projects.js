import ProjectCard from "../UI/ProjectCard";
import Title from "../UI/Title";

const Projects = () => {
  return (
    <div className="p-7" id="Projects">
      <Title>Projects</Title>
      <div className="flex flex-wrap">
        <div className="sm:fading-border-to-b relative h-full basis-full sm:flex-1">
          <ProjectCard
            projectImg="./images/project-1.png"
            title="Miini - E-Commerce Website"
            desc="A full-stack e-commerce app designed to help users quickly find and purchase products with ease."
            programs={[
              "React",
              "Tailwind CSS",
              "Node.js",
              "Express",
              "Mongo DB",
            ]}
            githubLink="https://github.com/nemanjagradic/miini-e-commerce"
            netlifyLink="https://miini-frontend.onrender.com/"
          />
          <ProjectCard
            projectImg="./images/project-4.png"
            title="Realestate.com - Real Estate Website"
            desc="Real estate website where users can search for diverse range of properties available for purchase or rent with various filters and location to fulfill their needs."
            programs={["React", "Chakra UI"]}
            githubLink="https://github.com/nemanjagradic/Real-estate"
            netlifyLink="https://realestatecom.netlify.app/"
          />
          <ProjectCard
            projectImg="./images/project-2.png"
            title="Ico crypto - Cryptocurrency Website"
            desc="Ico Crypto is a crypto app that allows users to search for information and showing more details about different cryptocurrencies in real-time."
            programs={["React", "SCSS"]}
            githubLink="https://github.com/nemanjagradic/Ico-cryptocurrency"
            netlifyLink="https://ico-crypto.netlify.app/"
          />
        </div>
        <div className="h-full basis-full sm:flex-1">
          <ProjectCard
            projectImg="./images/project-3.png"
            title="Nouhotel - Booking Room Website"
            desc="Booking application that provides users with the reservation of luxury rooms. On the application, you can choose a room, number of adults, children and length of stay."
            programs={["React", "CSS", "Bootstrap"]}
            githubLink="https://github.com/nemanjagradic/Nouhotel"
            netlifyLink="https://nouhotel.netlify.app/"
          />
          <ProjectCard
            projectImg="./images/project-5.png"
            title="GlowGuide - Color Matching Website"
            desc="GlowGuide is a web application that lets users choose colors, number of colors, and color harmony to get the best matching colors based on a chosen context. The app originally used the Groq AI API for matching colors; the demo is no longer active since the free trial expired, but the full source code is available on GitHub."
            programs={["React", "CSS"]}
            githubLink="https://github.com/chingu-voyages/v49-tier2-team-14"
            netlifyLink="https://glowguideforcolors.netlify.app/"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
