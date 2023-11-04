import React from 'react';
import { Badge, Card, Col, Container, Row } from 'react-bootstrap';

export interface IMoreFeatures {
  image: string;
  shapes: string[];
  title: string;
  description: string;
}

type MoreFeatureProps = {
  features: IMoreFeatures[];
};

export const MoreFeatures: React.FC<MoreFeatureProps> = ({ features }) => {
  return (
    <section className="section py-5 features-2 position-relative overflow-hidden">
      <Container>
        <Row>
          <Col className="text-center">
            <Badge pill bg="" className="badge-soft-primary px-2 py-1">
              More Features
            </Badge>
            <h1 className="display-5 fw-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h1>
            <p className="text-muted mx-auto">
              Start working with{' '}
              <span className="text-primary fw-bold">Rabbithole</span> to curate
              better browsing experiences.
            </p>
          </Col>
        </Row>
        <Row className="my-5">
          {(features || []).map((feature, index) => {
            return (
              <Col lg={4} key={index.toString()}>
                <Card
                  className="bg-gray-50 shadow-none shapes"
                  data-aos="fade-up"
                  data-aos-duration={(index + (1 + index)) * 100}
                >
                  {(feature.shapes || []).map((shape, index) => {
                    return <div key={index.toString()} className={shape}></div>;
                  })}
                  <Card.Body className="text-center py-0">
                    <h3 className="fw-semibold mt-0">{feature.title}</h3>
                    <p className="fs-14">{feature.description}</p>

                    <div className="px-2 mt-3">
                      <img
                        src={feature.image}
                        alt=""
                        className="img-fluid mt-2"
                      />
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};
