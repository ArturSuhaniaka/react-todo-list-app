import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export function Input({
  className,
  placeholder,
  value,
  onChange,
  onKeyDown,
  inputInvalid,
  inputErrorMsg,
  errorClassName,
}) {
  return (
    <div className={`${styles.input} ${className}`}>
      <input
        className={styles.inputText}
        type='text'
        placeholder={placeholder}
        autoComplete='off'
        value={value}
        name='text'
        onChange={e => onChange(e)}
        onKeyDown={onKeyDown}
      />
      {inputInvalid && <span className={errorClassName}>{inputErrorMsg}</span>}
    </div>
  );
}

Input.defaultProps = {
  className: '',
  onKeyDown: () => {},
  inputInvalid: false,
  inputErrorMsg: '',
  errorClassName: '',
};

Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func,
  inputInvalid: PropTypes.bool,
  inputErrorMsg: PropTypes.string,
  errorClassName: PropTypes.string,
};
