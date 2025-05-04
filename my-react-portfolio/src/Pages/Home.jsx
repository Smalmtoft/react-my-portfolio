import Items from "../Components/Items.jsx";
import genesisImage from "../assets/genesis.jpg";
import responsiveImage from "../assets/responsive-design.jpg";
import gameImage from "../assets/typing-game.jpg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar.jsx";
import { useState } from "react";

function Home() {
  const [showProjects, setShowProjects] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const projects = [
    /* Project 1 */
    {
      portfolioPicture: genesisImage,
      title: "Genesis", 
      text: "A multi-page portfolio built with HTML and SCSS. It was my first time using Sass, which taught me its strengths. I worked from a Figma file and focused on consistent styling. A challenge was learning grid and understanding SCSS.",
      tech: "HTML - SCSS",
      link: "https://github.com/Smalmtoft/genesis.git"
    },
    /* Project 2 */
    {
      portfolioPicture: responsiveImage,
      title: "Responsive",
      text: "This project demonstrates responsive design using flexbox. I learned how to use media queries and flexible units. I worked solo and focused on mobile-first principles.",
      tech: "HTML - CSS",
      link: "https://github.com/Smalmtoft/responsive.git"
    },
    /* Project 3 */
    {
      portfolioPicture: gameImage,
      title: "Typing Game",
      text: "A typing game built with HTML, CSS and JavaScript. I created the JavaScript code to the existing design to make it interactive. It was my first time doing this, and despite struggling, I learned a lot through tutorials and course material.",
      tech: "Javascript",
      link: "https://github.com/Smalmtoft/js-typing-game.git"
    }
  ];

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.tech.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page fade-in"> 
    
      <div className="home-page-text">
        <h1>Welcome to my portfolio</h1>
        <p>This is where I stor my web projects I have built myself or been a part of. Have a look and enjoy.</p>
      </div>

      {!showProjects ? (
        <button className="show-projects-button" onClick={() => setShowProjects(true)}>Show projects</button>
      ) : (
        <>
          <input
            type="text"
            placeholder="Search for projects and tech used..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />

          <div className="portfolio-items fade-in">
            {filteredProjects.map((project, index) => (
              <div key={index} className={`portfolio-single-item ${project.title.toLowerCase()}`}>
                <Items 
                  portfolioPicture={project.portfolioPicture} 
                  title={project.title}
                  tech={project.tech}
                  link={project.link}
                  onClick={() => setSelectedProject(project)}
                />
              </div>
            ))}
          </div>
        </>
      )}

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <img className="portfolio-picture"src={selectedProject.portfolioPicture} alt="" />
            <h2 className="portfolio-title">{selectedProject.title}</h2>
            <p className="portfolio-text">{selectedProject.text}</p>
            <p className="portfolio-tech">{selectedProject.tech}</p>
            <button className="portfolio-button" onClick={() => window.open(selectedProject.link, "_blank")}>Go to GitHub repository</button>
            <button className="close-button" onClick={() => setSelectedProject(null)}>Close</button>
          </div>
        </div>
      )}

    </div> 
  );
}

export default Home;
