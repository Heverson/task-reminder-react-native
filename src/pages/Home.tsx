import React, { useState } from "react";

import { Header } from "../components/Header";
import { MyTasksList } from "../components/MyTasksList";
import { TodoInput } from "../components/TodoInput";

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task if it's not empty
    if (newTaskTitle) {
      const data = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false,
      };
      setTasks((oldTasks) => [...oldTasks, data]);
    }
  }

  function handleMarkTaskAsDone(id: number) {
    const updatedTask = tasks.map((item) =>
      item.id === id ? { ...item, done: !item.done } : { ...item }
    );
    setTasks(updatedTask);
  }

  function handleRemoveTask(id: number) {
    const removeTasks = tasks.filter((item) => item.id !== id);
    setTasks(removeTasks);
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </>
  );
}
