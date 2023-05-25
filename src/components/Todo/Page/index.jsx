import React from 'react';
import { InputForm } from '../InputForm';
import { List } from '../List';
import styles from './styles.module.scss';

export function Page() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Awesome TODO</p>
      <form className={styles.todoForm}>
        <InputForm />
      </form>
      <div className={styles.resultGroup}>
        <List />
      </div>
    </div>
  );
}
