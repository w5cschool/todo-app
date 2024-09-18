import React, { useState } from 'react';

const TodoItem = ({ todo, onToggle, onDeleteTodo ,onEditTodo}) => {
    const [isEditing,setIsEditing] = useState(false);
    const [ediedTitle,setEditedTitle] = useState(todo.title)

    const handleEdit = ()=> {
        if(isEditing) {
            onEditTodo(todo.id,ediedTitle);
        }
        setIsEditing(!isEditing);
    }



    return (
    <li className="flex items-center bg-white p-4 rounded shadow">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="mr-2 form-checkbox h-5 w-5 text-blue-600"
      />
      {/* 如果是edit状态就是input，如果不是就是span */}
      {isEditing ? (
        <input
        type='text'
        value={ediedTitle}
        onChange={(e) => setEditedTitle(e.target.value)}
        className="flex-grow mr-2 p-1 border rounded"
        />
      ) : (
        <span className={`flex-grow ${todo.completed ? 'line-through text-gray-500' : ''}`}>
            {todo.title}
        </span>
      )}

      <button 
      onClick={handleEdit}
      className='mr-2 bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'>
        {isEditing ? 'save' : 'edit'}
      </button>

      <button 
        onClick={() => onDeleteTodo(todo.id)}
        className='ml-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500'
    >
        delete
    </button>
    </li>
  );
};

export default TodoItem;