import React, {Component} from 'react';
import { formatDistance, subDays } from 'date-fns';

/*
<li class="completed">
            <div class="view">
              <input class="toggle" type="checkbox"></input>
              <label>
                <span class="description">Completed task</span>
                <span class="created">created 17 seconds ago</span>
              </label>
              <button class="icon icon-edit"></button>
              <button class="icon icon-destroy"></button>
            </div>
          </li>
          <li class="editing">
            <div class="view">
              <input class="toggle" type="checkbox"></input>
              <label>
                <span class="description">Editing task</span>
                <span class="created">created 5 minutes ago</span>
              </label>
              <button class="icon icon-edit"></button>
              <button class="icon icon-destroy"></button>
            </div>
            <input type="text" class="edit" value="Editing task"></input>
          </li>
          <li>
            <div class="view">
              <input class="toggle" type="checkbox"></input>
              <label>
                <span class="description">Active task</span>
                <span class="created">created 5 minutes ago</span>
              </label>
              <button class="icon icon-edit"></button>
              <button class="icon icon-destroy"></button>
            </div>
          </li>

*/

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