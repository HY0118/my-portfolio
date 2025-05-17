import { createContext, useContext, useState } from "react";

// 테마 컨텍스트 생성
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => setIsDarkMode((prev) => !prev);

    const themeStyle = {
        backgroundColor: isDarkMode ? "#343a40" : "#ffffff",
        color: isDarkMode ? "#ffffff" : "#343a40",
        transition: "background-color 0.3s, color 0.3s"
    }

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme, themeStyle }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeContext);
}