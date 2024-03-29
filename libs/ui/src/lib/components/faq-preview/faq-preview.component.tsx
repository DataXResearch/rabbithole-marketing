import React from 'react';
import { Badge, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { FaqPreviewContent } from './faq-preview-content.component';

export const FaqPreview: React.FC = () => {
  return (
    <section className="section py-6 pt-sm-6 position-relative">
      <Container data-aos="fade-up" data-aos-duration="2000">
        <Row>
          <Col className="text-center">
            <Badge pill bg="" className="badge-soft-primary px-2 py-1">
              FAQs
            </Badge>
            <h1 className="display-5 fw-medium">Frequently Asked Questions</h1>
            <p className="text-muted mx-auto">
              Here are some of the basic types of questions for our customers
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col md={10} lg={8}>
            <FaqPreviewContent />
          </Col>
        </Row>

        <Row className="justify-content-center mt-5">
          <Col xs="auto">
            <div className="rounded d-inline-block py-2 px-3 alert bg-light">
              <div className="align-items-center">
                <div className="text-dark">
                  Still require support? <Link to="contact">Contact Us</Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
