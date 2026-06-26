import React from "react";
import "./App.css";

const skills = [
  "C++",
  "DSA",
  "React.js",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "SQL",
  "Tailwind CSS",
  "Git & GitHub",
];

const projects = [
  {
    title: "Placement Preparation Website",
    desc: "A platform for students preparing for placements with DSA, Aptitude, Core Subjects and Interview resources.",
  },

  {
    title: "Math Game Application",
    desc: "MERN stack game application with authentication, lives system and leaderboard functionality.",
  },

  {
    title: "AI Assistant",
    desc: "Personal AI assistant project with voice and text interaction using Python.",
  },
];

function App() {
  return (
    <div className="app">
      <nav>
        <h2>
          Vivek<span>.</span>
        </h2>

        <div>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div>
          <p className="tag">FULL STACK DEVELOPER</p>

          <h1>
            I am 
            <br />
            <span>Vivek Garg</span>
          </h1>

          <p className="intro">
            Hi, I'm Vivek Garg, a Computer Science Engineering student
            passionate about Full Stack Development, DSA and creating scalable
            applications.
          </p>

          <div className="buttons">
            <a href="https://drive.google.com/file/d/14wAZR2KqewyCDuI03A57-uqzRSbHH5On/view?usp=drive_link" >
            <button>View Resume</button>

            </a>   
            <a href="https://www.linkedin.com/in/-vivek-garg/">
            <button className="second">LinkedIn</button>
            </a>
          </div>
        </div>

        <div className="profile">
          <img src="../public/vivek.jpg" alt="" style={{width:"300px", height:"300px",borderRadius:"50%"}}/>
        </div>
      </section>

      <section id="about">
        <h2 className="title">About Me</h2>

        <p className="text">
          I am pursuing B.Tech in Computer Science Engineering from Geeta
          University. I enjoy solving problems, building web applications and
          improving my development skills. I have solved 500+ problems on
          LeetCode and actively practice Data Structures and Algorithms.
        </p>
      </section>

      <section>
        <h2 className="title">Education</h2>

        <div className="grid">
          <div className="box">
            <h3>B.Tech CSE</h3>

            <p>
              Geeta University
              <br />
              2024 - 2028
              <br />
              CGPA : 8.28
            </p>
          </div>

          <div className="box">
            <h3>Class XII</h3>

            <p>
              Govt Sr Sec School
              <br />
              78%
            </p>
          </div>

          <div className="box">
            <h3>Class X</h3>

            <p>
              Navjeevan Public School
              <br />
              84.6%
            </p>
          </div>
        </div>
      </section>

      <section id="skills">
        <h2 className="title">Skills</h2>

        <div className="skills">
          {skills.map((skill) => (
            <div key={skill}>{skill}</div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="title">Experience</h2>

        <div className="grid">
          <div className="box">
            <h3>Programming Intern</h3>

            <p>
              Coding Blocks
              <br />
              Feb 2025 - Mar 2025
              <br />
              <br />
              Worked on DSA concepts and solved coding problems.
            </p>
          </div>

          <div className="box">
            <h3>Student Intern</h3>

            <p>
              Geeta University
              <br />
              Jun 2025 - Aug 2025
              <br />
              <br />
              Focused on algorithms and problem solving.
            </p>
          </div>
        </div>
      </section>

      <section id="projects">
        <h2 className="title">Projects</h2>

        <div className="grid">
          {projects.map((p) => (
            <div className="box" key={p.title}>
              <h3>{p.title}</h3>

              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="title">Achievements</h2>

        <div className="achievement">
          🏆 Smart India Hackathon - Second Position
          <br />
          <br />
          🔥 500+ LeetCode Problems Solved
          <br />
          <br />
          🏅 DSA Advanced Internship - Coding Blocks
          <br />
          <br />☁ AWS Solutions Architect Simulation
        </div>
      </section>

      <section id="contact">
        <h2 className="title">Contact</h2>

        <p className="text">
          Email : viveggarg0605@gmail.com
          <br />
          <br />
          Phone : +91 9306810726
        </p>
      </section>

      <footer>© 2026 Vivek Garg</footer>
    </div>
  );
}

export default App;
