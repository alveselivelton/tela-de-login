import { useEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState<string>("");

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme("dark");
    } else {
      setTheme("");
    }
  }, []);

  const changeTheme = () => {
    if (!theme) {
      setTheme("dark");

      localStorage.removeItem("theme");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("");
      localStorage.removeItem("theme");
      localStorage.setItem("theme", "light");
    }
  };

  return { theme, changeTheme };
};
