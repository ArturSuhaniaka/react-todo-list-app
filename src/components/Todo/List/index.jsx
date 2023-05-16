import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { FiSquare, FiCheckSquare } from 'react-icons/fi';
import styles from './styles.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { completeTodo, removeTodo } from '../../../redux/todoSlice';
import { Button } from '../../../ui/custom/button';

export function List() {
    const dispatch = useDispatch();

    const todos = useSelector(state => state.todos);

    //Notify user if there is no todos
    if (todos.length < 1) {
        return <div className={styles.container}>You have no active todos...</div>
    }

    return (
        <div className={styles.container}>
            {todos.map((todo) => (
                <div key={todo.id} className={`${styles.todoContainer} ${todo.isCompleted ? styles.todoCompleted : ''}`}>
                    <Button
                        className={styles.btn}
                        icon={todo.isCompleted ? <FiCheckSquare size={18} /> : <FiSquare size={18} />}
                        onClick={() => dispatch(completeTodo(todo.id))}>
                    </Button>
                    <div className={styles.todoText}>
                        {todo.text}
                    </div>
                    <Button
                        className={`${styles.btn} ${styles.deleteBtn}`}
                        icon={<MdDeleteForever size={20} />}
                        onClick={() => dispatch(removeTodo(todo.id))}>
                    </Button>
                </div>
            ))}
        </div>
    );
}
