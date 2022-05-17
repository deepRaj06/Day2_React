import React from 'react'

export default function Todo() {
    const [value, setValue] = useState('');
    const [todos, setTodos] = useState([]);

  return (

    // Read input
    // update todos list
    // re-render todos list when updated.  

    <div>
        Todo
        <input type="text" name="" id="" />
        <button>

        </button>
        {/* TODOS */}
        {Todo.map((todo) => (
            <div>{todo.value}</div>
        ))}
    </div>
  )
}
