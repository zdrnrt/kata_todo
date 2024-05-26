import React from 'react';

export default function TaskFilter(props) {
    // console.log('filter', props.props);
    return (
        <>
            <ul className='filters'>
                <li>
                    <button className={props.props.state == 'all' ? 'selected' : ''}>All</button>
                </li>
                <li>
                    <button className={props.props.state == 'active' ? 'selected' : ''}>Active</button>
                </li>
                <li>
                    <button className={props.props.state == 'completed' ? 'selected' : ''}>Completed</button>
                </li>
            </ul>
            <button className='clear-completed'>Clear completed</button>
        </>
    )
}
