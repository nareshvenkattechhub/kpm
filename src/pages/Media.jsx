import React from 'react';
import { Card, Button, ListGroup, Row, Col, Image } from 'react-bootstrap';

function Media() {
  return (
    <section id="media" className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        {/* Title */}
        <h2 className="text-center display-4 mb-4 text-dark fw-bold">Media</h2>

        {/* Newspapers Section */}
        <Row className="mb-5">
          <Col md={6}>
            <Card>
              <Card.Header className="text-center">Newspapers</Card.Header>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>Daily News 1</ListGroup.Item>
                  <ListGroup.Item>Daily News 2</ListGroup.Item>
                  <ListGroup.Item>Daily News 3</ListGroup.Item>
                  <ListGroup.Item>Global Times</ListGroup.Item>
                </ListGroup>
                <Button variant="primary" className="mt-3 w-100">Read More</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Upcoming Events Section */}
          <Col md={6}>
            <Card>
              <Card.Header className="text-center">Upcoming Events</Card.Header>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>Event 1 - Date: Feb 10</ListGroup.Item>
                  <ListGroup.Item>Event 2 - Date: Mar 5</ListGroup.Item>
                  <ListGroup.Item>Event 3 - Date: Apr 20</ListGroup.Item>
                </ListGroup>
                <Button variant="primary" className="mt-3 w-100">View All Events</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Videos Section */}
        <Row>
          <Col md={12}>
            <Card>
              <Card.Header className="text-center">Media Videos</Card.Header>
              <Card.Body>
                <Row className="g-4">
                  {/* Video 1 */}
                  <Col md={4}>
                    <Card>
                      <Image src="https://via.placeholder.com/500x300" fluid alt="Video 1" />
                      <Card.Body>
                        <Card.Title>Video Title 1</Card.Title>
                        <Button variant="primary" className="w-100">
                          Watch Video
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>

                  {/* Video 2 */}
                  <Col md={4}>
                    <Card>
                      <Image src="https://via.placeholder.com/500x300" fluid alt="Video 2" />
                      <Card.Body>
                        <Card.Title>Video Title 2</Card.Title>
                        <Button variant="primary" className="w-100">
                          Watch Video
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>

                  {/* Video 3 */}
                  <Col md={4}>
                    <Card>
                      <Image src="https://via.placeholder.com/500x300" fluid alt="Video 3" />
                      <Card.Body>
                        <Card.Title>Video Title 3</Card.Title>
                        <Button variant="primary" className="w-100">
                          Watch Video
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default Media;
``