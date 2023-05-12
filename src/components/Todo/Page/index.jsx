import React, { useState, useEffect } from 'react';
import { Input } from '../Input';
import { List } from '../List';
import './styles.scss';

export function Page() {
    const [todoCreated, setTodoCreated] = useState(false);

    const handleTodoCreated = () => {
        setTodoCreated(true);
    };

    useEffect(() => {
        if (todoCreated) {
            setTodoCreated(false)
        }
    }, [todoCreated]);

    return (
        <div className='container'>
            <p className='title'>Awesome TODO</p>
            <Input onTodoCreated={handleTodoCreated} />
            <List onTodoCreated={todoCreated} />
        </div>
    );
};
