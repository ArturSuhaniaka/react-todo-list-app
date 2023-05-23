import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles.module.scss';
import { statusFilterChanged } from '../../../redux/filtersSlice';
import { StatusFilters } from '../../../helpers/filter.helper';
import { Button } from '../../Shared/Button';

export function Filters() {
  const { status } = useSelector(state => state.filters);
  const dispatch = useDispatch();

  const onStatusChange = newStatus => dispatch(statusFilterChanged(newStatus));

  const checkStatusSelected = value =>
    status === value ? styles.selected : '';

  const renderFilterButton = filterStatus => (
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
  );
}
