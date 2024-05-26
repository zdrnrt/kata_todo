import React, { Component } from 'react';
import NewTaskForm from './NewTaskForm';
import TaskList from './TaskList';
import Footer from './Footer'



let data = {
  list: [
    { id: 1, state: 'active', title: 'Задача 1', date: '2024-05-25' },
    { id: 2, state: 'editing', title: 'Задача 2', date: '2024-05-24' },
    { id: 3, state: 'completed', title: 'Задача 3', date: '2024-05-23' },
    { id: 4, state: 'completed', title: 'Задача 4', date: '2024-05-20' }
  ],
  filter: {
    // state: 'all',
    state: 'all',
    listener: {
      all: function(){ console.log('all', event.target) },
      active: function(){ console.log('active', event.target) },
      complited: function(){ console.log('complited', event.target) },
    }
  },
  listener: {
    remove: function(){ console.log('remove', event.target); },
    edit: function(){ console.log('edit', event.target); },
    toggle: function(){ console.log('toggle', event.target, event.target.checked); },
    editing: function(){ console.log('editing', event.target) }
  }
};




export default function App() {
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm />
      </header>
      <section className="main">
        <TaskList props={data} />
        <Footer props={data} />
      </section>
    </section>
  );
}