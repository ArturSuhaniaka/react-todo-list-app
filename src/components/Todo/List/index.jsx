import React from 'react';
import styles from './styles.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { removeCompletedTodos } from '../../../redux/todosSlice';
import { getFilteredTodos, StatusFilters, getAllTodosCount } from '../../../helpers/filter.helper';
import { Button } from '../../../ui/custom/button';
import { Filters } from '../Filters';
import { TodoItem } from '../Item';


export function List() {
    const { status } = useSelector((state) => state.filters);
    const todos = useSelector(getFilteredTodos);
    const count = useSelector(getAllTodosCount);

    const dispatch = useDispatch();

    function renderEmptyList() {
        return (<p className={styles.emptyList}>You have no {status !== StatusFilters.All ? status.toLowerCase() : 'any'} todos...</p>)
    }

    function renderList(itemsToRender) {
        return (itemsToRender.map((todo) => <TodoItem key={todo.id} todo={todo} />))
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.countInfo}>{todos.length} of {count}</div>
                <Filters />
                <Button
                    icon='Remove completed'
                    onClick={() => dispatch(removeCompletedTodos())}
                    className={styles.clearCompletedBtn}
                />
            </div>
            {todos.length > 0 ? renderList(todos) : renderEmptyList()}
        </div>
    );
}
