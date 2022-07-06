import classNames from 'classnames';
import React, { useEffect } from 'react';
import { Container, Nav, Navbar as RBNavbar } from 'react-bootstrap';

import Logo from '../assets/logoipsum-logo.svg';
import { Menu } from './menu.component';

type NavbarProps = {
  isSticky?: boolean;
  navClass?: string;
  buttonClass?: string;
  fixedWidth?: boolean;
};

export const Navbar: React.FC<NavbarProps> = ({
  isSticky,
  navClass,
  buttonClass,
  fixedWidth,
}) => {
  useEffect(() => {
    const btnTop = document.getElementById('btn-back-to-top');
    const navbar = document.getElementById('sticky');
    window.addEventListener('scroll', (e) => {
      e.preventDefault();
      if (btnTop) {
        if (
          document.body.scrollTop >= 50 ||
          document.documentElement.scrollTop >= 50
        ) {
          btnTop.classList.add('show');
        } else {
          btnTop.classList.remove('show');
        }
      }
      if (navbar) {
        if (
          document.body.scrollTop >= 240 ||
          document.documentElement.scrollTop >= 240
        ) {
          navbar.classList.add('navbar-sticky');
        } else {
          navbar.classList.remove('navbar-sticky');
        }
      }
    });
  }, []);
  return (
    <section>
      <header>
        <RBNavbar
          id={isSticky ? 'sticky' : ''}
          collapseOnSelect
          expand="lg"
          className={classNames('topnav-menu', navClass)}
        >
          <Container fluid={!fixedWidth}>
            <RBNavbar.Brand href="/">
              <img
                src={Logo}
                height="30"
                className="d-inline-block align-top"
                alt="logo"
              />
            </RBNavbar.Brand>
            <RBNavbar.Toggle aria-controls="responsive-navbar-nav" />
            <RBNavbar.Collapse id="responsive-navbar-nav">
              <Menu
                navClass="mx-auto"
                buttonClass={buttonClass ? buttonClass : 'btn-primary'}
              />
              <Nav as="ul" className="align-items-lg-center">
                {/* <Nav.Item as="li">
                  <NavLink
                    to="/auth/login"
                    className="btn btn-sm me-2 fw-medium fs-15 shadow-none text-dark"
                  >
                    Login
                  </NavLink>
                </Nav.Item> */}

                <Nav.Item as="li">
                  <a
                    href="https://chrome.google.com/webstore/category/extensions"
                    className={classNames(
                      'btn',
                      buttonClass ? buttonClass : 'btn-soft-primary',
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download
                  </a>
                </Nav.Item>
              </Nav>
            </RBNavbar.Collapse>
          </Container>
        </RBNavbar>
      </header>
    </section>
  );
};
