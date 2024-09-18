import React, { useState} from "react";
import TodoList from "./components/TodoList";
import AddTodoItem from "./components/AddTodoForm";

function App() {

  const [todos,setTodos] = useState([
    {id:1,title:'leanrn react',completed: true},
    {id:2,title:'build a todo app',completed: false}
  ])

  const addTodo = (title) => {
    const newTodo = {
      id: todos.length + 1,
      title: title,
      completed: false
    };
    setTodos([...todos,newTodo]);
  };

 const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) =>{
    setTodos(
      preTodos => preTodos.filter(todo => todo.id !== id)
    )
  }

  const editTodo = (id,newTitle) =>{
    setTodos(preTodos =>
      preTodos.map(todo =>
        todo.id === id ? {...todo,title: newTitle }: todo
      )
    )
  }

  return (
    <div className="App container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center mt-8 mb-4">
        todo App
      </h1>
      <AddTodoItem onAddTodo={addTodo} />
      <TodoList todos={todos} onToggleTodo={toggleTodo} onDeleteTodo={deleteTodo} onEditTodo={editTodo}/>
    </div>
  );
}

export default App;