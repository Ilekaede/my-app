import React, { useEffect } from "react";
import { TaskView, todo } from "./components/TaskView";
import { useState } from "react";
import { useForm } from "react-hook-form";
const tasks_row: todo[] = [
  {
    id: 0,
    task: "study",
    status: true,
    date: "today",
  },
  {
    id: 1,
    task: "sports",
    status: true,
    date: "today",
  },
  {
    id: 2,
    task: "part time job",
    status: false,
    date: "today",
  },
  {
    id: 3,
    task: "study",
    status: false,
    date: "tomorrow",
  },
  {
    id: 4,
    task: "shopping",
    status: false,
    date: "tomorrow",
  },
  {
    id: 5,
    task: "go to library",
    status: false,
    date: "tomorrow",
  },
];

function App() {
  const [tasks, setTasks] = useState(tasks_row);
  const toggleStatus = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      )
    );
  };
  // フォームの型を定義
  type FormData = {
    task: string;
  };

  const { register, handleSubmit } = useForm<FormData>();
  useEffect(() => {
    // console.log(tasks);
  }, [tasks]);

  const addTodo = (data: FormData) => {
    const newTodo: todo = {
      id: tasks.length,
      task: data.task,
      status: false,
      date: "today",
    };
    setTasks([...tasks, newTodo]);
    console.log(tasks);
  };
  return (
    <div>
      <div>Todo List</div>
      <div>Today</div>
      <div>
        {tasks
          .filter((task) => task.date === "today")
          .map((task) => (
            <TaskView props={task} onToggle={toggleStatus} />
          ))}
      </div>

      <div>Tomorrow</div>
      <div>
        {tasks
          .filter((task) => task.date === "tomorrow")
          .map((task) => (
            <TaskView props={task} onToggle={toggleStatus} />
          ))}
      </div>
      <br />
      <div>
        <form onSubmit={handleSubmit(addTodo)}>
          <input
            {...register("task", { required: "タスクを入力してください" })}
          />
          <button type="submit">追加</button>
        </form>
      </div>
    </div>
  );
}

export default App;
