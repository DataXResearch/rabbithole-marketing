import React from 'react';
import { Outlet } from 'react-router-dom';

import { BackToTop } from '../components/back-to-top.component';
import { Footer } from '../components/footer.component';
import { Navbar } from '../components/navbar.component';

export const AppLayout: React.FC = () => {
  return (
    <>
      <Navbar navClass="navbar-light" fixedWidth />
      <Outlet />
      <Footer />
      <BackToTop />
    </>
  );
};
