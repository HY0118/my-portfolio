import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";

const gridStyle = {
    display: "grid",
    gridTemplateColums: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "20px",
    marginTop: "20px"
}

export default function Projects() {
    const [projects, setProjects] = useState([]);

    async function loadJsonData() {
        try {
            const res = await fetch("/data/projects.json");
            const data = await res.json();
            setProjects(data);
        } catch (error) {
            console.error("Failed to load Json Data", error);
        }
    }

    useEffect(() => {
        loadJsonData();
    }, []);

    return (
        <section>
            <h1>Projects</h1>
            <div style={gridStyle}>
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    )
}
