import React, { useState } from "react";
import "./css/App.css";

function App() {
  const [isInputOpen, setIsInputOpen] = useState(false);
  const [dayIndex, setDayIndex] = useState(0);
  let enterTaskModal = document.getElementById("taskText");
  let taskText = "";

  const openTaskPrompt = (event) => {
    setDayIndex(Number(event.target.parentElement.dataset.day));

    setIsInputOpen(true);
  };

  const addTask = (e) => {
    e.preventDefault();
    let patentTargets =
      e.target.parentElement.parentElement.querySelectorAll(".tasks");
    taskText = enterTaskModal.value;
    const el = `
    <div class="single-task">
      <input type="checkbox" />
      <p class="task-text">
        ${taskText}
      </p>
    </div>
    `;

    if (taskText === "") {
      return;
    } else {
      patentTargets[dayIndex].innerHTML += el;
      enterTaskModal.value = "";
      setIsInputOpen(false);
    }
  };

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
          <div className="tasks"></div>
        </div>
        <div className="box">
          <div className="day" data-day="1">
            Tuesday
            <button className="add-task" onClick={openTaskPrompt}>
              +
            </button>
          </div>
          <div className="tasks"></div>
        </div>
        <div className="box">
          <div className="day" data-day="2">
            Wendesday
            <button className="add-task" onClick={openTaskPrompt}>
              +
            </button>
          </div>
          <div className="tasks"></div>
        </div>
        <div className="box">
          <div className="day" data-day="3">
            Thursday
            <button className="add-task" onClick={openTaskPrompt}>
              +
            </button>
          </div>
          <div className="tasks"></div>
        </div>
        <div className="box">
          <div className="day" data-day="4">
            Friday
            <button className="add-task" onClick={openTaskPrompt}>
              +
            </button>
          </div>
          <div className="tasks"></div>
        </div>
        <div className="box">
          <div className="day" data-day="5">
            Saturday
            <button className="add-task" onClick={openTaskPrompt}>
              +
            </button>
          </div>
          <div className="tasks"></div>
        </div>
        <div className="box">
          <div className="day" data-day="6">
            Sunday
            <button className="add-task" onClick={openTaskPrompt}>
              +
            </button>
          </div>
          <div className="tasks"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
