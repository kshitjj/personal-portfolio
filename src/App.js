import './App.css';
import IntroComponent, { About, Skills, Contact, Projects, Resume, Contributions } from './introduction';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className='Title'>
          <h5>Kshitij Rajgude</h5>
        </div>
        <div className='headerList'>
          <a>Home</a>
          <a>Blogs</a>
          <a>Skills</a>
        </div>
      </header>
      <body>
        <IntroComponent/>
        <About/>
        <Skills/>
        <Projects/>
        <Contributions/>
        <Resume/>
        <Contact/>
        {/* I am blah blah developer */}
        {/* About Section */}
        {/* What I can do for you (skills) */}
        {/* Programmed HERE! */}
        {/* Projects */}
        {/* Contributions */}
        {/* Resume */}
        {/* Contact here */}
      </body>
    </div>
  );
}

export default App;
