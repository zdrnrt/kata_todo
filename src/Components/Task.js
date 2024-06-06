import React, {Component} from 'react';
import { formatDistance, subDays } from 'date-fns';

/*
<li class='completed'>
            <div class='view'>
              <input class='toggle' type='checkbox'></input>
              <label>
                <span class='description'>Completed task</span>
                <span class='created'>created 17 seconds ago</span>
              </label>
              <button class='icon icon-edit'></button>
              <button class='icon icon-destroy'></button>
            </div>
          </li>
          <li class='editing'>
            <div class='view'>
              <input class='toggle' type='checkbox'></input>
              <label>
                <span class='description'>Editing task</span>
                <span class='created'>created 5 minutes ago</span>
              </label>
              <button class='icon icon-edit'></button>
              <button class='icon icon-destroy'></button>
            </div>
            <input type='text' class='edit' value='Editing task'></input>
          </li>
          <li>
            <div class='view'>
              <input class='toggle' type='checkbox'></input>
              <label>
                <span class='description'>Active task</span>
                <span class='created'>created 5 minutes ago</span>
              </label>
              <button class='icon icon-edit'></button>
              <button class='icon icon-destroy'></button>
            </div>
          </li>

*/

function Task(props) {
    let data = props.elem;
    return (
        <li data-id={data.id} className={data.state}>
            <div className='view'>
                <input className='toggle' type='checkbox' data-value={data.state == 'completed' ? 'active' : 'completed' } onChange={props.listener.state} defaultChecked={data.state == 'completed' ? true : false}/>
                <label>
                    <span className='description'>{data.title}</span>
                    <span className='created' data-date={data.date}>{formatDistance(new Date(data.date), new Date())}</span>
                </label>
                <button className='icon icon-edit' data-value='editing' onClick={props.listener.state}></button>
                <button className='icon icon-destroy' data-value='destroy' onClick={props.listener.destroy}></button>
            </div>
            <input type="text" className="edit" onKeyDown={props.listener.edit} defaultValue={data.title}/>
        </li>
    );
}
export default Task;