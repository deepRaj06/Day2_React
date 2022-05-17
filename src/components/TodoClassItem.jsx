import React, { useState } from 'react'
import styles from './todoClass.module.css'

export default function TodoClassItem({todo, onDelete}) {
  
    const [isCompleted, setIsCompleted] = useState(todo.isCompleted)
    return (
    <div className={styles.todo} key={todo.id}>
    {/* To make checkbox before todo task */}
    <input type="checkbox" checked={isCompleted} onChange={ (e) => {
        // console.log(e.target.checked);
        setIsCompleted(e.target.checked);
    }}/>
    {/* Remember to place key in parent div */}
    <div className={isCompleted ? styles.striked : ''}>{todo.value}</div>
    {/* Delete button */}
    {/* todo.id is passed to uniquely identify which task to delete */}
    <button onClick={ ()=> onDelete(todo.id)}>Delete</button>
  </div>
  )
}

// Remember you can't use if else condition but you can use that in function
