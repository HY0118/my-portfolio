import React from "react";
import { Link } from "react-router-dom";

const cardStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 4px 20px rgba(0,0,0, 0.05)",
    transition: "transform 0.2s, box-shadow 0.2s",
    marginBottom: "20px"
}

const linkStyle = {
    color: "#007bff",
    textDecoration: "none",
    fontWeight: "500",
};

const titleStyle = {
    marginBottom: "8px",
    color: "#343a40"
};

const descriptionStyle = {
    color: "#495057",
    marginBottom: "12px"
};

export default function ProjectCard(props) {
    const { project } = props;

    return (
        <div style={cardStyle}>
            <h2 style={titleStyle}>{project.name}</h2>
            <p style={descriptionStyle}>{project.description}</p>
            <Link to={`/projects/${project.id}`} style={linkStyle}>View Details</Link>
        </div>
    );
}