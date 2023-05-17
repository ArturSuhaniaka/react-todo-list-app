import React from 'react'
import styles from './styles.module.scss';
import { FiSquare, FiCheckSquare } from 'react-icons/fi';
import { MdDeleteForever } from 'react-icons/md';
import { Button } from '../../../ui/custom/button';
import { useDispatch } from 'react-redux';
import { completeTodo, removeTodo } from '../../../redux/todosSlice';

export function TodoItem({ todo }) {
    const dispatch = useDispatch();

    return (
        <div className={`${styles.todoContainer} ${todo.isCompleted ? styles.todoCompleted : ''}`}>
            <Button
                className={styles.btn}
                icon={todo.isCompleted ? <FiCheckSquare size={18} /> : <FiSquare size={18} />}
                onClick={() => dispatch(completeTodo(todo.id))}
            />
            <div className={styles.todoText}>
                {todo.text}
            </div>
            <Button
                className={`${styles.btn} ${styles.deleteBtn}`}
                icon={<MdDeleteForever size={20} />}
                onClick={() => dispatch(removeTodo(todo.id))}
            />
        </div>
    )
}