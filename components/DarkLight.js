"use client";
import React from "react";
import { FaCloudMoon } from "react-icons/fa";
import classNames from "classnames";
import { useTheme } from "next-themes";
import { LuSunMoon } from "react-icons/lu";

const DarkLight = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div onClick={toggleTheme} className="fixed top-4 right-4 w-12 h-[18px] rounded-full bg-red-300 flex items-center text-white text-xs">
     <span
        className={classNames(
          "w-7 h-7 flex items-center justify-center bg-red-500 rounded-full transition-all duration-500",
          {
            "ml-5": theme === "dark",
          }
        )}
      >
        {theme === "light" ? (
          <FaCloudMoon className="text-white" size={14} />
        ) : (
          <LuSunMoon className="text-white" size={14} />
        )}
      </span>
    </div>
  );
};

export default DarkLight;
