import { useState } from 'react';

function TodoInput({ addTodo }) {
  const [inputValue, setInputValue] = useState('');

  const handleAddBtnClick = () => {
    const newTodo = { id: Date.now(), content: inputValue, complete: false };
    addTodo(newTodo);
    setInputValue('');
  };

  return (
    <div className="todo-input">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddBtnClick}>추가</button>
    </div>
  );
}

export default TodoInput;
