import { useState } from 'react';

function TodoItem({ todo, updateTodo, deleteTodo }) {
  const [inputValue, setInputValue] = useState(todo.content);
  const [isEditing, setIsEditing] = useState(false);

  const handleCheckboxChange = () => {
    const newTodo = { ...todo, complete: !todo.complete };
    updateTodo(newTodo);
  };
  const handleEditBtnClick = () => {
    if (isEditing) {
      const newTodo = { ...todo, content: inputValue };
      updateTodo(newTodo);
    }
    setIsEditing((prev) => !prev);
  };

  return (
    <li>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleCheckboxChange}
        />
        {!isEditing && <span>{todo.content}</span>}
        {isEditing && (
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        )}
      </div>
      <div className="todo-btns">
        <button onClick={handleEditBtnClick}>
          {isEditing ? '완료' : '수정'}
        </button>
        <button onClick={() => deleteTodo(todo.id)}>삭제</button>
      </div>
    </li>
  );
}

export default TodoItem;
