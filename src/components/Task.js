import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { taskDeleteContext } from './App'

export default function Task(props) {
    const  handleTaskDelete  = useContext(taskDeleteContext)
    const {
        id,
        value
    } = props
    return (
        <div className="task-holder">
            <div className="TaskValue">{value}</div>
            <FontAwesomeIcon className="close-icon" onClick={()=>handleTaskDelete(id)} icon={faTimesCircle} />
        </div>
    )
}
