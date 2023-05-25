import React, { useState } from 'react';
import { MdClear } from 'react-icons/md';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import styles from './styles.module.scss';
import { addTodo } from '../../../redux/todosSlice';
import { Input } from '../../Shared/Input';
import { Button } from '../../Shared/Button';

export function InputForm() {
  const [inputText, setInputText] = useState('');
  const [inputInvalid, setInputInvalid] = useState(false);

  const inputErrorMsg = 'I think you should enter something...';

  const dispatch = useDispatch();

  const clearInputText = () => {
    setInputInvalid(false);
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
        setInputInvalid(true);
        return;
      }

      const todoItem = createTodoItem();
      dispatch(addTodo(todoItem));
      clearInputText();
    }
  };

  const onInputChange = event => {
    setInputText(event.target.value);
    setInputInvalid(false);
  };

  return (
    <div className={styles.inputContainer}>
      <Input
        className={styles.input}
        placeholder='Create a new todo...'
        value={inputText}
        onChange={onInputChange}
        onKeyDown={handleSubmit}
        inputInvalid={inputInvalid}
        inputErrorMsg={inputErrorMsg}
        errorClassName={styles.inputError}
      />
      <Button
        className={styles.clearBtn}
        icon={<MdClear />}
        onClick={clearInputText}
      />
    </div>
  );
}
