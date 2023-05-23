import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export function Button({ icon, className, onClick }) {
  return (
    <button
      type='button'
      className={`${styles.btn} ${className ?? ''}`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
}

Button.defaultProps = {
  icon: 'o',
  className: '',
};

Button.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
  ]),
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
