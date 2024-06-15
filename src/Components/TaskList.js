import React, { Component } from 'react';
import Task from './Task';

//class
/*
export default class TaskList extends Component {
  getList() {
    console.log('getList', this.props.props)
    let filter = this.props.props.filter.state;
    return this.props.props.items.list.map((item) => {
      if (filter == 'all') {
        return <Task key={item.id} elem={item} 
        //listener={props.props.items.listener}
        />;
      } else {
        if (filter == item.state) {
          return <Task key={item.id} elem={item} 
          //listener={props.props.items.listener}
           />;
        }
      }
    })
  }
  render() {
    console.log('tasklist', this.props);
    return (
      <ul className="todo-list">
        { this.getList() }
      </ul>
    )
  }
}
*/

// function
function TaskList(props) {
  // console.log('taskList', props)
  let filter = props.active;
  let List = props.list.map( (item) => {
    if (filter == 'all') {
      return <Task key={item.id} elem={item} listener={props.listener} />;
    } else {
      if (filter == item.state){
        return <Task key={item.id} elem={item} listener={props.listener} />;
      }
    }
  } );
  return (
    <ul className="todo-list">
      {List}
    </ul>
  );
}

export default TaskList;