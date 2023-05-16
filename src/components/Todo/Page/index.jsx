import React from 'react';
import { Input } from '../Input';
import { List } from '../List';
import styles from './styles.module.scss';

export function Page() {
    return (
        <div className={styles.container}>
            <p className={styles.title}>Awesome TODO</p>
            <form className={styles.todoForm}>
                <Input />
            </form>
            <div className={styles.resultGroup}>
                <List />
            </div>
        </div>
    );
};
