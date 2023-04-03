"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "./Icons";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const setThemeMode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <div
      onClick={setThemeMode}
      className="ease ml-3 flex items-center justify-center rounded-full bg-dark p-1 text-light "
    >
      {theme === "light" ? (
        <SunIcon className="fill-dark" />
      ) : (
        <MoonIcon className="fill-dark" />
      )}
    </div>
  );
};

export default ThemeSwitch;
