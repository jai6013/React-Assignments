import React from "react"
import styles from './Layout.module.css'

export const Criteria = ({item})=>{
    console.log(item)
    return (
        <>
        <div className = {styles.items}>
            <img src={item.img} alt="nothing" />
            <div>{item.para}</div>
        </div>
        </>
    )

}