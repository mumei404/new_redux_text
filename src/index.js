import React from 'react';
import { render } from 'react-dom';
import tasksReducer from './reducers/tasks';
import TodoApp from './components/TodoApp';
import { createStore } from 'redux';

const store = createStore(tasksReducer);


render(
    <TodoApp store={store} />,
    document.getElementById('root')
);