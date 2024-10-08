import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import agileSyncImage from "../../Assets/Projects/agileSyncImage.jpeg";
import docuZenImage from "../../Assets/Projects/docuZenImage.jpg";
import chessGameImage from "../../Assets/Projects/chessGameImage.png";
import placeholderImage from "../../Assets/Projects/placeholderImage.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={agileSyncImage}
              isBlog={false}
              title="AgileSync"
              description="Developed an AI-powered project management tool used by 50+ students, improving project tracking and communication between professors and students. Features include AI task suggestions, an integrated chatbot, and automated reporting, reducing project update time by 25%."
              ghLink="https://github.com/jainil524/AgileSync" // Replace with your GitHub link
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={docuZenImage}
              isBlog={false}
              title="DocuZen"
              description="Designed and deployed an auto-generation API documentation tool, reducing documentation time by 40%. Integrated Google OAuth and email/password login for secure access. Supports creating and editing documentation in Markdown format."
              ghLink="https://github.com/jainil524/DocuZen" // Replace with your GitHub link
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placeholderImage}
              isBlog={false}
              title="Database Version Control (on Going)"
              description="Building a database version control tool that manages schema changes and reduces deployment errors by up to 50%. Features include versioning, branching, and automation of migration management."
              ghLink="https://github.com/jainil524/DB-Version-Control" // Replace with your GitHub link
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placeholderImage}
              isBlog={false}
              title="Book Sharing"
              description="Created a platform for buying and selling second-hand educational books, supporting financially disadvantaged students by providing affordable books and fostering a community among students."
              ghLink="https://github.com/jainil524/BookSharing" // Replace with your GitHub link
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chessGameImage}
              isBlog={false}
              title="Chess Game"
              description="Created a fully functional chess game using React, implementing game logic, user interface, and player interactions. Added multiplayer functionality for real-time player interactions."
              ghLink="https://github.com/jainil524/ChessReact" // Replace with your GitHub link
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
