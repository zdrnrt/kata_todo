import React, { Component, useState } from 'react';
import { format } from "date-fns";
import NewTaskForm from './NewTaskForm';
import TaskList from './TaskList';
import Footer from './Footer'

// class
/*
export default class App extends Component {
  render(){
    console.log('app', this.props.props);
    // let [filter, setFilter] = useState(this.props.props.filter.state);
    // let [taskList, changeList] = useState(this.props.items.list);
    let data = this.props.props;
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm />
        </header>
        <section className="main">
            <TaskList props={data}  />
          {/
            // list={this.props.props.items.list} active={this.props.props.filter}
            <Footer props={this.props} active={filter} />
          /}
        </section>
      </section>
    );
  }
}
*/
// function

export default function App() {

  let data = {
    items: {
      list: [
        { id: 1, state: 'active', title: 'Задача 1', date: '2024-05-25' },
        { id: 2, state: 'active', title: 'Задача 2', date: '2024-05-24' },
        { id: 3, state: 'completed', title: 'Задача 3', date: '2024-06-1' },
        { id: 4, state: 'completed', title: 'Задача 4', date: '2024-06-10:23:40' }
      ],
      listener: {
        state(e) {
          changeList(taskList.map(function (el) {
            if (el.id == e.target.closest('[data-id]').dataset.id) {
              el.state = e.target.dataset.value;
            }
            return el
          }));
        },
        destroy(e) {
          let id = event.target.closest('[data-id]').dataset.id;
          changeList(taskList.filter((el) => el.id != id));
        },
        edit(e) {
          if (e.nativeEvent.code === 'Enter' && e.target.value != '') {
            changeList(taskList.map(function (el) {
              if (el.id == e.target.closest('[data-id]').dataset.id) {
                el.title = e.target.value;
                el.state = 'active';
              }
              return el
            }));
          }
        }
      },

      create: function (e) {
        if (e.nativeEvent.code === 'Enter' && e.target.value != '') {
          changeList([...taskList, {id: taskList.length + 1, state: 'active', title: e.target.value, date: format(new Date(), "yyyy-MM-dd:H:m")}]);
          e.target.value = '';
        }
      }
    },
    filter: {
      state: 'all',
      listener: function () {
        let filter = event.target;
        setFilter(filter.dataset.value)
      },
      clear: function () {
        changeList(taskList.filter((el) => el.state != 'completed'));
      }
    }
  };

  let [filter, setFilter] = useState(data.filter.state);

  let [taskList, changeList] = useState(data.items.list);

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm props={data} />
      </header>
      <section className="main">
        <TaskList props={data} list={taskList} active={filter} />
        <Footer props={data} list={taskList} active={filter} />
      </section>
    </section>
  );
}
