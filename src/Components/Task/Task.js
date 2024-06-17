import React, {Component} from 'react';
import { formatDistance, subDays } from 'date-fns';
import "./Task.css"
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
    console.log('TaskItem', data, data.state == 'completed')
    return (
        <li data-id={data.id} className={data.state}>
            <div className='view'>
                <input className='toggle' type='checkbox' data-value={data.state == 'completed' ? 'active' : 'completed'} onChange={props.listener} checked={data.state == 'completed'}/>
                <label>
                    <span className='description'>{data.title}</span>
                    <span className='created'>{formatDistance(new Date(data.date), Date.now(), { includeSeconds: true })}</span>
                </label>
                <button className='icon icon-edit' data-value='editing' onClick={props.listener}></button>
                <button className='icon icon-destroy' data-value='destroy' onClick={props.listener}></button>
            </div>
            <input type="text" className="edit" onKeyDown={props.listener} data-value="edit" defaultValue={data.title}/>
        </li>
    );
}
export default Task;