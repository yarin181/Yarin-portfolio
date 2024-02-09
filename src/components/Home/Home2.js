import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/yarin-photo.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              As a third-year Computer Science student at<span className="purple"> Bar Ilan University</span>, I am deeply immersed in the world of technology.
              <br /><br />
              My passion lies in <span className="purple">Software Development</span>, with hands-on experience in both <span className="purple">Low-Level Development</span> and the dynamic realm of <span className="purple">Web Development</span>.
              <br /><br />
              Intrigued by the complexities of <span className="purple">Machine Learning</span>, I am actively exploring this fascinating field to broaden my horizons.
              <br /><br />
              Through my journey, I am driven by a genuine curiosity for the latest <span className="purple">Technologies</span>, a commitment to creating innovative solutions, and a profound care for fostering advancements in the tech <span className="purple">Community</span>.
            </p>


          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid rounded-circle" alt="avatar" style={{ width: '600px', height: '500px' }} />

            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/yarin181"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/yarin-sason/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
