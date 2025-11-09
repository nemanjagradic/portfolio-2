import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkModeCircle = () => {
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem("isDark");
    if (stored !== null) return stored === "true";
    return document.documentElement.classList.contains("dark");
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("isDark", isDark);
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed right-12 top-[68px] z-30 flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent bg-primaryBackground text-accent shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl min-[550px]:right-8 min-[550px]:top-8
        large:h-14 large:w-14
      "
    >
      {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
      <span className="absolute -inset-0.5 rounded-full bg-accent opacity-20 blur-md transition-all duration-300"></span>
    </button>
  );
};

export default DarkModeCircle;
