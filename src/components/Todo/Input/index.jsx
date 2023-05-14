import React, { useState } from 'react';
import { MdClear } from 'react-icons/md'
import { v4 as uuid } from 'uuid';
import './styles.scss';
import { useDispatch } from "react-redux";
import { addTodo } from '../../../redux/todoSlice';

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

    const handleSubmit = (event) => {
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
    }

    return (
        <form className='form-group'>
            <div className='input-group'>
                <input
                    className='form-text'
                    type='text'
                    placeholder='Create a new todo...'
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
            </div>
            {inputError && <span className='input-error'>
                <p> I think you should enter something.</p>
            </span>}
        </form>
    );
};
