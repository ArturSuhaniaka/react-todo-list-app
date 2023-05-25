import React from 'react';
import PropTypes from 'prop-types';
import { FiSquare, FiCheckSquare } from 'react-icons/fi';
import { MdDeleteForever } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';
import { Button } from '../../Shared/Button';
import { completeTodo, removeTodo } from '../../../redux/todosSlice';
import styles from './styles.module.scss';
import { Checkbox } from '../../Shared/Checkbox';

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
          className={
            `${styles.todoContainer} ` +
            `${todo.isCompleted ? styles.todoCompleted : ''} ` +
            `${snapshot.isDragging ? styles.onDragging : ''} `
          }
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...provided.draggableProps}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Checkbox
            checked={todo.isCompleted}
            onChange={() => dispatch(completeTodo(todo.id))}
            className={styles.checkbox}
            checkedIcon={<FiCheckSquare size={18} />}
            uncheckedIcon={<FiSquare size={18} />}
          />
          <div className={styles.todoText}>{todo.text}</div>
          <Button
            className={`${styles.btn} ${styles.deleteBtn}`}
            icon={<MdDeleteForever size={20} />}
            onClick={() => dispatch(removeTodo(todo.id))}
          />
        </div>
      )}
    </Draggable>
  );
}

TodoItem.defaultProps = {
  isDragDisabled: false,
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  isDragDisabled: PropTypes.bool,
};
