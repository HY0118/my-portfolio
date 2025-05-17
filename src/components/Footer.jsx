import React from "react";

const footerStyle = {
    backgroundColor: "#ffffff",
    padding: "16px 0",
    borderTop: "1px solid #e9ecef",
    marginTop: "20px",
    textAlign: "center"
}

const linkStyle = {
    color: "#007bff",
    textDecoration: "none",
    fontWeight: "500"
}

export default function Footer() {

    return (
        <footer stlye={footerStyle}>
            <p>2025 My Portfolio. All right reserved.</p>
            <p>Created with by <a href="" style={linkStyle}>Codeuck</a></p>
        </footer>
    )
}