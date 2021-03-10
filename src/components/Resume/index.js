import React from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';

function Resume() {
  return (
    <section>
      <div className="d-flex">
        <div className="section-heading">
          <h4 id="resume">Resume</h4>
        </div>
      </div>
      <p className="resume-text">
        A list of my skills can be found below. In addition to the skills
        listed, I also have experience working with GitHub and Heroku. Use the
        provided blue box to download my resume.
      </p>
      <div className="d-flex justify-content-end mb-5 ">
        <div className=" resume-link text-center">
          <a href="./Resume-Michael-Spore.pdf" download>
            <p className=" resume-link-text">
              My Resume <i className="fas fa-file-download"></i>
            </p>
          </a>
        </div>
      </div>
      <div className="skills-border mb-5">
        <Container className="skills-container">
          <div className="bg-theme-2 skills-header mt-4 ml-1 ml-md-5">
            <h4 className="">My Skills</h4>
          </div>
          <Row>
            <Col xs={12}></Col>
          </Row>
          <Row className="skills d-flex justify-content-center">
            <Col xs={11} md={4} lg={3} className="mt-5">
              <Card className="skill-card">
                <Card.Title className="skill-card-header">
                  <h5>
                    Front-end <i className="fas fa-laptop-code"></i>
                  </h5>
                </Card.Title>
                <Card.Body>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>JQuery</li>
                    <li>Bootstrap</li>
                    <li>Vue</li>
                    <li>React</li>
                    <li>PWAs</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={11} md={4} lg={3} className="m-5">
              <Card className="skill-card">
                <Card.Title className="skill-card-header">
                  <h5>
                    Back-end <i className="fas fa-database"></i>
                  </h5>
                </Card.Title>
                <Card.Body>
                  <ul>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MySQL</li>
                    <li>Sequelize</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>MongoDB Atlas</li>
                    <li>Inquirer</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default Resume;
