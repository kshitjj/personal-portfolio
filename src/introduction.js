import emailLogo from "./assets/images/email.svg";
import githubLogo from "./assets/images/github1.svg";
import linkedInLogo from "./assets/images/linkedin.svg";
import twitterLogo from "./assets/images/twitter.svg";

const IntroComponent =  ()  => {
    return (
        <div className="introduction">
            <h1>I am a Full Stack Developer</h1>
            <h2>Show Stack</h2>
        </div>
    )
}

export const About = () => {
    return(
        <div className="about"> 
            <h3>About</h3>
            <p>I am a Full Stack Developer pursuing bachelor's degree in International Institute of Information Technology, Pune. I have always been fascinated by everything concering technology</p>
        </div>
    )
}

export const Skills = () => {
    return(
        <div className="skills">
            <h3>
                Skills
            </h3>
            <h4>
                Web Development
            </h4>
            <p>React, React Native, Next.js, Node.js, Express.js, Mongodb, MySQL, REST API</p>
            <h4>
                Blockchain
            </h4>
            <p>Blockchain Concepts, Ethereum, Solidity, web3.js, Hyperledger, etc?(CHANGE THIS)</p>
            <h4>
                Tools
            </h4>
            <p>Kubernetes, Docker, AWS, Google Cloud, ngrok</p>
            <h4>
                OS
            </h4>
            <p>Linux, Windows</p>
            <h4>
                Languages
            </h4>
            <p>javascript, golang, rust, python, c++, html, css</p>
            {/* INSERT SKILLS HERE NIGGA */}
        </div>
    )
}

export const Contributions = () => {
    return(
        <div className="contributions">
            <h3>Contributions</h3>
            {/* PUT GITHUB LINKS HERE */}
        </div>
    )
}

export const Projects = () => {
    return(
        <div className="projects">
            <h3>Projects</h3>
            <h4>Web Development</h4>
            <h4>Blockchain Projects</h4>
            {/* MAKE AND PUT PROJECTS HERE, EVERYTHING */}
        </div>
    )
}

export const Resume = () => {
    return(
        <div className="resume">
            <h3>Resume</h3>
            <a link="./resume.pdf">
                {/* update the resume link */}
                <button>Download Resume/ CV</button>
                {/* add icon for resume */}
            </a>
        </div>
    )
}

export const Contact = () => {
    return(
        <div className="contact">
            <div className="contact-title">
                <h3>
                    Contact Me!
                </h3>
            </div>
            <div className="contact-clickable">
                <a href="https://twitter.com/kshitjjj">
                    <img className="logo" src={twitterLogo} alt="twitter logo"/>
                </a>
                <a href="https://www.linkedin.com/in/kshitij-rajgude-448954220/">
                    <img className="logo" src={linkedInLogo} alt="linkedIn logo"/>
                </a>
                    <img className="logo" src={emailLogo} alt="email logo"/>
                <a>
                </a>
                <a href="https://github.com/kshitjj">
                    <img className="logo" src={githubLogo} alt="twitter logo"/>
                </a>
            </div>
        </div>
    )
}

export default IntroComponent;
