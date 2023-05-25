import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import styles from './styles.module.scss';
import { removeCompletedTodos, reorderTodos } from '../../../redux/todosSlice';
import {
  getFilteredTodos,
  StatusFilters,
  getAllTodosCount,
} from '../../../helpers/filter.helper';
import { Button } from '../../Shared/Button';
import { Filters } from '../Filters';
import { TodoItem } from '../Item/index';
import { StrictModeDroppable } from '../../../helpers/StrictModeDroppable';

export function List() {
  const { status } = useSelector(state => state.filters);
  const todos = useSelector(getFilteredTodos);
  const count = useSelector(getAllTodosCount);

  const dispatch = useDispatch();

  function handleDrop(result) {
    const { destination, source } = result;

    // out of droppable container
    if (!destination) {
      return;
    }

    // put on the same place
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // create new state
    const reorderedTodos = [...todos];

    // Remove dragged item from array
    const [reorderedItem] = reorderedTodos.splice(source.index, 1);

    // Add dropped item to specific place
    reorderedTodos.splice(destination.index, 0, reorderedItem);

    // Update State
    dispatch(reorderTodos(reorderedTodos));
  }

  function renderEmptyList() {
    return (
      <p className={styles.emptyList}>
        You have no{' '}
        {status !== StatusFilters.All ? status.toLowerCase() : 'any'} todos...
      </p>
    );
  }

  function renderDraggableList(itemsToRender, isDragDisabled) {
    return (
      // eslint-disable-next-line react/jsx-no-bind
      <DragDropContext onDragEnd={handleDrop}>
        <StrictModeDroppable droppableId='todos-container-unique'>
          {provided => (
            <div
              className={styles.droppableContainer}
              ref={provided.innerRef}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...provided.droppableProps}
            >
              {itemsToRender.map((todo, index) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  index={index}
                  isDragDisabled={isDragDisabled}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </StrictModeDroppable>
      </DragDropContext>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.countInfo}>
          {todos.length} of {count}
        </div>
        <Filters />
        <Button
          icon='Remove completed'
          onClick={() => dispatch(removeCompletedTodos())}
          className={styles.clearCompletedBtn}
        />
      </div>
      {todos.length < 1
        ? renderEmptyList()
        : // enable dnd only for StatusFilters.All
          renderDraggableList(todos, status !== StatusFilters.All)}
      <div className={styles.footer}>
        {status === StatusFilters.All && todos.length > 1 ? (
          <p> Drag and drop to reorder list</p>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
