import classNames from 'classnames';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import FeatherIcon from 'feather-icons-react';
import React, { useContext } from 'react';
import {
  Accordion,
  AccordionContext,
  Card,
  useAccordionButton,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

type CustomToggleProps = {
  children: React.ReactNode;
  eventKey: string;
  containerClass: string;
  linkClass: string;
  callback?: (eventKey: string) => void;
};

const CustomToggle = ({
  children,
  eventKey,
  containerClass,
  linkClass,
  callback,
}: CustomToggleProps) => {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = activeEventKey === eventKey;
  return (
    <Link
      to="#"
      className={classNames(linkClass, {
        collapsed: !isCurrentEventKey,
      })}
      onClick={decoratedOnClick}
    >
      <Card.Header>
        <h5 className={containerClass}>
          {children}{' '}
          <FeatherIcon
            icon="chevron-down"
            className="icon-xs accordion-arrow"
          />
        </h5>
      </Card.Header>
    </Link>
  );
};

export const FaqPreviewContent: React.FC = () => {
  const faqs = [
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
      ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
      ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
      ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
      ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    },
  ];

  return (
    <div id="faqContent">
      <Accordion
        defaultActiveKey="0"
        className="custom-accordionwitharrow"
        id="accordionExample"
      >
        {(faqs || []).map((item, index) => {
          return (
            <Card className="mb-2 border rounded-sm" key={index.toString()}>
              <CustomToggle
                eventKey={String(index)}
                containerClass="my-1 fw-medium"
                linkClass="text-dark"
              >
                {item.question}
              </CustomToggle>
              <Accordion.Collapse eventKey={String(index)}>
                <Card.Body className="text-muted pt-1">{item.ans}</Card.Body>
              </Accordion.Collapse>
            </Card>
          );
        })}
      </Accordion>
    </div>
  );
};
