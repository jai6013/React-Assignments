import React, { useState } from "react";
import {v4 as uuid} from 'uuid'
import { TodoComplete } from "../TodoCompleted";
import { TodoInput } from "./TodoInput";
import { TodoItems } from "./TodoItems";

export const TodoApp = () =>{

    const [todos,setTodos] = useState([])

    const handleAddTodo = (task) =>{
        const payload ={
            title:task,
            status: false,
            id:uuid()
        }
        setTodos([payload,...todos])
    }
    const handleToggle = (id) =>{
        const newTodoList = todos.map((item)=>item.id ===id? {...item,status: !item.status}: item)
        setTodos(newTodoList)
    }
    const handleDelete = (id) =>{
        const deletedTodoList = todos.filter((item)=>item.id !==id)
        setTodos(deletedTodoList)
    }
    const filterList = todos.filter((item)=>item.status===true)
    console.log(filterList)
    return(
<>
<TodoInput handleAddTodo={handleAddTodo} />
{todos.map((item)=> {
    return <TodoItems handleDelete={handleDelete} handleToggle={handleToggle} key={item.id} {...item}/>
}) 
}
<br/>
<TodoComplete list={filterList}/>
</>

    )
}