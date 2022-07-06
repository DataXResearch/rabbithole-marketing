import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Logo from '../assets/logoipsum-logo.svg';

export const Footer: React.FC = () => {
  return (
    <section
      className="section pt-lg-5 pt-3 pb-3 position-relative"
      data-aos="fade-up"
      data-aos-duration="1400"
    >
      <Container>
        <Row className="align-items-center">
          <Col className="text-center">
            <ul className="list-inline list-with-separator">
              <li className="list-inline-item me-0">
                <Link to="/">Landing</Link>
              </li>
              {/* <li className="list-inline-item me-0">
                <Link to="#">Offerings</Link>
              </li> */}
              <li className="list-inline-item me-0">
                <Link to="#">Contact</Link>
              </li>
              {/* <li className="list-inline-item me-0">
                <Link to="#">Privacy</Link>
              </li>
              <li className="list-inline-item me-0">
                <Link to="#">Terms</Link>
              </li> */}
              {/* <li className="list-inline-item me-0">
                <Link to="#">
                  Careers
                  <span className="align-middle badge badge-soft-info rounded-pill fw-normal fs-11 px-2 py-1 ms-1">
                    We're hiring
                  </span>
                </Link>
              </li> */}
            </ul>
            <p className="mt-2 fs-14">
              Presented by DataX Research. Crafted with love by{' '}
              <a href="https://www.dezzign.studio/">Sal Anvarov</a>
            </p>
            <img src={Logo} height="30" className="mt-2 mb-4" alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
