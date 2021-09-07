import React, { useState, useEffect } from "react";
import Plus from "./img/plus-circle.svg";
import Close from "./img/x.svg";
import "./css/App.css";

function App() {
  const [isInputOpen, setIsInputOpen] = useState(false);
  const [updateList, setUpdateList] = useState(false);
  const [dayIndex, setDayIndex] = useState(0);
  const [allTasks, setAllTasks] = useState(
    localStorage.getItem("tasks") !== null
      ? JSON.parse(localStorage.getItem("tasks"))
      : []
  );
  let enterTaskModal = document.getElementById("taskText");
  let taskText = "";

  const openTaskPrompt = (e) => {
    let modal = document.querySelector(".enter-task");
    modal.scrollIntoView();
    setDayIndex(Number(e.target.parentElement.dataset.day));
    setIsInputOpen(true);
  };

  const addTask = (e) => {
    e.preventDefault();
    // generate uniqui id for the task
    const uid = () => {
      let id = Math.floor(Math.random() * 1000);
      return id;
    };
    taskText = enterTaskModal.value;
    if (taskText === "") {
      alert("Please enter task");
      return;
    } else {
      enterTaskModal.value = "";
      setAllTasks([
        ...allTasks,
        { day: { taskId: uid(), dayNumber: dayIndex, taskText: taskText } },
      ]);
      setUpdateList(true);
      setIsInputOpen(false);
    }
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(allTasks));
    setUpdateList(false);
  }, [allTasks, updateList]);

  const deleteTask = (e) => {
    // we get the task id of the target
    // find the index of the item in local storage
    // delete the index from local storage + the DOM
    let getEventId = Number(e.target.parentElement.dataset.taskid);
    let lc = JSON.parse(localStorage.getItem("tasks"));
    e.target.parentElement.style.opacity = 0;
    lc.forEach((item, i) => {
      if (item.day.taskId === getEventId) {
        lc.splice(i, 1);
        localStorage.setItem("tasks", JSON.stringify(lc));
      }
    });
    setTimeout(() => {
      e.target.parentElement.remove();
    }, 1000);
  };

  return (
    <div className={isInputOpen ? "app modal-back-on" : "app"}>
      <form
        className={isInputOpen ? "enter-task" : "enter-task hidden"}
        onSubmit={addTask}
      >
        <textarea
          id="taskText"
          cols="30"
          rows="10"
          placeholder="Enter your task"
        ></textarea>
        <button className="btn btn-submit" type="submit">
          <img
            src={Close}
            alt="X"
            onClick={(e) => {
              e.preventDefault();
              enterTaskModal.value = "";
              setIsInputOpen(false);
            }}
          />
          <img className="add-svg" src={Plus} alt="Add" />
        </button>
      </form>
      <div className="days">
        <div className="box">
          <div className="day" data-day="0">
            Monday
            <img
              className="add-svg btn"
              src={Plus}
              alt="Add"
              onClick={openTaskPrompt}
            />
          </div>
          <div className="tasks">
            {JSON.parse(localStorage.getItem("tasks"))
              ? JSON.parse(localStorage.getItem("tasks")).map((task) => {
                  if (task.day.dayNumber === 0) {
                    return (
                      <div
                        key={task.day.taskId}
                        className="single-task"
                        data-taskid={task.day.taskId}
                      >
                        <input type="checkbox" onChange={deleteTask} />
                        <p className="task-text">{task.day.taskText}</p>
                      </div>
                    );
                  } else {
                    return null;
                  }
                })
              : null}
          </div>
        </div>
        <div className="box">
          <div className="day" data-day="1">
            Tuesday
            <img
              className="add-svg btn"
              src={Plus}
              alt="Add"
              onClick={openTaskPrompt}
            />
          </div>
          <div className="tasks">
            {JSON.parse(localStorage.getItem("tasks"))
              ? JSON.parse(localStorage.getItem("tasks")).map((task) => {
                  if (task.day.dayNumber === 1) {
                    return (
                      <div
                        key={task.day.taskId}
                        className="single-task"
                        data-taskid={task.day.taskId}
                      >
                        <input type="checkbox" onChange={deleteTask} />
                        <p className="task-text">{task.day.taskText}</p>
                      </div>
                    );
                  } else {
                    return null;
                  }
                })
              : null}
          </div>
        </div>
        <div className="box">
          <div className="day" data-day="2">
            Wendesday
            <img
              className="add-svg btn"
              src={Plus}
              alt="Add"
              onClick={openTaskPrompt}
            />
          </div>
          <div className="tasks">
            {JSON.parse(localStorage.getItem("tasks"))
              ? JSON.parse(localStorage.getItem("tasks")).map((task) => {
                  if (task.day.dayNumber === 2) {
                    return (
                      <div
                        key={task.day.taskId}
                        className="single-task"
                        data-taskid={task.day.taskId}
                      >
                        <input type="checkbox" onChange={deleteTask} />
                        <p className="task-text">{task.day.taskText}</p>
                      </div>
                    );
                  } else {
                    return null;
                  }
                })
              : null}
          </div>
        </div>
        <div className="box">
          <div className="day" data-day="3">
            Thursday
            <img
              className="add-svg btn"
              src={Plus}
              alt="Add"
              onClick={openTaskPrompt}
            />
          </div>
          <div className="tasks">
            {JSON.parse(localStorage.getItem("tasks"))
              ? JSON.parse(localStorage.getItem("tasks")).map((task) => {
                  if (task.day.dayNumber === 3) {
                    return (
                      <div
                        key={task.day.taskId}
                        className="single-task"
                        data-taskid={task.day.taskId}
                      >
                        <input type="checkbox" onChange={deleteTask} />
                        <p className="task-text">{task.day.taskText}</p>
                      </div>
                    );
                  } else {
                    return null;
                  }
                })
              : null}
          </div>
        </div>
        <div className="box">
          <div className="day" data-day="4">
            Friday
            <img
              className="add-svg btn"
              src={Plus}
              alt="Add"
              onClick={openTaskPrompt}
            />
          </div>
          <div className="tasks">
            {JSON.parse(localStorage.getItem("tasks"))
              ? JSON.parse(localStorage.getItem("tasks")).map((task) => {
                  if (task.day.dayNumber === 4) {
                    return (
                      <div
                        key={task.day.taskId}
                        className="single-task"
                        data-taskid={task.day.taskId}
                      >
                        <input type="checkbox" onChange={deleteTask} />
                        <p className="task-text">{task.day.taskText}</p>
                      </div>
                    );
                  } else {
                    return null;
                  }
                })
              : null}
          </div>
        </div>
        <div className="box">
          <div className="day" data-day="5">
            Saturday
            <img
              className="add-svg btn"
              src={Plus}
              alt="Add"
              onClick={openTaskPrompt}
            />
          </div>
          <div className="tasks">
            {JSON.parse(localStorage.getItem("tasks"))
              ? JSON.parse(localStorage.getItem("tasks")).map((task) => {
                  if (task.day.dayNumber === 5) {
                    return (
                      <div
                        key={task.day.taskId}
                        className="single-task"
                        data-taskid={task.day.taskId}
                      >
                        <input type="checkbox" onChange={deleteTask} />
                        <p className="task-text">{task.day.taskText}</p>
                      </div>
                    );
                  } else {
                    return null;
                  }
                })
              : null}
          </div>
        </div>
        <div className="box">
          <div className="day" data-day="6">
            Sunday
            <img
              className="add-svg btn"
              src={Plus}
              alt="Add"
              onClick={openTaskPrompt}
            />
          </div>
          <div className="tasks">
            {JSON.parse(localStorage.getItem("tasks"))
              ? JSON.parse(localStorage.getItem("tasks")).map((task) => {
                  if (task.day.dayNumber === 6) {
                    return (
                      <div
                        key={task.day.taskId}
                        className="single-task"
                        data-taskid={task.day.taskId}
                      >
                        <input type="checkbox" onChange={deleteTask} />
                        <p className="task-text">{task.day.taskText}</p>
                      </div>
                    );
                  } else {
                    return null;
                  }
                })
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
