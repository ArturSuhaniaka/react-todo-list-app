import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { FiSquare, FiCheckSquare } from 'react-icons/fi';
import styles from './styles.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { completeTodo, removeTodo } from '../../../redux/todosSlice';
import { getFilteredTodos, StatusFilters } from '../../../helpers/filter.helper';
import { Button } from '../../../ui/custom/button';
import { Filters } from '../Filters';


export function List() {
    const { status } = useSelector((state) => state.filters);
    const todos = useSelector(getFilteredTodos);

    const dispatch = useDispatch();

    //Notify user if there is no todos
    if (todos.length < 1) {
        return (
            <>
                <div className={styles.container}>
                    <Filters />
                    <p>You have no {status !== StatusFilters.All ? status.toLowerCase() : 'any'} todos...</p>
                </div>
            </>
        )
    }

    return (
        <div className={styles.container}>
            <Filters />
            {todos.map((todo) => (
                <div key={todo.id} className={`${styles.todoContainer} ${todo.isCompleted ? styles.todoCompleted : ''}`}>
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
            ))}
        </div>
    );
}
