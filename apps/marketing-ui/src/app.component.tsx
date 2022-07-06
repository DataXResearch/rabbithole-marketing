import AOS from 'aos';
import React, { Suspense, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';

import { Routes } from './routes.component';

const helmet = {
  title: 'Rabbithole',
  titleTemplate: '%s | DataX Research Platform Product',
  htmlAttributes: { lang: 'en' },
  meta: [
    {
      name: 'description',
      content:
        'The easiest and fastest way to communite with others and make friends.',
    },
  ],
};

export const App: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Suspense fallback={<div className="loading" />}>
      <Helmet {...helmet} />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
