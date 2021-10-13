import React from "react"
import styles from './ProductCard.module.css'

export const ProductCard = ({item, handleAdd,handleSubtract}) =>{


    return(
        <>
        <div className={styles.product_block}>
        <div>Product Name : {item.product_name}</div>
        <div>Price : {item.price}</div>
        <div className={styles.quantity}>
           <div>quantity :  </div> <div onClick={() => handleAdd(item.id)} className={styles.plusMinus_block}>+</div>{item.quantity} <div onClick={() =>handleSubtract(item.id)} className={styles.plusMinus_block}>-</div> </div>
        </div>
        </>
    )
}