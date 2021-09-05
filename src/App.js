import React, { useState, useEffect } from "react";
import "./css/App.css";

function App() {
  const [isInputOpen, setIsInputOpen] = useState(false);
  const [dayIndex, setDayIndex] = useState(0);
  const [allTasks, setAllTasks] = useState(
    localStorage.getItem("tasks") !== null &&
      localStorage.getItem("tasks") !== undefined
      ? JSON.parse(localStorage.getItem("tasks"))
      : []
  );
  let enterTaskModal = document.getElementById("taskText");
  let taskText = "";

  const openTaskPrompt = (event) => {
    setDayIndex(Number(event.target.parentElement.dataset.day));
    setIsInputOpen(true);
  };

  const addTask = (e) => {
    e.preventDefault();
    // generate uniqui id for the task
    const uid = () => {
      let id = Math.floor(Math.random() * 1000);
      return id;
    };
    let patentTargets =
      e.target.parentElement.parentElement.querySelectorAll(".tasks");
    taskText = enterTaskModal.value;
    const el = `
    <div class="single-task" data-taskid=${uid()}>
      <input type="checkbox" />
      <p class="task-text">${taskText}</p>
    </div>
    `;
    if (taskText === "") {
      return;
    } else {
      patentTargets[dayIndex].innerHTML += el;
      enterTaskModal.value = "";
      setAllTasks([
        ...allTasks,
        { day: { number: dayIndex, taskId: uid(), taskText } },
      ]);
      setIsInputOpen(false);
    }
  };

  useEffect(() => {
    let checkboxes = document.querySelectorAll(
      '.single-task input[type="checkbox"]'
    );
    checkboxes.forEach((cb, index) => {
      cb.addEventListener("change", (event) => {
        event.target.parentElement.remove();
        allTasks.splice(index);
        localStorage.setItem("tasks", JSON.stringify(allTasks));
      });
    });

    // bug <<< something to do with the []
    localStorage.setItem("tasks", JSON.stringify(allTasks));
  }, [allTasks]);

  return (
    <div className="app">
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
        <input type="submit" value="+" />
      </form>
      <header>My Planner</header>
      <div className="days">
        <div className="box">
          <div className="day" data-day="0">
            Monday
            <button className="add-task" onClick={openTaskPrompt}>
              +
            </button>
          </div>
          <div className="tasks">
            {JSON.parse(localStorage.getItem("tasks"))
              ? JSON.parse(localStorage.getItem("tasks")).map((task) => {
                  if (task.day.number === 0) {
                    return (
                      <div
                        key={task.day.taskId}
                        className="single-task"
                        data-taskid={task.day.taskId}
                      >
                        <input type="checkbox" />
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
            <button className="add-task" onClick={openTaskPrompt}>
              +
            </button>
          </div>
          <div className="tasks">
            {JSON.parse(localStorage.getItem("tasks"))
              ? JSON.parse(localStorage.getItem("tasks")).map((task) => {
                  if (task.day.number === 1) {
                    return (
                      <div
                        key={task.day.taskId}
                        className="single-task"
                        data-taskid={task.day.taskId}
                      >
                        <input type="checkbox" />
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
            <button className="add-task" onClick={openTaskPrompt}>
              +
            </button>
          </div>
          <div className="tasks">
            {JSON.parse(localStorage.getItem("tasks"))
              ? JSON.parse(localStorage.getItem("tasks")).map((task) => {
                  if (task.day.number === 2) {
                    return (
                      <div
                        key={task.day.taskId}
                        className="single-task"
                        data-taskid={task.day.taskId}
                      >
                        <input type="checkbox" />
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
            <button className="add-task" onClick={openTaskPrompt}>
              +
            </button>
          </div>
          <div className="tasks">
            {JSON.parse(localStorage.getItem("tasks"))
              ? JSON.parse(localStorage.getItem("tasks")).map((task) => {
                  if (task.day.number === 3) {
                    return (
                      <div
                        key={task.day.taskId}
                        className="single-task"
                        data-taskid={task.day.taskId}
                      >
                        <input type="checkbox" />
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
            <button className="add-task" onClick={openTaskPrompt}>
              +
            </button>
          </div>
          <div className="tasks">
            {JSON.parse(localStorage.getItem("tasks"))
              ? JSON.parse(localStorage.getItem("tasks")).map((task) => {
                  if (task.day.number === 4) {
                    return (
                      <div
                        key={task.day.taskId}
                        className="single-task"
                        data-taskid={task.day.taskId}
                      >
                        <input type="checkbox" />
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
            <button className="add-task" onClick={openTaskPrompt}>
              +
            </button>
          </div>
          <div className="tasks">
            {JSON.parse(localStorage.getItem("tasks"))
              ? JSON.parse(localStorage.getItem("tasks")).map((task) => {
                  if (task.day.number === 5) {
                    return (
                      <div
                        key={task.day.taskId}
                        className="single-task"
                        data-taskid={task.day.taskId}
                      >
                        <input type="checkbox" />
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
            <button className="add-task" onClick={openTaskPrompt}>
              +
            </button>
          </div>
          <div className="tasks">
            {JSON.parse(localStorage.getItem("tasks"))
              ? JSON.parse(localStorage.getItem("tasks")).map((task) => {
                  if (task.day.number === 6) {
                    return (
                      <div
                        key={task.day.taskId}
                        className="single-task"
                        data-taskid={task.day.taskId}
                      >
                        <input type="checkbox" />
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
