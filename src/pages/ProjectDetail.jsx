import React from "react";
import { Link, useParams } from "react-router-dom";

const detailStyle = {
    backgroundColor: "#fffff",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 4px 20px rgba(0,0,0, 0.05)",
    marginBottom: "20px"
}

const titleStyle = {
    marginBottom: "16px",
    color: "#343a40",
}

const descriptionStyle = {
    color: "#495057",
    marginBottom: "12px"
};

const linkStyle = {
    color: "#007bff",
    textDecoration: "none",
    fontWeight: "500",
    display: "block",
    marginBottom: "20px"
};

const backStyle = {
    color: "#007bff",
    textDecoration: "none",
    fontWeight: "500",
    marginTop: "20px"
};


export default function ProjectDetail() {
    const { id } = useParams();
    const [project, setProject] = React.useState({
        id: "",
        name: "",
        description: ""
    });

    async function loadJsonData() {
        try {
            const res = await fetch("/data/projects.json");
            const data = await res.json();
            if (data) {
                const selectedProject = data.find((p) => p.id === Number(id))
                setProject(selectedProject);
            }
        } catch (error) {
            console.error("Failed to load Json Data", error);
        }
    }

    React.useEffect(() => {
        loadJsonData();
    }, [])

    return (
        <div style={detailStyle}>
            <h1 style={titleStyle}>{project.name}</h1>
            <p style={descriptionStyle}>{project.description}</p>
            <a href={project.link} style={linkStyle} target="_black" rel="noopener noreferrer">Visit Project</a>
            <Link to="/projects" style={backStyle}>Back to Projects</Link>
        </div>
    )
}