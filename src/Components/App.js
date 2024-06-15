import React, { Component, useState } from 'react';
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

function App(props) {

  console.log('App', props);

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
      // state: 'all',
      listener: function () {
        let filter = event.target;
        setFilter(event.target.dataset.value)
      },
      clear: function () {
        changeList(taskList.filter((el) => el.state != 'completed'));
      }
    }
  };

  function taskFilter(e){
    setFilter(e.target.dataset.value)
  }
  function taskFilterClean () {
    changeList(taskList.filter((el) => el.state != 'completed'));
  }

  function taskCreate(e) {
    if (e.nativeEvent.code === 'Enter' && e.target.value != '') {
      changeList([...taskList, {id: taskList.length + 1, state: 'active', title: e.target.value, date:  Date.now()}]);
      e.target.value = '';
    }
  }

  function taskListener(e){
    console.log(e.target.dataset.value);
    switch (e.target.dataset.value) {
      case 'completed':
      case 'active':
      case 'editing':
        taskState(e);
        break;

      case 'destroy':
        tasDestroy(e);
        break;
    
      case 'edit':
        taskEdit(e);
        break;
    }
  }

  function taskState(e) {
    changeList(taskList.map(function (el) {
      if (el.id == e.target.closest('[data-id]').dataset.id) {
        el.state = e.target.dataset.value;
      };
      return el;
    }));
  };

  function tasDestroy(e) {
    let id = event.target.closest('[data-id]').dataset.id;
    changeList(taskList.filter((el) => el.id != id));
  };

  function taskEdit(e) {

    if (e.nativeEvent.code === 'Enter' && e.target.value != '') {
      changeList(taskList.map(function (el) {
        if (el.id == e.target.closest('[data-id]').dataset.id) {
          el.title = e.target.value;
          el.state = 'active';
        }
        console.log('taskEdit', el);
        return el
      }));
    };
  };


  let [filter, setFilter] = useState(props.props.filter);
  let [taskList, changeList] = useState(props.props.list);
  console.log('app', taskList, props.props.list)

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm list={taskList} listener={taskCreate} />
      </header>
      <section className="main">
        <TaskList listener={taskListener} list={taskList} active={filter} />
        <Footer list={taskList} active={filter} listener={{taskFilter, taskFilterClean}} />
      </section>
    </section>
  );
}

App.defaultProps = {
  props: {
    list: [],
    filter: 'all'
  }
}

export default App;