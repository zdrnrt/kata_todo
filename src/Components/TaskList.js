import React, {Component} from 'react';
import Task from './Task';


function TaskList(props) {
  let filter = props.props.filter;
  let List = props.props.list.map( (item) => {
    console.log(filter.state != 'all' && filter.state == item, filter.state == item.state, item.id, filter.state,item.state);
    // if (filter.state != 'all' && filter.state == item.state){
    //   return <Task key={item.id} elem={item} listener={props.props.listener} />
    // } else {
    //   return <Task key={item.id} elem={item} listener={props.props.listener} />
    // }
    return <Task key={item.id} elem={item} listener={props.props.listener} />
  })
    return (
      <ul className="todo-list">
        {List}
      </ul>
    );
}

export default TaskList;
