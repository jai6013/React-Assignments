import React from "react";
import styles from './StudentCard.module.css'
export const StudentCard = ({eachStudent,handleClick}) => {
    console.log(eachStudent.first_name)   
    return( 
    <>
    <div className={`${eachStudent.isSelected ? styles.selected: styles.unselected} ${styles.card_block}`} onClick={()=> handleClick(eachStudent.id)}>
        <img src={eachStudent.avatar} alt="" />
        <h2>{`${eachStudent.first_name} ${eachStudent.last_name}`}</h2>
        <h3>Email : {eachStudent.email}</h3>
    </div>
    </>
    )
}