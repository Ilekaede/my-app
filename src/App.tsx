import React, { useEffect } from "react";
import { TaskView, todo } from "./components/TaskView";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { DogImages } from "./components/DogImages";
import { Gallery } from "./components/Gallery";
import { PersonTodo } from "./components/PersonTodo";
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

  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  function formatDate(date: Date) {
    return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
  }
  return (
    <div>
      <div>Todo List</div>
      <div>{formatDate(today)}</div>
      <div>
        {tasks
          .filter((task) => task.date === "today")
          .map((task) => (
            <TaskView key={task.id} props={task} onToggle={toggleStatus} />
          ))}
      </div>

      <div>{formatDate(tomorrow)}</div>
      <div>
        {tasks
          .filter((task) => task.date === "tomorrow")
          .map((task) => (
            <TaskView key={task.id} props={task} onToggle={toggleStatus} />
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
      <DogImages />
      <Gallery />
      <PersonTodo />
    </div>
  );
}
export default App;
