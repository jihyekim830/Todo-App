import { useState } from 'react';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 0, content: '123', complete: false },
    { id: 1, content: '코딩 공부하기', complete: false },
    { id: 2, content: '잠 자기', complete: false },
  ]);

  return (
    <>
      <h1>오늘의 할 일 ✏️</h1>
      <TodoList todoList={todoList} setTodoList={setTodoList} />
      <hr />
      <TodoInput todoList={todoList} setTodoList={setTodoList} />
    </>
  );
}

function TodoInput({ todoList, setTodoList }) {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="todo-input">
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button
        onClick={() => {
          const newTodo = { id: Number(new Date()), content: inputValue };
          const newTodoList = [...todoList, newTodo];
          setTodoList(newTodoList);
          setInputValue('');
        }}
      >
        추가
      </button>
    </div>
  );
}

function TodoList({ todoList, setTodoList }) {
  return (
    <ul>
      {todoList.map((todo) => (
        <Todo key={todo.id} todo={todo} setTodoList={setTodoList} />
      ))}
    </ul>
  );
}

function Todo({ todo, setTodoList }) {
  const [inputValue, setInputValue] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(todo.complete);

  return (
    <li>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => {
            setIsCompleted((prev) => !prev);
            setTodoList((prev) =>
              prev.map((el) =>
                el.id === todo.id ? { ...el, complete: !el.complete } : el
              )
            );
            console.log(todo);
          }}
        />
        {!isEditing && <span>{todo.content}</span>}
        {isEditing && (
          <input
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
        )}
      </div>
      <div className="todo-btns">
        <button
          onClick={() => {
            setTodoList((prev) =>
              prev.map((el) =>
                el.id === todo.id ? { ...el, content: inputValue } : el
              )
            );
            setIsEditing((prev) => !prev);
          }}
        >
          {isEditing ? '완료' : '수정'}
        </button>
        <button
          onClick={() => {
            setTodoList((prev) => prev.filter((el) => el.id !== todo.id));
          }}
        >
          삭제
        </button>
      </div>
    </li>
  );
}

export default App;
