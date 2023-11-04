import React, { useEffect, useState } from 'react';
import { useRoutes } from 'react-router-dom';

import { AppLayout } from '@rabbithole/ui';

import { StaticTOSPage } from "./pages/tos.page";

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
    {
      element: <AppLayout />,
      children: [
        {
          path: '/terms-of-service',
          element: <StaticTOSPage />,
        },
      ],
    },
  ]);
};
