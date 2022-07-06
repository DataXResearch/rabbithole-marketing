import React from 'react';
import { useRoutes } from 'react-router-dom';

import { AppLayout } from '@rabbithole/ui';

const LandingPage = React.lazy(() => import('./pages/landing.page'));

export const Routes: React.FC = () => {
  return useRoutes([
    {
      // public routes
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <LandingPage />,
        },
      ],
    },
  ]);
};
