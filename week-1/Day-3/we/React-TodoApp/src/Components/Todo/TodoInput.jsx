import React, { useState } from "react"
import styles from './Todostyle.module.css'

export const TodoInput = ({handleAddTodo}) =>{
    const [taskName,setTaskName] = useState("")

    return(<>
    <input type="text" value={taskName} placeholder="Enter Todo" onChange={(e)=>setTaskName(e.target.value)} />
    <button className={styles.buttons} onClick = {()=>handleAddTodo(taskName)}>Click Me</button>
    </>
    )
}