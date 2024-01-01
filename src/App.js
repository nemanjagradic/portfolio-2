import Profile from "./components/Profile";
import Sections from "./components/Sections";
import Bubbles from "./components/Bubbles";
import { useState } from "react";

function App() {
  const [curSection, setCurSection] = useState("About");

  const changeSection = (section) => {
    setCurSection(section);
    const sectionEl = document.querySelector(`#${section}`);
    if (sectionEl) sectionEl.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative">
      <Bubbles />
      <div className="flex w-full items-center justify-center bg-gradient-to-br from-[#50a3a2] to-green large:h-screen">
        <div className="xs:w-3/4 relative w-11/12 items-center font-Roboto sm:w-[600px] large:flex large:h-[600px] large:w-10/12">
          <Profile curSection={curSection} changeSection={changeSection} />
          <Sections curSection={curSection} />
        </div>
      </div>
    </div>
  );
}

export default App;
