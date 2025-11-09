import Profile from "./components/Profile";
import Sections from "./components/Sections";
import Bubbles from "./components/Bubbles";
import { useState } from "react";
import DarkModeCircle from "./components/DarkModeCircle.js";

function App() {
  const [curSection, setCurSection] = useState("About");
  const changeSection = (section) => {
    setCurSection(section);
    const sectionEl = document.querySelector(`#${section}`);
    if (sectionEl) sectionEl.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative">
      <DarkModeCircle />
      <Bubbles />
      <div className="body-bg flex w-full items-center justify-center large:h-screen">
        <div className="relative w-11/12 items-center font-Roboto min-[550px]:w-3/4 sm:w-[600px] large:flex large:h-[600px] large:w-10/12">
          <Profile curSection={curSection} changeSection={changeSection} />
          <Sections curSection={curSection} />
        </div>
      </div>
    </div>
  );
}

export default App;
