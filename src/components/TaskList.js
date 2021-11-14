import React from 'react'
import Task from './Task'

export default function TaskList({ tasks }) {
    return (
        <div className="task-list-block">
         {tasks.map(task => (
             <Task key={task.id} {...task} />
         ))}
        </div>
    )
}
