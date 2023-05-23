import React, { useState } from 'react';
import { MdClear } from 'react-icons/md';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import styles from './styles.module.scss';
import { addTodo } from '../../../redux/todosSlice';
import { Button } from '../../Shared/Button';

export function Input() {
  const [inputText, setInputText] = useState('');
  const [inputError, setInputError] = useState(false);

  const dispatch = useDispatch();

  const clearInputText = () => {
    setInputError(false);
    setInputText('');
  };

  const createTodoItem = () => ({
    id: uuid(),
    text: inputText.trim(),
    isCompleted: false,
  });

  const handleSubmit = event => {
    if (event.key === 'Enter') {
      event.preventDefault();

      if (!inputText?.trim().length) {
        setInputError(true);
        return;
      }

      const todoItem = createTodoItem();
      dispatch(addTodo(todoItem));
      clearInputText();
    }
  };

  const onInputChange = event => {
    setInputText(event.target.value);
    setInputError(false);
  };

  return (
    <div className={styles.inputContainer}>
      <div className={styles.input}>
        <input
          className={styles.inputText}
          type='text'
          placeholder='Create a new todo...'
          autoComplete='off'
          value={inputText}
          name='text'
          onChange={e => onInputChange(e)}
          onKeyDown={handleSubmit}
        />
        {inputError && (
          <span className={styles.inputError}>
            I think you should enter something.
          </span>
        )}
      </div>
      <Button
        className={styles.clearBtn}
        icon={<MdClear />}
        onClick={clearInputText}
      />
    </div>
  );
}
