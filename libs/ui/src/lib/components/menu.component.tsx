import classNames from 'classnames';
import React from 'react';
import { Nav } from 'react-bootstrap';

type MenuProps = {
  navClass?: string;
  buttonClass?: string;
};

export const Menu: React.FC<MenuProps> = ({ navClass, buttonClass }) => {
  return (
    <Nav as="ul" className={classNames('align-items-lg-center', navClass)}>
      {/* <Nav.Item as="li">
        <NavLink
          to="/home"
          end
          className={classNames(
            'nav-link',
            ({ ...isActive }) => isActive && 'active',
          )}
        >
          Landing
        </NavLink>
      </Nav.Item>
      <Nav.Item as="li">
        <NavLink
          to="/contact"
          end
          className={classNames(
            'nav-link',
            ({ ...isActive }) => isActive && 'active',
          )}
        >
          Contact
        </NavLink>
      </Nav.Item> */}
    </Nav>
  );
};
