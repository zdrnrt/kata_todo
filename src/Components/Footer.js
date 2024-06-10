import React from 'react';
import TaskFilter from './TasksFilter';

export default function Footer(props){
    let count = props.list.reduce((sum, el) => sum += el.state == 'active' ? 1 : 0, 0 );
    return (
        <footer className="footer">
            <span className="todo-count">{count} items left</span>
            <TaskFilter props={props.props.filter} active={props.active}/>
        </footer>
    )
}