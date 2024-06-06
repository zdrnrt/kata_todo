import React, {Component} from "react";

export default function NewTaskForm(props) {
    return (
        <input className="new-todo" placeholder="What needs to be done?" onKeyDown={props.props.items.create} autoFocus></input>
    )
}