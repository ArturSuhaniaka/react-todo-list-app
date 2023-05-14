import React from 'react';
import { Input } from '../Input';
import { List } from '../List';
import './styles.scss';

export function Page() {
    return (
        <div className='container'>
            <p className='title'>Awesome TODO</p>
            <Input />
            <List />
        </div>
    );
};
