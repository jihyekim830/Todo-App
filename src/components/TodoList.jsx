import TodoItem from './TodoItem';

function TodoList({ todoList, updateTodo, deleteTodo }) {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
