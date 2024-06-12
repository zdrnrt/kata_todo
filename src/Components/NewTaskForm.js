import React, {ReactDOM, Component} from "react";
import Task from './Task';

// class
/*
export default class NewTaskForm extends Component {
    constructor (){
        super();
        this.create = (event) => {
            if (event.nativeEvent.code === 'Enter' && event.target.value != '') {
                let count = document.querySelectorAll('.todo-list li').length;
                event.target.value = '';
            }
        }
    }
    render() {
        return (
            <input className="new-todo" placeholder="What needs to be done?" onKeyDown={this.create} autoFocus></input>
        )
    }
}
*/
// function
export default function NewTaskForm(props) {
    return (
        <input className="new-todo" placeholder="What needs to be done?" onKeyDown={props.props.items.create} autoFocus></input>
    )
}