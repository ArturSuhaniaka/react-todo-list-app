import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.module.scss';

export function Button({ icon, className, onClick }) {
  const wrapperClasses = classNames(styles.btn, className);

  return (
    <button type='button' className={wrapperClasses} onClick={onClick}>
      {icon}
    </button>
  );
}

Button.defaultProps = {
  icon: 'Button',
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
