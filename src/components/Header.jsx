import React from 'react';
import { Link } from "react-router-dom";
import { useTheme } from '../contexts/ThemeContext';


export default function Header() {
    const { isDarkMode, toggleTheme } = useTheme();

    const headerStyle = {
        backgroundColor: isDarkMode ? "#495057" : "#ffffff",
        padding: "16px 0",
        borderBottom: "1px solid #e9ecef",
        marginBottom: "20px",
        textAlign: "center",
        transition: "color 0.3s"
    };

    const linkStyle = {
        color: isDarkMode ? "#ffffff" : "#007bff",
        textDecoration: "none",
        fontWeight: "500",
        margin: "0 12px",
        transition: "color 0.3s"
    };

    const buttonStyle = {
        backgroundColor: isDarkMode ? "#007bff" : "#495057",
        color: "#ffffff",
        border: "none",
        borderRadius: "8px",
        padding: "8px 16px",
        cursor: "pointer",
        marginLeft: "20px",
        transition: "background-color 0.3s"
    }

    return (
        <header style={headerStyle}>
            <nav>
                <Link to="/" style={linkStyle}>Home</Link>
                <Link to="/about" style={linkStyle}>About</Link>
                <Link to="/projects" style={linkStyle}>Projects</Link>
                <button onClick={toggleTheme} style={buttonStyle}>
                    {isDarkMode ? "Light Mode" : "Dark Mode"}
                </button>
            </nav>
        </header>
    )
}