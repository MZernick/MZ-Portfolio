import React from "react";
import Resume from "../components/resume";

function Experience() {
    return (
        <div>
            {/* <Header /> */}
            <div>
                <h1>My Experience: </h1>
                <Resume />
            </div>
            <div className="skills-container">
                <div className="skillBox orangeShadow">
                    <img src={require("../assets/HTML-Logo.png")} alt="HTML Logo" />
                    <p>HTML</p>
                </div>
                <div className="skillBox blueShadow">
                    <img src={require("../assets/CSS-Logo.png")} alt="CSS Logo" />
                    <p>CSS</p>
                </div>
                <div className="skillBox purpleShadow">
                    <img src={require("../assets/bootstrap-logo.png")} alt="bootstrap Logo" />
                    <p>Bootstrap</p>
                </div>
                <div className="skillBox greyShadow">
                    <img src={require("../assets/express-logo.png")} alt="express Logo" />
                    <p>Express</p>
                </div>
                <div className="skillBox greyShadow">
                    <img src={require("../assets/GitHub-Logo.png")} alt="GitHub Logo" />
                    <p>GitHub</p>
                </div>
                <div className="skillBox pinkShadow">
                    <img src={require("../assets/graphQL-logo.png")} alt="graphQL Logo" />
                    <p>GraphQL</p>
                </div>
                <div className="skillBox yellowShadow">
                    <img src={require("../assets/JavaScript-logo.png")} alt="Javascript Logo" />
                    <p>Javascript</p>
                </div>
                <div className="skillBox greenShadow">
                    <img src={require("../assets/mongodb-logo.png")} alt="mongodb Logo" />
                    <p>Mongodb</p>
                </div>
                <div className="skillBox orangeShadow">
                    <img src={require("../assets/MySQL-Logo.png")} alt="MySQL Logo" />
                    <p>MySQL</p>
                </div>
                <div className="skillBox greenShadow">
                    <img src={require("../assets/nodejs-logo.png")} alt="nodejs Logo" />
                    <p>Node</p>
                </div>
                <div className="skillBox blueShadow">
                    <img src={require("../assets/React-logo.png")} alt="React Logo" />
                    <p>React</p>
                </div>
            </div>
        </div>
    )
}

export default Experience;