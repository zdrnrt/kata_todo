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

//class
/*
export default class Task extends Component {
  constructor() {
    super();
    this.state = {
      state: 'active',
      title: this.props.title,
    }
    this.submit = (event) => {
      let item = event.target.closest('[data-id]');
      item.classList.toggle('active');
      item.classList.toggle('completed');
    }
    this.editing = (event) => {
      let item = event.target.closest('[data-id]');
      item.classList.remove('active', 'completed');
      item.classList.add('editing');
    };
    this.edit = (event) => {
      let item = event.target.closest('[data-id]');
      if (event.nativeEvent.code === 'Enter' && event.target.value != '') {
            item.querySelector('.description').innerText = event.target.value;
            item.classList.remove('editing');
            item.classList.add('active');
      }
    };
    this.destroy = (event) => {
      event.target.closest('[data-id]').remove();
    };
  }
  
  render(){
    let data = this.props.elem;
    return(
      <li data-id={data.id} className={data.state}>
        <div className='view'>
          <input className='toggle' type='checkbox' data-value={data.state == 'completed' ? 'active' : 'completed'} defaultChecked={data.state == 'completed' ? true : false} onClick={this.submit} />
          <label>
            <span className='description'>{data.title}</span>
            <span className='created' data-date={data.date}>{formatDistance(new Date(data.date), new Date(), { includeSeconds: true })}</span>
          </label>
          <button className='icon icon-edit' data-value='editing' onClick={this.editing}></button>
          <button className='icon icon-destroy' data-value='destroy' onClick={this.destroy}></button>
        </div>
        <input type="text" className="edit" onKeyDown={this.edit} defaultValue={data.title}/>
      </li>
    )
  }
}
*/
//function
function Task(props) {
    let data = props.elem;
    return (
        <li data-id={data.id} className={data.state}>
            <div className='view'>
                <input className='toggle' type='checkbox' data-value={data.state == 'completed' ? 'active' : 'completed' } onChange={props.listener.state} defaultChecked={data.state == 'completed' ? true : false}/>
                <label>
                    <span className='description'>{data.title}</span>
                    <span className='created' data-date={data.date}>{formatDistance(new Date(data.date), new Date(),  { includeSeconds: true })}</span>
                </label>
                <button className='icon icon-edit' data-value='editing' onClick={props.listener.state}></button>
                <button className='icon icon-destroy' data-value='destroy' onClick={props.listener.destroy}></button>
            </div>
            <input type="text" className="edit" onKeyDown={props.listener.edit} defaultValue={data.title}/>
        </li>
    );
}
export default Task;