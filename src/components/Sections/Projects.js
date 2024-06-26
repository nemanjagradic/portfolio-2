import ProjectCard from "../UI/ProjectCard";
import Title from "../UI/Title";

const Projects = () => {
  return (
    <div className="p-7" id="Projects">
      <Title>Projects</Title>
      <div className="flex flex-wrap">
        <div className="sm:fading-border-to-b relative h-full basis-full sm:flex-1">
          <ProjectCard
            projectImg="./images/project-3.png"
            title="Nouhotel - Booking Room Website"
            desc="Booking application that provides users with the reservation of luxury rooms. On the application, you can choose a room, number of adults, children and length of stay."
            programs={["React", "CSS", "Bootstrap"]}
            githubLink="https://github.com/nemanjagradic/Nouhotel"
            netlifyLink="https://nouhotel.netlify.app/"
          />
          <ProjectCard
            projectImg="./images/project-2.png"
            title="Ico crypto - Cryptocurrency Website"
            desc="Ico Crypto is a crypto app that allows users to search for information and showing more details about different cryptocurrencies in real-time."
            programs={["React", "SCSS"]}
            githubLink="https://github.com/nemanjagradic/Ico-cryptocurrency"
            netlifyLink="https://ico-crypto.netlify.app/"
          />
          <ProjectCard
            projectImg="./images/project-5.png"
            title="GlowGuide - Color Matching Website"
            desc="GlowGuide is a web application that gives users various option like choosing number of colors and color harmony, so they can get best matching colors based on a chosen context."
            programs={["React", "CSS"]}
            githubLink="https://github.com/chingu-voyages/v49-tier2-team-14"
            netlifyLink="https://glowguideforcolors.netlify.app/"
          />
        </div>
        <div className="h-full basis-full sm:flex-1">
          <ProjectCard
            projectImg="./images/project-4.png"
            title="Realestate.com - Real Estate Website"
            desc="Real estate website where users can search for diverse range of properties available for purchase or rent with various filters and location to fulfill their needs."
            programs={["React", "Chakra UI"]}
            githubLink="https://github.com/nemanjagradic/Real-estate"
            netlifyLink="https://realestatecom.netlify.app/"
          />
          <ProjectCard
            projectImg="./images/project-1.png"
            title="Miini - E-Commerce Website"
            desc="Main focus of this website is on simplicity to make easier so that users can find and buy a specific product with ease."
            programs={["React", "Tailwind CSS"]}
            githubLink="https://github.com/nemanjagradic/miini-e-commerce"
            netlifyLink="https://miini-e-commerce.netlify.app/"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
