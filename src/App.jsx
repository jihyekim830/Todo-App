import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import useTodo from './hooks/useTodo';
import './App.css';

function App() {
  const { todoList, addTodo, updateTodo, deleteTodo } = useTodo();

  return (
    <>
      <h1>오늘의 할 일 ✏️</h1>
      <TodoList
        todoList={todoList}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
      <hr />
      <TodoInput addTodo={addTodo} />
    </>
  );
}

export default App;
