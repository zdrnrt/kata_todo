import React, { Component, useState } from 'react';
import NewTaskForm from './NewTaskForm';
import TaskList from './TaskList';
import Footer from './Footer'



export default function App() {

  let data = {
    items: {
      list: [
        { id: 1, state: 'active', title: 'Задача 1', date: '2024-05-25' },
        { id: 2, state: 'active', title: 'Задача 2', date: '2024-05-24' },
        { id: 3, state: 'completed', title: 'Задача 3', date: '2024-05-23' },
        { id: 4, state: 'completed', title: 'Задача 4', date: '2024-05-20' }
      ],
      listener: {
        state (e) {
          changeList(taskList.map( function(el){
            if (el.id == e.target.closest('[data-id]').dataset.id){
              el.state = e.target.dataset.value;
            }
            return el
          }));
        },
        destroy (e) {
          let id = event.target.closest('[data-id]').dataset.id;
          changeList(taskList.filter ( (el) => el.id != id ));
        },
        edit (e) {
          if (e.nativeEvent.code === 'Enter') {
            changeList(taskList.map( function(el){
              if (el.id == e.target.closest('[data-id]').dataset.id){
                el.title = e.target.value;
                el.state = 'active';
              }
              return el
            }));
          }
        }
        
      },
      
      create: function (e) {
        let item = e.target;
        console.log(taskList);
        if (e.nativeEvent.code === 'Enter') {

        }
      }
    },
    filter: {
      state: 'all',
      listener: function () {
        let filter = event.target;
        setFilter(filter.dataset.value)
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
        <Footer props={data} active={filter} />
      </section>
    </section>
  );
}