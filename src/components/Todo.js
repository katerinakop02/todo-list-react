import React from 'react'

const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className='Todo'>
        <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? `completed`: ""}`}>{task.task}</p>
        <div>
          <button onClick={() => editTodo(task.id)} className='edit-button'>Edit</button>
          <button onClick={() => deleteTodo(task.id)} className='delete-button'>Delete</button>
        </div>
    </div>
  )
}

export default Todo