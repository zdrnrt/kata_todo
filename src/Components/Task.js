import React, {Component} from 'react';

class Task extends Component {
    render () {
        return (
            <li classNameName="">
                <div className="view">
                    <input className="toggle" type="checkbox"></input>
                    <label>
                        <span className="description">Active task</span>
                        <span className="created">created 5 minutes ago</span>
                    </label>
                    <button className="icon icon-edit"></button>
                    <button className="icon icon-destroy"></button>
                </div>
            </li>
        );
    } 
}
export default Task;