"use client";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();

    return (
        <>
            <label className="relative inline-flex cursor-pointer select-none items-center">
                <input
                    aria-label="Toggle theme"
                    type="checkbox"
                    checked={theme === "dark"}
                    onChange={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                    }
                    className="sr-only"
                />
                <span className="label flex items-center text-sm font-medium text-card-foreground">
                    <SunIcon className="size-6" />
                </span>
                <span
                    className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
                        theme === "dark" ? "bg-[#212b36]" : "bg-[#CCCCCE]"
                    }`}
                >
                    <span
                        className={`dot h-6 w-6 rounded-full bg-white duration-200 ${
                            theme === "dark" ? "translate-x-[28px]" : ""
                        }`}
                    ></span>
                </span>
                <span className="label flex items-center text-sm font-medium text-card-foreground">
                    <MoonIcon className="size-6" />
                </span>
            </label>
        </>
    );
};

export default ThemeSwitcher;
