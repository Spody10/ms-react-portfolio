import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

function Portfolio() {
  return (
    <section>
      <div className="d-flex">
        <div className="section-heading">
          <h3 className="">Portfolio</h3>
        </div>
      </div>
      <Container>
        <Row className="my-5">
            <Col xs={11} md={6} className="card-slot">
                <Card>
                    <Card.Title className="project-title">Artful Dodger</Card.Title>
                    <Card.Img
                    src={
                      require(`../../assets/images/artfuldodgerscreenshot.png`)
                        .default
                    }
                    className="project"
                  />
                </Card>
                <Card>
                    <Card.Header  as={Card.Header}
                        variant="link"
                        eventKey="1">
                    </Card.Header>
                    <Card.Link
                        href="https://guarded-caverns-91294.herokuapp.com/"
                        target="_blank"
                        rel="nofollow noopener noreferrer">
                        <span className="site-link">Link</span>
                    </Card.Link>
                    <Card.Link
                        href="https://github.com/Spody10/artfuldodger"
                        target="_blank"
                        rel="">
                        <span className="site-link">Repo</span>
                    </Card.Link>
                </Card>
            </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Portfolio;
