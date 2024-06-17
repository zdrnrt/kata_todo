import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App/";

const root = ReactDOM.createRoot(document.getElementById("root"));

// class component
/*
let data = {
    items: {
      list: [
        { id: 1, state: "active", title: "Задача 1", date: "2024-05-25" },
        { id: 2, state: "active", title: "Задача 2", date: "2024-05-24" },
        { id: 3, state: "completed", title: "Задача 3", date: "2024-06-1" },
        { id: 4, state: "completed", title: "Задача 4", date: "2024-06-10:23:40" }
      ],
      listener: {
        state(e) {
          changeList(taskList.map(function (el) {
            if (el.id == e.target.closest("[data-id]").dataset.id) {
              el.state = e.target.dataset.value;
            }
            return el
          }));
        },
        destroy(e) {
          let id = event.target.closest("[data-id]").dataset.id;
          changeList(taskList.filter((el) => el.id != id));
        },
        edit(e) {
          if (e.nativeEvent.code === "Enter" && e.target.value != "") {
            changeList(taskList.map(function (el) {
              if (el.id == e.target.closest("[data-id]").dataset.id) {
                el.title = e.target.value;
                el.state = "active";
              }
              return el
            }));
          }
        }
      },

      create: function (e) {
        if (e.nativeEvent.code === "Enter" && e.target.value != "") {
          changeList([...taskList, {id: taskList.length + 1, state: "active", title: e.target.value, date: format(new Date(), "yyyy-MM-dd:H:m")}]);
          e.target.value = "";
        }
      }
    },
    filter: {
      state: "all",
      listener: function () {
        let filter = event.target;
        setFilter(filter.dataset.value)
      },
      clear: function () {
        changeList(taskList.filter((el) => el.state != "completed"));
      }
    }
  };
root.render(<App props={data} />);
*/

// functional component

root.render(<App />);
