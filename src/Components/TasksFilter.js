import React from 'react';

function TaskFilter(props) {
    return (
        <>
            <ul className='filters'>
                <li>
                    <button
                        data-value="all"
                        className={props.active == 'all' ? 'selected' : ''}
                        onClick={props.listener['taskFilter']}
                    >
                        All
                    </button>
                </li>
                <li>
                    <button
                        data-value="active"
                        className={props.active == 'active' ? 'selected' : ''}
                        onClick={props.listener['taskFilter']}
                    >
                        Active
                    </button>
                </li>
                <li>
                    <button
                        data-value="completed"
                        className={props.active == 'completed' ? 'selected' : ''}
                        onClick={props.listener['taskFilter']}
                    >
                        Completed
                    </button>
                </li>
            </ul>
            <button
                className='clear-completed'
                onClick={props.listener['taskFilterClean']}
            >
                Clear completed
            </button>
        </>
    )
}


export default TaskFilter;