import classNames from 'classnames';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import FeatherIcon from 'feather-icons-react';
import React from 'react';
import { Badge, Col, Container, Row } from 'react-bootstrap';

export interface IFeature {
  icon: string;
  variant: string;
  title: string;
  description: string;
}

type FeatureProps = {
  features: IFeature[];
};

export const Features: React.FC<FeatureProps> = ({ features }) => {
  return (
    <section className="position-relative overflow-hidden features-1 py-5">
      <Container>
        <Row>
          <Col className="text-center">
            <Badge pill bg="" className="badge-soft-primary px-2 py-1">
              Features
            </Badge>
            <h1 className="display-5 fw-semibold">
              Extension works best with Rabbithole
            </h1>
            <p className="text-muted mx-auto">
              Start working with{' '}
              <span className="text-primary fw-bold">Rabbithole</span> to curate
              better browsing experiences.
            </p>
          </Col>
        </Row>
        <Row className="align-items-center mt-0 mt-sm-5">
          <Col lg={5}>
            <div className="img-content position-relative">
              <div className="img-up">
                <img
                  src="http://localhost:3000/static/media/app2.747c6e5a4b92467bc909.png"
                  alt="app-img"
                  className="img-fluid d-block"
                  data-aos="zoom-in-right"
                />
              </div>
            </div>
          </Col>

          <Col lg={7}>
            <Row className="mt-5 mt-lg-0 ps-4 ps-sm-5">
              {(features || []).map((feature, index) => {
                return (
                  <Col md={6} key={index.toString()}>
                    <span
                      className={classNames(
                        'bg-soft-' + feature.variant,
                        'avatar',
                        'avatar-sm',
                        'rounded-lg',
                        'icon',
                        'icon-with-bg',
                        'icon-xs',
                        'text-' + feature.variant,
                      )}
                    >
                      <FeatherIcon
                        icon={feature.icon}
                        className={classNames('icon-dual-' + feature.variant)}
                      />
                    </span>
                    <h4 className="mt-3 mb-2 fw-semibold">{feature.title}</h4>
                    <p className="mb-4 pb-3 text-muted">
                      {feature.description}
                    </p>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
