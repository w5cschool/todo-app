import React, {useState} from "react";

const AddTodoItem = ({onAddTodo}) =>{

    const [title,setTitle] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(title.trim()) {
            onAddTodo(title.trim());
            setTitle('');
        }
    };

    return(
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="flex">
                <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add a new todo"
                className="flex-grow p-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button type="submit"
                className="text-blue px-4 py-2 rounded-r bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Add
                </button>
            </div>
        </form>
    );

};

export default AddTodoItem;
