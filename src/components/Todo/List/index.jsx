import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { FiSquare, FiCheckSquare } from 'react-icons/fi';
import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { completeTodo, removeTodo } from '../../../redux/todoSlice';

export function List() {
    const dispatch = useDispatch();

    const todos = useSelector(state => state.todos);

    //Notify user if there is no todos
    if (todos.length < 1) {
        return <div className='empty-list-todos'>You have no active todoes...</div>
    }

    return (
        <div className='list-todos'>
            {todos.map((todo) => (
                <div key={todo.id} className={`todo-container ${todo.isCompleted ? 'completed' : ''}`}>
                    <button
                        className='btn btn-complete'
                        onClick={() => dispatch(completeTodo(todo.id))}>
                        {todo.isCompleted ? <FiCheckSquare /> : <FiSquare />}
                    </button>
                    <div className={'text-column'}>{todo.text}</div>
                    <button
                        className='btn btn-delete'
                        onClick={() => dispatch(removeTodo(todo.id))}>
                        <MdDeleteForever />
                    </button>
                </div>
            ))}
        </div>
    );
}
