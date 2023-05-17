import React from 'react'
import styles from './styles.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { statusFilterChanged } from '../../../redux/filtersSlice';
import { StatusFilters } from '../../../helpers/filter.helper';
import { Button } from '../../../ui/custom/button';

export function Filters() {
    const { status } = useSelector((state) => state.filters);
    const dispatch = useDispatch();

    const onStatusChange = (status) => dispatch(statusFilterChanged(status));

    const checkStatusSelected = (value) => (status === value ? styles.selected : '');

    const renderFilterButton = (filterStatus) => (
        <Button
            icon={filterStatus}
            onClick={() => onStatusChange(filterStatus)}
            className={`${styles.btn} ${checkStatusSelected(filterStatus)}`}
        />
    );

    return (
        <div className={styles.filtersContainer}>
            {renderFilterButton(StatusFilters.All)}
            {renderFilterButton(StatusFilters.Active)}
            {renderFilterButton(StatusFilters.Completed)}
        </div>
    )
}
