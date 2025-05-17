import React from 'react';

const sectionStyle = {
    textAlign: "center",
    padding: "40px 0"
}

const headingStyle = {
    fontSize: "36px",
    color: "#343a40",
    marginBottom: "16px"
}

const textStyle = {
    color: "#495057",
    fontSize: "18px"
}

export default function About() {
    return (
        <section style={sectionStyle}>
            <h1 style={headingStyle}>
                About me
            </h1>
            <p style={textStyle}>Hi, I'm a passionate front-end developer with a love for creating beautiful and functional web experiences.</p>
        </section>
    )
}