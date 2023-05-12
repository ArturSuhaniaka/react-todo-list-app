import React, { useEffect, useState } from 'react'
import { MdDeleteForever } from 'react-icons/md'
import { FiSquare, FiCheckSquare } from 'react-icons/fi'
import './styles.scss'

export function List({ onTodoCreated }) {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = () => {

            const keys = Object.keys(localStorage);
            const storedTodos = [];

            for (let key of keys) {
                storedTodos.push(JSON.parse(localStorage.getItem(key)));
            }

            setTodos(storedTodos);
        };

        fetchTodos();
    }, [onTodoCreated]);

    function handleComplete(id) {
        const updatedTodos = todos.map((elem) => {
            if (elem.id === id) {
                const updatedTodo = { ...elem, isCompleted: !elem.isCompleted }

                localStorage.setItem(updatedTodo.id, JSON.stringify(updatedTodo));

                return updatedTodo;
            }
            return elem;
        });

        setTodos(updatedTodos);
    }

    function handleDelete(id) {
        console.log('delete');
        localStorage.removeItem(id);

        setTodos((prevTodos) => {
            const updatedTodos = prevTodos.filter((todo) => todo.id !== id);
            return updatedTodos;
        });
    }

    if (todos.length < 1) {
        return <div className='empty-list-todos'>You have no active todoes...</div>
    }

    return (
        <div className='list-todos'>
            {todos.map((todo) => (
                <div key={todo.id} className={`todo-container ${todo.isCompleted ? 'completed' : ''}`}>
                    <button
                        className='btn btn-complete'
                        onClick={() => handleComplete(todo.id)}>
                        {todo.isCompleted ? <FiCheckSquare /> : <FiSquare />}
                    </button>
                    {/* <div className={`text-column ${todo.isCompleted && 'completed'}`}>{todo.text}</div> */}
                    <div className={'text-column'}>{todo.text}</div>
                    <button
                        className='btn btn-delete'
                        onClick={() => handleDelete(todo.id)}>
                        <MdDeleteForever />
                    </button>
                </div>
            ))}
        </div>
    );
}
