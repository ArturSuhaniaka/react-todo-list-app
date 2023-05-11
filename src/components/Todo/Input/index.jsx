import React from 'react';
import { useState } from 'react';
import { MdClear } from 'react-icons/md'
import { v4 as uuid } from 'uuid';

import './styles.scss';

export function Input() {
    const [inputText, setInputText] = useState('');

    const clearInputText = () => setInputText('');

    const createTodoItem = () => ({
        id: uuid(),
        text: inputText,
        isComplete: false,
    });

    const setDataInLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));

    const handleSubmit = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();

            const todoItem = createTodoItem();

            setDataInLocalStorage(todoItem.id, todoItem);

            clearInputText();
        }
    }

    return (
        <form className='form-group'>
            <input
                className='form-text'
                type='text'
                placeholder='Add a todo'
                autoComplete='off'
                value={inputText}
                name='text'
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleSubmit}
            />
            <button
                className='form-clear-btn'
                type='button'
                onClick={clearInputText}
            >
                <MdClear />
            </button>
        </form>
    );
};
