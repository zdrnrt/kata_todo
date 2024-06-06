import React, {Component} from 'react';
import Task from './Task';


function TaskList(props) {
  let filter = props.active;
  let List = props.list.map( (item) => {
    if (filter == 'all') {
      return <Task key={item.id} elem={item} listener={props.props.items.listener} />;
    } else {
      if (filter == item.state){
        return <Task key={item.id} elem={item} listener={props.props.items.listener} />;
      }
    }
  })
    return (
      <ul className="todo-list">
        {List}
      </ul>
    );
}

export default TaskList;
