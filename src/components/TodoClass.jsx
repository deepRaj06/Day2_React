import React, {useState} from 'react'
// import styles from './todoClass.module.css'
import TodoClassItem from './TodoClassItem';

export default function Todo() {
// To read value from input
// We need setNewTodo , becoz if we update inpTodo previous todo will be lost
    let [newTodo, setNewTodo] = useState('');
// This state will store value every time you give input
    const [listTodo, setListTodo] = useState([]);

    // Any inbuilt or change functions return event
    // Shortcut of this to write in wherever it is called
    // const handleChange = (e) => {
    //   // To read value type e.target.value
    //   setNewTodo(e.target.value);
    // }

  // To pass value from child to parent call delet function here
  const onDelete = (id) => {

    let newTodos = listTodo.filter(todo => todo.id !== id);
    setListTodo(newTodos);

  }

  return (

    // Read input
    // update todos list
    // re-render todos list when updated.  

    <div>
        Todo
        {/* We need to tell input in form of value what is new value of newTodo */}
        <input 
        value={newTodo} 
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDownCapture={e => {
          if(e.key === 'Enter')
          {
            setListTodo([
              ...listTodo,
              { id:Date.now(), value: newTodo, isCompleted: false}
            ]);
            setNewTodo('');
          }
        }}
        />
        {/*to show the todo values below input we need to destructure it  */}
        {/* One more reason to destructure is becoz react won't detect changes becoz it is non-primitive data type and for this data type you have to destructure it */}
        {/* React only detect change in reference */}
        <button onClick={ () => {
          // id is passed to remove key error as react need some way to track changes in each of divs
          // We have given Date.now as it changes in ms so react can easily track changes in div
          // this id is passed in map as key
          setListTodo([
            ...listTodo,
            { id:Date.now(), value: newTodo, isCompleted: false}
          ]);
          setNewTodo('');
        }}>          
        Add
        </button>
        {/* TODOS */}
        {/* Now you want checkbox to be interactive like strike on word */}
        {/* To do that you need state and the problem with map is you cannot pass state inside map */}
        {/* Best solution is you create new component */}
        {listTodo.map((todo) => (
          // We have moved data from here to TodoClassItem.jsx
          // Now calling that jsx file here
          <TodoClassItem key={todo.id} todo={todo} onDelete={onDelete}></TodoClassItem>

        ))}
    </div>
  )
}
