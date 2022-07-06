// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import FeatherIcon from 'feather-icons-react';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

import FormInput from './form-input.component';

export const Hero: React.FC = () => {
  return (
    <section className="position-relative hero-1 pt-7 pt-sm-6 pb-5">
      <Container className="hero-container">
        <Row className="text-center text-md-start">
          <Col lg={6} className="pt-2 pt-sm-3">
            <h1 className="hero-title">
              Lorem ipsum dolor sit amet,{' '}
              <span className="highlight highlight-warning d-inline-block">
                Rabbithole
              </span>{' '}
              consectetur adipiscing elit
            </h1>
            <p className="mt-3 fs-17 text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <div className="mt-4 mt-sm-5 pt-0">
              <Row className="g-2 text-start">
                <Col md={4} lg={6}>
                  <FormInput
                    type="email"
                    className="form-control mb-2 me-sm-2 shadow-sm"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                  />
                </Col>
                <Col sm={2}>
                  <Button type="submit" className="mb-2 text-nowrap">
                    Get updates
                  </Button>
                </Col>
              </Row>
            </div>
            <div className="d-flex mt-2">
              <div className="me-4">
                <FeatherIcon
                  icon="check-circle"
                  className="icon icon-dual-success icon-xs me-1"
                />
                Free
              </div>
              <div className="me-4">
                <FeatherIcon
                  icon="check-circle"
                  className="icon icon-dual-success icon-xs me-1"
                />
                Privacy compliant
              </div>
              <div>
                <FeatherIcon
                  icon="check-circle"
                  className="icon icon-dual-success icon-xs me-1"
                />
                Minimal Setup
              </div>
            </div>
          </Col>
          <Col lg={{ offset: 2, span: 4 }} className="text-end">
            <div className="position-relative">
              <div className="hero-img mt-4 mt-sm-0">
                <img
                  src="http://localhost:3000/static/media/app1.5399afbbb2dd5d1328aa.png"
                  alt="extension"
                  className="img-fluid"
                  data-bs-aos="zoom-in-up"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
