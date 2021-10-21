import React from "react";
import styles from './Todostyle.module.css'

export const TodoItems= ({title,status,id,handleToggle,handleDelete}) =>{
    return (
        
        <>
        <h1 onClick={()=>handleToggle(id)} className={status?styles.toggle:null}>{title}</h1>
        <button onClick = {()=>handleDelete(id)}>Delete</button>
        
        </>

    )
}