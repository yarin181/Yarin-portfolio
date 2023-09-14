import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/yarin-photo.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
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
              Third-Year Computer Science Student at<span className="purple"> Bar Ilan University</span>
              <br /><br />
              Passionate about <span className="purple">Software Development</span>, Web Development, and Problem Solving
              <br /><br />
              Enthusiastic about Learning and Applying the Latest <span className="purple">Technologies</span>
              <br /><br />
              Driven to Create Innovative Solutions and Contribute to the Tech <span className="purple">Community</span>
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
              {/*<li className="social-icons">*/}
              {/*  <a*/}
              {/*    href="https://twitter.com/Soumyajit4419"*/}
              {/*    target="_blank"*/}
              {/*    rel="noreferrer"*/}
              {/*    className="icon-colour  home-social-icons"*/}
              {/*  >*/}
              {/*    <AiOutlineTwitter />*/}
              {/*  </a>*/}
              {/*</li>*/}
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
              {/*<li className="social-icons">*/}
              {/*  <a*/}
              {/*    href="https://www.instagram.com/soumyajit4419"*/}
              {/*    target="_blank"*/}
              {/*    rel="noreferrer"*/}
              {/*    className="icon-colour home-social-icons"*/}
              {/*  >*/}
              {/*    <AiFillInstagram />*/}
              {/*  </a>*/}
              {/*</li>*/}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
