import React from 'react';
import { Helmet } from 'react-helmet';

import { Features, Hero, IFeature, IMoreFeatures } from '@rabbithole/ui';

const features: IFeature[] = [
  {
    icon: 'mail',
    variant: 'primary',
    title: 'First feature',
    description:
      'We use a customized application tobe specifically designed a testing gnose to keep away for people.',
  },
  {
    icon: 'shield',
    variant: 'success',
    title: 'Second feature',
    description:
      'In order to design a mobile app that is going to be module downloaded and accessed frequently by users.',
  },
  {
    icon: 'sliders',
    variant: 'orange',
    title: 'Third feature',
    description:
      'A Private Limited is the most popular type of partnership Malta. The limited liabilityis',
  },
  {
    icon: 'bell',
    variant: 'info',
    title: 'Fourth feature',
    description:
      "Few derived into talking being in merit long you'd his the of to had the to duties, it them one…",
  },
];

const moreFeatures: IMoreFeatures[] = [
  {
    image: 'http://localhost:3000/static/media/app3.4b667e4e75238d5c8300.png',
    shapes: ['shape1', 'shape2'],
    title: 'Quick Access to Tasks',
    description:
      'Save time and edit like a pro! Yes! you will be able to edit your application on the easy way.',
  },
  {
    image: 'http://localhost:3000/static/media/app4.f9f87785e0fc6d87d8a3.png',
    shapes: ['shape3', 'shape4'],
    title: 'Create Task Easily',
    description:
      'Speedy App provides instant information on thousands of hire and buy products.',
  },
  {
    image: 'http://localhost:3000/static/media/app4.f9f87785e0fc6d87d8a3.png',
    shapes: ['shape5', 'shape6'],
    title: 'Quick Access to Team',
    description:
      'Save time and edit like a pro! Yes! you will be able to edit your application on the easy way.',
  },
];

const LandingPage: React.FC = () => {
  return (
    <>
      <Helmet title="Landing" />
      <Hero />
      <Features {...{ features }} />
      {/* <MoreFeatures {...{ features: moreFeatures }} /> */}
      {/* <FaqPreview /> */}
    </>
  );
};

export default LandingPage;
