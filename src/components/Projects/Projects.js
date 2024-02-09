import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import assembly from "../../Assets/Projects/assembly.png";
import news from "../../Assets/Projects/OS_Ass3_diagram.png";
import arknoid from "../../Assets/Projects/arknoid - big final.png";
import wink from "../../Assets/Projects/wink- chat screen .png";
import noteApp from "../../Assets/Projects/note app.jpg";
import knn from "../../Assets/Projects/knn- example.png";

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
              imgPath={wink}
              isBlog={false}
              title="WINK"
              description="WINK is a versatile cross-platform chat application designed for both web and Android users.
               It offers a comprehensive solution for real-time messaging, user registration, and authentication."
              ghLink="https://github.com/yarin181/WINK_android"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={knn}
              isBlog={false}
              title="KNN classifier server"
              description="C++ implementation of the K-nearest neighbors (KNN) algorithm for classification and regression.
               It allows users to load, customize, and apply the KNN algorithm to classify unclassified vectors and provides
               options to display and save the classification results."
              ghLink="https://github.com/yarin181/KNN_classification_server"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={arknoid}
              isBlog={false}
              title="Ball vs Blocks - Arkanoid"
              description="Java-based implementation of the beloved Arkanoid game, emphasizing the application of
              Object-Oriented Programming (OOP) design patterns to craft a flexible and modular gaming framework."
              ghLink="https://github.com/yarin181/BALLvsBLOCKS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={assembly}
              isBlog={false}
              title="Assembly-Project"
              description="This assembly language project for Linux enables users to perform various string manipulations.
              It provides an interactive interface for inputting strings and selecting manipulation options,
              offering versatile string handling capabilities."
              ghLink="https://github.com/yarin181/Assembly-Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={noteApp}
              isBlog={false}
              title="Note Taking App"
              description="This Android app, created using Android Studio, facilitates note creation, editing, and
              deletion on Android devices, offering a user-friendly interface for efficient note management."
              ghLink="https://github.com/yarin181/app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news}
              isBlog={false}
              title="News Broadcasting Simulation"
              description="This C-based project simulates news broadcasting,
               offering hands-on experience in concurrent programming and synchronization,
                assessing synchronization's performance impact under varying workloads."
              ghLink="https://github.com/yarin181/OP_ass3"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
