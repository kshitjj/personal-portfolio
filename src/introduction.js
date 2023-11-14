function introComponent(){
    return (
        <div className="introduction">
            <h1>I am a Full Stack Developer</h1>
            <h2>Show Stack</h2>
        </div>
    )
}

function about(){
    return(
        <div className="about"> 
            <h3>About</h3>
            <p>I am a Full Stack Developer pursuing bachelor's degree in International Institute of Information Technology, Pune. I have always been fascinated by everything concering technology</p>
        </div>
    )
}

function skills(){
    return(
        <div className="skills">
            <h3>
                Skills
            </h3>
            <h4>
                Web Development
            </h4>
            <h4>
                Blockchain
            </h4>
            <h4>
                Tools
            </h4>
            <h4>
                OS
            </h4>
            <h4>
                Languages
            </h4>
            {/* INSERT SKILLS HERE NIGGA */}
        </div>
    )
}

function contributions(){
    return(
        <div className="contributions">
            {/* PUT GITHUB LINKS HERE */}
        </div>
    )
}

function projects(){
    return(
        <div className="projects">
            <h4>Front End Projects</h4>
            <h4>Back End Projects</h4>
            <h4>Full Stack Projects</h4>
            <h4>Blockchain Projects</h4>
            <h4></h4>
            {/* MAKE AND PUT PROJECTS HERE, EVERYTHING */}
        </div>
    )
}

function resume(){
    return(
        <div className="resume">
            <a link="./resume.pdf">
                {/* update the resume link */}
                <button>Download Resume/ CV</button>
                {/* add icon for resume */}
            </a>
        </div>
    )
}

function contact(){
    return(
        <div className="contact">
            <a href="https://twitter.com/kshitjjj">
                {/* twitter icon */}
            </a>
            <a href="https://www.linkedin.com/in/kshitij-rajgude-448954220/">
                {/* linkedinIn profile */}
            </a>
            <a>
                {/* Email Icon */}
            </a>
            <a href="https://github.com/kshitjj">
                {/* Github Profile */}
            </a>
        </div>
    )
}
