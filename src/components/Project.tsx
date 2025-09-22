import React from "react";
import fanplay01 from '../assets/images/fanplay01.png';
import gitbetter01 from '../assets/images/gitbetter01.png';
import resonify01 from '../assets/images/resonify01.webp';
import roundup01 from '../assets/images/roundup01.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
    <div className="project">
        <img src={fanplay01} className="zoom" alt="Fanplay marketplace" width="100%"/>
        <h2>Fanplay</h2>
        <p>Gaming marketplace connecting players with professional coaches. Built full-stack platform with React frontend and Spring Boot API, featuring user authentication, booking system, service listings, and Stripe Connect integration for automated payments and escrow.
        <br/><br/>
        Developed business strategy targeting chess players, eSports professionals, and content creators. Implemented multi-page user flows, responsive design, and marketing campaigns. Deployed across Heroku (Spring Boot API), Vercel (React frontend), AWS RDS (database), and S3 (file storage).
        <br/><br/>
        <strong>Tech Stack:</strong> <br/><br/> Spring Boot, React, PostgreSQL, Stripe API, AWS, Java, JavaScript</p>
    </div>
    
    <div className="project">
        <img src={gitbetter01} className="zoom" alt="GitBetter interface" width="100%"/>
        <h2>GitBetter</h2>
        <p>Chrome extension providing AI-powered analysis and improvement suggestions for GitHub PRs and issues. Built with React frontend and Flask API, featuring user authentication, freemium pricing model, and payment processing.
        <br/><br/>
        Integrated LLM functionality with RAG (Retrieval-Augmented Generation) and semantic search. Implemented 0-10 quality scoring system with detailed feedback on PRs, issues, and code reviews. Achieved 90% cost reduction through migration to Google's Gemini Flash 2 and a novel optimisation strategy.
        <br/><br/>
        Features real-time analysis, one-click AI rewrites, customisable improvement suggestions, and seamless GitHub integration.
        <br/><br/>
        <strong>Tech Stack:</strong> <br/><br/> React, Flask, LLM APIs, Python, JavaScript</p>
    </div>
    
    <div className="project">
        <img src={resonify01} className="zoom" alt="Resonify voice analysis" width="100%"/>
        <h2>Resonify</h2>
        <p>AI voice attribution system using machine learning to identify and attribute AI-generated voices to their source models. Built ML pipeline with voice analysis algorithms using PyTorch and scikit-learn, optimised by reduction of input space through filtering voices through gender-based feature extraction.
        <br/><br/>
        Implemented multi-input support including direct audio upload and YouTube URL processing with automatic audio extraction. Developed Flask API for asynchronously analysing voices through job submission to always on process. Features clean UI with step-by-step analysis workflow and confidence scoring.
        <br/><br/>
        Technical implementation includes audio processing, machine learning embeddings, and vector similarity comparisons. Deployed on PythonAnywhere.
        <br/><br/>
        <strong>Tech Stack:</strong> Flask, Python, Machine Learning (PyTorch, scikit-learn), Audio Processing, PythonAnywhere</p>
    </div>
    
    <div className="project">
        <a href="https://github.com/JoeDev2/RoundUpBankingService" target="_blank" rel="noreferrer"><img src={roundup01} className="zoom" alt="Round Up service" width="100%"/></a>
        <a href="https://github.com/JoeDev2/RoundUpBankingService" target="_blank" rel="noreferrer"><h2>Round Up Banking Service</h2></a>
        <p>Java application implementing automated transaction roundup calculations for savings goals. Built with clean layered architecture separating service, model, and UI layers. Features transaction analysis, roundup calculations, savings goal management, and interactive command-line interface.
        <br/><br/>
        Includes sample testing with JUnit 4 and Mockito, extensive documentation, and setup instructions. Uses mock data to demonstrate full functionality without requiring banking credentials.
        <br/><br/>
        Implements Maven build automation with Jackson for JSON processing and Java Time API for date handling.
        <br/><br/>
        <strong>Tech Stack:</strong> Java 11+, Maven, Jackson, JUnit, Mockito</p>
    </div>
</div>
    </div>
    
);
}

export default Project;