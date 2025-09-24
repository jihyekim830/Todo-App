import { useState } from 'react';
import todoData from '../data/todoData';

function useTodo() {
  const [todoList, setTodoList] = useState(todoData);

  const addTodo = (newTodo) => setTodoList((prev) => [...prev, newTodo]);
  const updateTodo = (newTodo) =>
    setTodoList((prev) =>
      prev.map((todo) => (todo.id === newTodo.id ? newTodo : todo))
    );
  const deleteTodo = (targetId) =>
    setTodoList((prev) => prev.filter((todo) => todo.id !== targetId));

  return { todoList, addTodo, updateTodo, deleteTodo };
}

export default useTodo;
