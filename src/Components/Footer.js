import React from 'react';
import TaskFilter from './TasksFilter';

export default function Footer(props){
    return (
        <footer className="footer">
            <span className="todo-count">{props.props.items.list.length} items left</span>
            <TaskFilter props={props.props.filter} active={props.active}/>
        </footer>
    )
}