import React from 'react';
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
