import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jainil Prajapati</span>
            from <span className="purple">Gandhinagar, India.</span>
            <br />
            I am a passionate full-stack developer with over 2 years of experience in building dynamic and impactful web solutions.
            <br />
            I am currently pursuing a Bachelor's degree in Computer Science at <span className="purple">Pandit Deendayal Energy University</span>, with a strong focus on front-end and back-end development.
            <br />
            I have hands-on experience in technologies such as ReactJS, NodeJS, JavaScript, and more, through internships, projects, and hackathons.
            <br />
            <br />
            When I'm not coding, here are a few activities I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Open Source Projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling and Networking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that not only work but also inspire!"{" "}
          </p>
          <footer className="blockquote-footer">Jainil Prajapati</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;