import React from 'react';

export default function TaskFilter(props) {
    return (
        <>
            <ul className='filters'>
                <li>
                    <button
                        data-value="all"
                        className={props.active == 'all' ? 'selected' : ''}
                        onClick={props.props.listener}
                    >
                        All
                    </button>
                </li>
                <li>
                    <button
                        data-value="active"
                        className={props.active == 'active' ? 'selected' : ''}
                        onClick={props.props.listener}
                    >
                        Active
                    </button>
                </li>
                <li>
                    <button
                        data-value="completed"
                        className={props.active == 'completed' ? 'selected' : ''}
                        onClick={props.props.listener}
                    >
                        Completed
                    </button>
                </li>
            </ul>
            <button
                data-value="active"
                className='clear-completed'
                onClick={props.props.clear}
            >
                Clear completed
            </button>
        </>
    )
}
