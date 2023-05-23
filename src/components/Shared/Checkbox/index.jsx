import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export function CheckboxWithCustomIcons({
  checked,
  onChange,
  className,
  checkedIcon,
  uncheckedIcon,
}) {
  const [isChecked, setIsChecked] = useState(checked);

  function handleChange(externalOnChange) {
    setIsChecked(prev => !prev);
    if (typeof externalOnChange === 'function') {
      externalOnChange();
    }
  }
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={`${styles.checkbox} ${className ?? ''}`}>
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

CheckboxWithCustomIcons.defaultProps = {
  onChange: () => {},
  className: '',
  checkedIcon: 'v',
  uncheckedIcon: 'o',
};

CheckboxWithCustomIcons.propTypes = {
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
