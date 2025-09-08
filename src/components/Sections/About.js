import Title from "../UI/Title";

const About = () => {
  return (
    <div className="p-7" id="About">
      <Title>About Me</Title>
      <div className="flex flex-wrap justify-between">
        <div className="sm:fading-border-to-b relative basis-full py-6 sm:flex-1">
          <p className="pr-6 leading-7 text-lightBlack">
            <span className="font-semibold">Hello! I'm Nemanja Gradic.</span>
            <br></br>A dedicated Front-End Developer with a passion for crafting
            seamless digital experiences. I embrace the fusion of creativity and
            precision, focusing on creating responsive, accessible, and
            aesthetically pleasing web applications, while also having
            experience with backend development to build full-stack solutions. I
            relish the opportunity to contribute to innovative projects and
            thrive in dynamic team environments.
          </p>
        </div>
        <div className="basis-full py-6 sm:flex-1 sm:px-3">
          <div className="fading-border-to-c relative mb-3 flex items-center justify-between pb-3">
            <h2 className="bg-green px-2 py-0.5 text-sm text-white">Age:</h2>
            <p>25</p>
          </div>
          <div className="fading-border-to-c relative mb-3 flex items-center justify-between pb-3">
            <h2 className="bg-green px-2 py-0.5 text-sm text-white">
              Residence:
            </h2>
            <p>Serbia</p>
          </div>
          <div className="relative mb-3 flex items-center justify-between pb-3">
            <h2 className="bg-green px-2 py-0.5 text-sm text-white">
              Address:
            </h2>
            <p>Belgrade, Serbia</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
