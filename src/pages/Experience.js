import React from "react";
import resume_pdf from '../assets/Resume.pdf';

function Experience() {
    return (
        <div>
            <center>
                <h1 className="bigFont">My Experience</h1>
                <a href={resume_pdf}><button className="all-btn">Download Resume</button></a>
            </center>
            <div className="skills-container">
                <div className="skillBox orangeShadow">
                    <img className="skillLogo" src={require("../assets/HTML-Logo.png")} alt="HTML Logo" />
                </div>
                <div className="skillBox blueShadow">
                    <img className="skillLogo2" src={require("../assets/CSS-Logo.png")} alt="CSS Logo" />
                </div>
                <div className="skillBox purpleShadow">
                    <img className="skillLogo" src={require("../assets/bootstrap-logo.png")} alt="bootstrap Logo" />
                    <h4>Bootstrap</h4>
                </div>
                <div className="skillBox greyShadow">
                    <img className="skillLogo2" src={require("../assets/express-logo.png")} alt="express Logo" />
                </div>
                <div className="skillBox greyShadow">
                    <img className="skillLogo" src={require("../assets/GitHub-Logo.png")} alt="GitHub Logo" />
                    <h4>GitHub</h4>
                </div>
                <div className="skillBox pinkShadow">
                    <img className="skillLogo" src={require("../assets/graphQL-logo.png")} alt="graphQL Logo" />
                    <h4>GraphQL</h4>
                </div>
                <div className="skillBox yellowShadow">
                    <img className="skillLogo" src={require("../assets/JavaScript-logo.png")} alt="Javascript Logo" />
                    <h4>Javascript</h4>
                </div>
                <div className="skillBox greenShadow">
                    <img className="skillLogo2" src={require("../assets/mongodb-logo.png")} alt="mongodb Logo" />
                </div>
                <div className="skillBox orangeShadow">
                    <img className="skillLogo2" src={require("../assets/MySQL-Logo.png")} alt="MySQL Logo" />
                </div>
                <div className="skillBox greenShadow">
                    <img className="skillLogo" src={require("../assets/nodejs-logo.png")} alt="nodejs Logo" />
                    <h4>Node</h4>
                </div>
                <div className="skillBox blueShadow">
                    <img className="skillLogo" src={require("../assets/React-logo.png")} alt="React Logo" />
                    <h4>React</h4>
                </div>
            </div>
        </div>
    )
}

export default Experience;