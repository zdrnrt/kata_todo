import React, { useState } from "react"
import NewTaskForm from "../NewTaskForm"
import TaskList from "../TaskList"
import Footer from "../Footer"
import "./App.css";

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

function App( {props = {list: [{ id: 1, state: 'active', title: 'Задача 1', date: '2024-05-25' }], filter: "all"}} = {} ) {
// function App( props = {list, filter}) {

console.log('App props', props);
// console.log('App data2', list, filter);
  const data = {
    items: {
      list: [
        { id: 1, state: 'active', title: 'Задача 1', date: '2024-05-25' },
        { id: 2, state: 'active', title: 'Задача 2', date: '2024-05-24' },
        { id: 3, state: 'completed', title: 'Задача 3', date: '2024-06-1' },
        { id: 4, state: 'completed', title: 'Задача 4', date: '2024-06-10:23:40' }
      ],
      listener: {
        state(e) {
          changeList(list.map(function (el) {
            if (el.id == e.target.closest('[data-id]').dataset.id) {
              el.state = e.target.dataset.value;
            }
            return el
          }));
        },
        destroy(e) {
          let id = event.target.closest('[data-id]').dataset.id;
          changeList(list.filter((el) => el.id != id));
        },
        edit(e) {
          if (e.nativeEvent.code === 'Enter' && e.target.value != '') {
            changeList(list.map(function (el) {
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
          changeList([...list, {id: list.length + 1, state: 'active', title: e.target.value, date: format(new Date(), "yyyy-MM-dd:H:m")}]);
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
        changeList(list.filter((el) => el.state != 'completed'));
      }
    }
  };

  function taskFilter(e){
    setFilter(e.target.dataset.value)
  }
  function taskFilterClean () {
    changeList(list.filter((el) => el.state != 'completed'));
  }

  function taskCreate(e) {
    if (e.nativeEvent.code === 'Enter' && e.target.value != '') {
      changeList([...list, {id: list.length + 1, state: 'active', title: e.target.value, date:  Date.now()}]);
      e.target.value = '';
    }
  }

  function taskListener(e) {
    switch ( e.target.dataset.value ) {
      case 'destroy':
        tasDestroy(e);
        break;
      case 'edit':
        taskEdit(e);
        break;
      default:
        taskState(e);
        break;
    }
  }

  function taskState(e) {
    changeList(list.map(function (el) {
      if (el.id == e.target.closest('[data-id]').dataset.id) {
        el.state = e.target.dataset.value;
      };
      return el;
    }));
  };

  function tasDestroy(e) {
    let id = event.target.closest('[data-id]').dataset.id;
    changeList(list.filter((el) => el.id != id));
  };

  function taskEdit(e) {
    if (e.nativeEvent.code === 'Enter' && e.target.value != '') {
      changeList(list.map(function (el) {
        if (el.id == e.target.closest('[data-id]').dataset.id) {
          el.title = e.target.value;
          el.state = 'active';
        }
        return el
      }));
    };
  };


  let [filter, setFilter] = useState(props.filter);
  let [list, changeList] = useState(props.list);
  // console.log('app', taskList, props.list)
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm list={list} listener={taskCreate} />
      </header>
      <section className="main">
        <TaskList listener={taskListener} list={list} active={filter} />
        <Footer list={list} active={filter} listener={{taskFilter, taskFilterClean}} />
      </section>
    </section>
  );
}

export default App;