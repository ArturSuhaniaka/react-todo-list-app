import React from 'react'
import styles from './styles.module.scss';
import { FiSquare, FiCheckSquare } from 'react-icons/fi';
import { MdDeleteForever } from 'react-icons/md';
import { Button } from '../../../ui/custom/button';
import { useDispatch } from 'react-redux';
import { completeTodo, removeTodo } from '../../../redux/todosSlice';
import { Draggable } from 'react-beautiful-dnd';

export function TodoItem({ todo, index, isDragDisabled }) {
    const dispatch = useDispatch();

    return (
        <Draggable
            draggableId={todo.id}
            index={index}
            isDragDisabled={isDragDisabled}
        >
            {(provided, snapshot) => (
                <div
                    className={`${styles.todoContainer} ` +
                        `${todo.isCompleted ? styles.todoCompleted : ''} ` +
                        `${snapshot.isDragging ? styles.onDragging : ''} `}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
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
            )}
        </Draggable>
    )
}