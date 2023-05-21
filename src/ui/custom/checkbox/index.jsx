import React from 'react';
import styles from './styles.module.scss';
import { useState } from "react";

export function CheckboxWithCustomIcons({ checked, onChange, className, checkedIcon, uncheckedIcon }) {
    const [isChecked, setIsChecked] = useState(checked ? checked : false);

    function handleChange(externalOnChange) {
        setIsChecked((prev) => !prev);
        if (typeof externalOnChange === 'function') {
            externalOnChange();
        }
    }
    return (
        <label className={`${styles.checkbox} ${className ?? ''}`}>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={() => handleChange(onChange)}
            />
            <span className={styles.checkboxIcon}>
                {isChecked ? checkedIcon : uncheckedIcon}
            </span>
        </label>
    );
};