import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/JoeDev2" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/joe-h-908340218/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:joe.bailey99@outlook.com"><EmailIcon/></a>
          </div>
          <h1>Joe Bailey</h1>
          <p>Full Stack Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/JoeDev2" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/joe-h-908340218/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:joe.bailey99@outlook.com"><EmailIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
