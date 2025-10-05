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
  const [isAdding, setIsAdding] = useState(false);

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

  const addTodo = async (data: FormData) => {
    setIsAdding(true);

    // アニメーション効果のための遅延
    await new Promise((resolve) => setTimeout(resolve, 300));

    const newTodo: todo = {
      id: Math.max(...tasks.map((t) => t.id), -1) + 1,
      task: data.task,
      status: false,
      date: "today",
    };
    const updatedTasks = [...tasks, newTodo];
    setTasks(updatedTasks);
    setIsAdding(false);
  };

  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  function formatDate(date: Date) {
    return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
  }
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header
        className="bg-white shadow-sm border-b border-gray-200"
        role="banner"
      >
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-gray-900">Todo List</h1>
          <p className="text-gray-600 mt-2 text-lg">
            今日やることを整理して、効率的に過ごしましょう
          </p>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-6xl mx-auto px-4 py-8" role="main">
        {/* タスクセクション - 横並びレイアウト */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* 今日のタスク */}
          <section>
            <div className="card slide-in">
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  {formatDate(today)}
                </h2>
                <span className="ml-3 px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                  {tasks.filter((task) => task.date === "today").length} タスク
                </span>
              </div>
              <div
                className="space-y-3"
                role="list"
                aria-label="今日のタスク一覧"
              >
                {tasks
                  .filter((task) => task.date === "today")
                  .map((task) => (
                    <TaskView
                      key={task.id}
                      props={task}
                      onToggle={toggleStatus}
                    />
                  ))}
              </div>
            </div>
          </section>

          {/* 明日のタスク */}
          <section>
            <div className="card slide-in">
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  {formatDate(tomorrow)}
                </h2>
                <span className="ml-3 px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
                  {tasks.filter((task) => task.date === "tomorrow").length} タスク
                </span>
              </div>
              <div
                className="space-y-3"
                role="list"
                aria-label="明日のタスク一覧"
              >
                {tasks
                  .filter((task) => task.date === "tomorrow")
                  .map((task) => (
                    <TaskView
                      key={task.id}
                      props={task}
                      onToggle={toggleStatus}
                    />
                  ))}
              </div>
            </div>
          </section>
        </div>

        {/* タスク追加フォーム */}
        <section className="mb-8">
          <div className="card bounce-in">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              新しいタスクを追加
            </h3>
            <form
              onSubmit={handleSubmit(addTodo)}
              className="flex gap-3"
              aria-label="新しいタスクを追加するフォーム"
            >
              <input
                {...register("task", { required: "タスクを入力してください" })}
                placeholder="タスクを入力してください..."
                className="input-field flex-1"
                disabled={isAdding}
              />
              <button
                type="submit"
                className={`btn-primary whitespace-nowrap transition-all duration-200 ${
                  isAdding ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
                }`}
                disabled={isAdding}
              >
                {isAdding ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    追加中...
                  </div>
                ) : (
                  "追加"
                )}
              </button>
            </form>
          </div>
        </section>

        {/* 追加コンテンツ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Dog Images
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <DogImages />
            </div>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Gallery
            </h3>
            <Gallery />
          </div>
        </div>

        <div className="mt-6">
          <PersonTodo />
        </div>
      </main>
    </div>
  );
}
export default App;
