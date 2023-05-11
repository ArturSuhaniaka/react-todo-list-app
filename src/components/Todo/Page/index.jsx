import React from 'react';
import { Input } from '../Input';
import './styles.scss';

export function Page() {
    return (
        <div className='container'>
            <p className='title'>Awesome TODO</p>
            <Input />
        </div>
    );
};
