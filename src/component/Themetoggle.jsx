import React, { useEffect } from "react";
import { useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "../lib/util";
const Themetoggle = () => {
  const [DarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedtheme = localStorage.getItem("theme");
    if (storedtheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
        localStorage.setItem("theme", "light");
        setDarkMode(false);
    }
  }, []);

  const themeToggle = () => {
    if (DarkMode) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        setDarkMode(false);
    } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        setDarkMode(true);
    }
  };
  return (
    <button onClick={themeToggle} className={cn("fixed max-sm:hidden top-3 right-2 z-50 p-3 rounded-full transition-colors duration-300",
        "focus:outline-hidden"
    )}>
      {DarkMode ? (
        <Sun size={24} className=" text-white" />
      ) : (
        <Moon size={24} className=" text-blue-300" />
      )}
    </button>
  );
};

export default Themetoggle;
