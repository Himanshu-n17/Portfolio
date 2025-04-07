import React from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Mail,
  FileText,
  ExternalLink,
  Code,
  Database,
  Server,
  Terminal,
  Wrench,
  Award,
} from "lucide-react";
import "./styles.css";

function App() {
  return (
    <div className="container">
      {/* Header/Hero Section */}
      <header className="header">
        <div className="profile-image">
          <img src="./logo.svg" alt="Profile" />
        </div>
        <h1>Himanshu Sekhar Nayak</h1>
        <p className="title">Full Stack Web Developer</p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/himanshu-sekhar-nayak-6680aa249"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <Linkedin size={20} /> LinkedIn
          </a>
          <a
            href="https://github.com/Himanshu-n17"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <Github size={20} /> GitHub
          </a>
          <a
            href="https://www.instagram.com/himanshu_nayak17/?igsh=ZTQ3dG9kN3UwaWRq#"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-third"
          >
            <Instagram size={20} /> Instagram
          </a>
          <a
            href="https://x.com/Himanshu_n17"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-forth"
          >
            <Twitter size={20} /> Twitter
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="main">
        {/* About Section */}
        <section className="section">
          <h2>About Me</h2>
          <div className="about-content">
            <p>
              I am a passionate Full Stack Developer with a strong foundation in
              both frontend and backend technologies. My journey in software
              development has equipped me with the skills to create efficient,
              scalable, and user-friendly applications. I thrive on solving
              complex problems and continuously learning new technologies to
              stay at the forefront of web development. Currently, I am in my
              third year of pursuing a B.Tech in Computer Science and
              Engineering at ITER, SOA University, Bhubaneswar.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="section">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <Code className="skill-icon frontend" />
              <p className="skill-title">Frontend Development</p>
              <p className="skill-desc">
                React, HTML, CSS, JavaScript, Tpescript, Tailwind CSS
              </p>
            </div>
            <div className="skill-card">
              <Server className="skill-icon backend" />
              <p className="skill-title">Backend Development</p>
              <p className="skill-desc">Node.js, Express, APIs</p>
            </div>
            <div className="skill-card">
              <Database className="skill-icon database" />
              <p className="skill-title">Database Management</p>
              <p className="skill-desc">MongoDB, SQL</p>
            </div>
            <div className="skill-card">
              <Terminal className="skill-icon Coding" />
              <p className="skill-title">Programming Language</p>
              <p className="skill-desc">Java, DSA, Python, C, C++</p>
            </div>
            <div className="skill-card">
              <Wrench className="skill-icon Tool" />
              <p className="skill-title">Tools</p>
              <p className="skill-desc">
                Git, GitHub, MS-Word, Netlify, VS Code, Eclipse, Figma
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="section">
          <h2>My Projects</h2>
          <div className="projects-grid">
            {/* 1 */}
            <div className="project-card">
              <h3>Filmyhunter - Movie/Series Discovery</h3>
              <p>
                A simple movie search application built with React. This app
                allows users to search for movies by name and view detailed
                information about each movie by clicking on the corresponding
                movie card.
              </p>
              <div className="project-tags">
                <span>React</span>
                <span>Javscript</span>
                <span>CSS</span>
                <span>React Router DOM</span>
                <span>OMDB API</span>
              </div>
              <div className="project-links">
                <a
                  href="https://filmyhunter.netlify.app/"
                  className="project-link"
                  target="_blank"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
                <a
                  href="https://github.com/Himanshu-n17/Nayak-Movie-Website.git"
                  className="project-link"
                  target="_blank"
                >
                  <Github size={16} /> Code
                </a>
              </div>
            </div>

            {/* 2 */}
            <div className="project-card">
              <h3>Rally Royale - Arcade Tennis Game</h3>
              <p>
                A classic Pong-style arcade game built using HTML, CSS, and
                JavaScript. Play against an AI opponent with realistic ball
                physics, score tracking, and immersive sound effects. Features
                include dynamic paddle shrinkage, increasing difficulty, and a
                responsive UI. Great for showcasing interactive canvas-based
                game development!
              </p>
              <div className="project-tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>Javascript</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/Himanshu-n17/Tennis_Arcade_Game.git"
                  className="project-link"
                  target="_blank"
                >
                  <Github size={16} /> Code
                </a>
              </div>
            </div>

            {/* 3 */}
            <div className="project-card">
              <h3>Devlearn - E-Learning Platform</h3>
              <p>
                DevLearn - A responsive and interactive frontend e-learning
                platform built with React.js. Features course listing, progress
                tracking, and video embedding. Frontend project demo for modern
                web development.
              </p>
              <div className="project-tags">
                <span>React</span>
                <span>CSS</span>
                <span>React Router DOM</span>
                <span>React Icons</span>
                <span>React Player</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/Himanshu-n17/DevLearn-E-Learning-Platform.git"
                  className="project-link"
                  target="_blank"
                >
                  <Github size={16} /> Code
                </a>
              </div>
            </div>

            {/* 4 */}
            <div className="project-card">
              <h3>Quizzle - Interactive Quiz App</h3>
              <p>
                This interactive quiz app allows users to test their knowledge
                with multiple-choice questions fetched from an API. It features
                a real-time timer, score tracking, and a theme toggle for dark
                and light modes. The app provides immediate feedback on answers,
                a responsive design, and the option to restart the quiz. Built
                with JavaScript, this project demonstrates skills in DOM
                manipulation, asynchronous data fetching, and user experience
                design.
              </p>
              <div className="project-tags">
                <span>React</span>
                <span>CSS</span>
                <span>React Router DOM</span>
                <span>React Icons</span>
                <span>React Player</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/Himanshu-n17/Quizzle-QUIZ_Application.git"
                  className="project-link"
                  target="_blank"
                >
                  <Github size={16} /> Code
                </a>
              </div>
            </div>

            {/* 5 */}
            <div className="project-card">
              <h3>Chatrix - Real-Time Chat App (Frontend Only)</h3>
              <p>
                A responsive chat UI built with React.js and WebSockets
                (simulated). Features include:
                <br />
                💬 Live messaging UI
                <br />
                👀 Typing indicators
                <br />
                👥 Sidebar with room ID & members
                <br />
                🗂️ Message history (local storage)
                <br />
                🎨 Custom CSS for a sleek, modern look
                <br />
              </p>
              <div className="project-tags">
                <span>React</span>
                <span>CSS</span>
                <span>React Router DOM</span>
                <span>React Icons</span>
                <span>React Player</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/Himanshu-n17/Chatrix-Real-Time-Chat-Application.git"
                  className="project-link"
                  target="_blank"
                >
                  <Github size={16} /> Code
                </a>
              </div>
            </div>

            {/* 6 */}
            <div className="project-card">
              <h3>To-Do List App</h3>
              <p>
                A minimal and intuitive To-Do List application built with
                React.js. Users can add new tasks, mark them as completed, and
                delete them in real time. State management is handled using
                React's useState hook, and the UI is styled with clean,
                responsive CSS.
                <br />
                Features:
                <li>Add, complete, and delete tasks.</li>
                <li>Real-time state updates.</li>
                <li>Minimal and responsive design</li>
              </p>
              <div className="project-tags">
                <span>React</span>
                <span>CSS</span>
                <span>Javscript</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/Himanshu-n17/REACT_JS_Projects/tree/main/2.todo_list"
                  className="project-link"
                  target="_blank"
                >
                  <Github size={16} /> Code
                </a>
              </div>
            </div>

            {/* 7 */}
            <div className="project-card">
              <h3>KicksKart - E-commerce Website Landing Page Design</h3>
              <p>
                This is an e-commerce website with a focus on filtering and
                sorting products. The app allows users to search for products by
                title through an input filter, select categories using radio
                buttons, and further filter items using button clicks for
                attributes such as color, category, company, or price. The
                website consists of several key components.
              </p>
              <div className="project-tags">
                <span>React</span>
                <span>CSS</span>
                <span>Javascript</span>
                <span>React Icons</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/Himanshu-n17/KicksKart-E-Commerce-Page.git"
                  className="project-link"
                  target="_blank"
                >
                  <Github size={16} /> Code
                </a>
              </div>
            </div>

            {/* 8 */}
            <div className="project-card">
              <h3>Hoodie Haven - E-commerce Website Landing Page Design</h3>
              <p>
                This landing page design for Hoodie Haven showcases a modern and
                user-friendly interface for an online hoodie store. It features
                a clean navigation bar, eye-catching product sections, and clear
                call-to-action buttons for easy shopping. The product grid
                displays items with pricing and a "View Product" option, while
                the customer reviews section builds trust. The design is fully
                responsive, ensuring a smooth experience on all devices.
              </p>
              <div className="project-tags">
                <span>HTML</span>
                <span>CSS</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/Himanshu-n17/Html-Css-Javascript-project/tree/main/2.The%20Hoodie%20Page"
                  className="project-link"
                  target="_blank"
                >
                  <Github size={16} /> Code
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section className="section">
          <h2>Certificates</h2>
          <div className="certificates-grid">
            <div className="certificate-card">
              <Award className="certificate-icon" />
              <div className="certificate-content">
                <h3>Introduction To CyberSecurity</h3>
                <p>CISCO</p>
                <span className="certificate-date">2023</span>
                <a href="#" className="certificate-link" target="_blank">
                  <ExternalLink size={16} /> View Certificate
                </a>
              </div>
            </div>
            <div className="certificate-card">
              <Award className="certificate-icon" />
              <div className="certificate-content">
                <h3>UI & UX Design Course</h3>
                <p>MyCaptain</p>
                <span className="certificate-date">2023</span>
                <a href="#" className="certificate-link" target="_blank">
                  <ExternalLink size={16} /> View Certificate
                </a>
              </div>
            </div>
            <div className="certificate-card">
              <Award className="certificate-icon" />
              <div className="certificate-content">
                <h3>Python Essentials 1 & 2</h3>
                <p>Cisco</p>
                <span className="certificate-date">2024</span>
                <a href="#" className="certificate-link" target="_blank">
                  <ExternalLink size={16} /> View Certificate
                </a>
              </div>
            </div>
            <div className="certificate-card">
              <Award className="certificate-icon" />
              <div className="certificate-content">
                <h3>AI Tools & Workshop</h3>
                <p>Be10X</p>
                <span className="certificate-date">2024</span>
                <a href="#" className="certificate-link" target="_blank">
                  <ExternalLink size={16} /> View Certificate
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section">
          <h2>Get In Touch</h2>
          <div className="contact-container">
            <div className="contact-buttons">
              <a href="nayakhimanshu2717@gmail.com" className="btn btn-contact">
                <Mail size={20} /> Email Me
              </a>
              <button
                className="btn btn-contact"
                onClick={() => window.open("/path-to-your-resume.pdf")}
              >
                <FileText size={20} /> My Resume
              </button>
            </div>
            <div className="contact-note">
              <p>Open to new opportunities and collaborations</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Himanshu Sekhar Nayak. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
