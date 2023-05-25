import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.module.scss';

export function Checkbox({
  checked,
  onChange,
  className,
  checkedIcon,
  uncheckedIcon,
}) {
  const [isChecked, setIsChecked] = useState(checked);

  const wrapperClasses = classNames(styles.checkbox, className);

  function handleChange(externalOnChange) {
    setIsChecked(prev => !prev);
    if (typeof externalOnChange === 'function') {
      externalOnChange();
    }
  }
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={wrapperClasses}>
      <input
        type='checkbox'
        checked={isChecked}
        onChange={() => handleChange(onChange)}
      />
      <span className={styles.checkboxIcon}>
        {isChecked ? checkedIcon : uncheckedIcon}
      </span>
    </label>
  );
}

Checkbox.defaultProps = {
  onChange: () => {},
  className: '',
  checkedIcon: 'v',
  uncheckedIcon: 'o',
};

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
  className: PropTypes.string,
  checkedIcon: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
  ]),
  uncheckedIcon: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
  ]),
};
