import React from "react";

function Portfolio() {
    return (
        <div>
            <center>
                <h1 className="bigFont">My Portfolio</h1>
            </center>
            <div className="project-container">
                <div className="projectBox pinkShadow">
                    <img className="projectLogo" src={require("../assets/ProPairs.png")} alt="Pro Pairs" />
                    <div className="buttons"><h4 className="portfolioFont">Pro Pairs</h4>
                        <button className="gitBtn"><a className="urlBtn" href="https://pro-pairs.herokuapp.com/">URL</a></button>
                        <button className="gitBtn"><a className="urlBtn" href="https://github.com/MZernick/Project-Partners"><img className="gitLogo" src={require("../assets/GitHub-Logo.png")} alt="GitHub Logo" /></a></button>
                    </div>
                </div>
                <div className="projectBox pinkShadow">
                    <img className="projectLogo" src={require("../assets/TriviaTracker.png")} alt="Trivia Tracker" />
                    <div className="buttons"><h4 className="portfolioFont">Trivia Tracker</h4>
                        <button className="gitBtn"><a className="urlBtn" href="https://trivia-tracker.herokuapp.com/">URL</a></button>
                        <button className="gitBtn"><a className="urlBtn" href="https://github.com/MZernick/Trivia-Tracker"><img className="gitLogo" src={require("../assets/GitHub-Logo.png")} alt="GitHub Logo" /></a></button>
                    </div>
                </div>
                <div className="projectBox pinkShadow">
                    <img className="projectLogo" src={require("../assets/DrinkoftheDay.png")} alt="Drink of the Day" />
                    <div className="buttons"><h4 className="portfolioFont">Drink of the Day</h4>
                        <button className="gitBtn"><a className="urlBtn" href="https://mzernick.github.io/Drink-of-the-Day/">URL</a></button>
                        <button className="gitBtn"><a className="urlBtn" href="https://github.com/MZernick/Drink-of-the-Day"><img className="gitLogo" src={require("../assets/GitHub-Logo.png")} alt="GitHub Logo" /></a></button>
                    </div>
                </div>
                <div className="projectBox pinkShadow">
                    <img className="projectLogo" src={require("../assets/TechBlog.png")} alt="Tech Blog" />
                    <div className="buttons"><h4 className="portfolioFont">Tech Blog</h4>
                        <button className="gitBtn"><a className="urlBtn" href="https://model-view-controller-mz.herokuapp.com/">URL</a></button>
                        <button className="gitBtn"><a className="urlBtn" href="https://github.com/MZernick/UTA-Model-View-Controller"><img className="gitLogo" src={require("../assets/GitHub-Logo.png")} alt="GitHub Logo" /></a></button>
                    </div>
                </div>
                <div className="projectBox pinkShadow">
                    <img className="projectLogo" src={require("../assets/LOTRQuiz.png")} alt="LOTR Quiz" />
                    <div className="buttons"><h4 className="portfolioFont">LOTR Quiz</h4>
                        <button className="gitBtn"><a className="urlBtn" href="https://mzernick.github.io/UTA-Bootcamp-QuizChallenge/">URL</a></button>
                        <button className="gitBtn"><a className="urlBtn" href="https://github.com/MZernick/UTA-Bootcamp-QuizChallenge"><img className="gitLogo" src={require("../assets/GitHub-Logo.png")} alt="GitHub Logo" /></a></button>
                    </div>
                </div>
                <div className="projectBox pinkShadow">
                    <img className="projectLogo" src={require("../assets/WeatherAPI.png")} alt="Weather API" />
                    <div className="buttons"><h4 className="portfolioFont">Weather API</h4>
                        <button className="gitBtn"><a className="urlBtn" href="https://mzernick.github.io/UTA-Bootcamp-WeatherAPI/">URL</a></button>
                        <button className="gitBtn"><a className="urlBtn" href="https://github.com/MZernick/UTA-Bootcamp-WeatherAPI"><img className="gitLogo" src={require("../assets/GitHub-Logo.png")} alt="GitHub Logo" /></a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;