import React, {Component} from "react";

export default class NewTaskForm extends Component {
    render () {
        return (
            <input class="new-todo" placeholder="What needs to be done?" autofocus></input>
        )
    }
}