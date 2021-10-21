import React from "react";

export const TodoComplete =({list}) =>{
    return (
        <>
        <h1>completed</h1>
        {list.map((item)=>{
            return <div>{item.title}</div>
        })}
        </>
    )
}