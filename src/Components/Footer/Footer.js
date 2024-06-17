import React from 'react';
import Filter from '../Filter';
import "./footer.css";

export default function Footer(props){
    const count = props.list.reduce((sum, el) => sum += el.state == 'active' ? 1 : 0, 0 );
    return (
        <footer className="footer">
            <span className="todo-count">{count} items left</span>
            <Filter listener={props.listener} active={props.active}/>
        </footer>
    )
}