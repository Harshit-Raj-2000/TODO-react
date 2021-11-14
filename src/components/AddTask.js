import React from 'react'

export default function AddTask(props) {
    const {
        addTaskValue,
        setAddTaskValue,
        handleTaskAdd
    } = props
    return (
        <div className="add-container">
        <input className="add-task" value={addTaskValue} onChange={e=>setAddTaskValue(e.target.value)} />
        <button className="add-button" onClick={()=>handleTaskAdd()} >Add Task</button>
        </div>
    )
}
