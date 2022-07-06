import classNames from 'classnames';
import React from 'react';
import { FiArrowUp } from 'react-icons/fi';
import { Link } from 'react-router-dom';

type BackToTopProps = {
  variant?: string;
};

export const BackToTop: React.FC<BackToTopProps> = ({
  variant = 'primary',
}) => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <Link
      className={classNames(
        'btn',
        'btn-soft-' + variant,
        'shadow-none',
        'btn-icon',
        'btn-back-to-top',
      )}
      id="btn-back-to-top"
      to="#"
      onClick={scrollToTop}
    >
      <FiArrowUp className="icon-xxs" />
    </Link>
  );
};
