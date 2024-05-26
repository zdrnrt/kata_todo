import React from 'react';
import TaskFilter from './TasksFilter';

export default class Footer extends React.Component{
    render() {
        return (
            <footer className="footer">
                <span className="todo-count">1 items left</span>
                <TaskFilter />
            </footer>
        )
    }
}