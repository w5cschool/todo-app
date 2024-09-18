import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ( { todos ,onToggleTodo,onDeleteTodo, onEditTodo}) => {
    return (
        <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">
                TodoList
            </h2>
            <ul className="space-y-2">
                {todos.map(
                    (todo) => (
                        <TodoItem key={todo.id} todo={todo} onToggle={onToggleTodo} onDeleteTodo={onDeleteTodo} onEditTodo={onEditTodo}/>
                ))}
            </ul>
        </div>
    );
}
export default TodoList;