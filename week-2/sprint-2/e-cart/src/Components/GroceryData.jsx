import { useState } from "react"
import styles from './style.module.css'

export const Products = (props) =>{
    const {item,handleCount} = props


    const [count,setCount] = useState(1)
    
    return (
        <>
                    <div className={styles.g_block} key={item.id}>
                        <img width="60px" src={item.image_url} alt="nothing" />
                        <div className={styles.pdp}>
                        <div><strong> Product Name :</strong> {item.product_name}</div>
                        <div><strong>Description : </strong>{item.description}</div>
                        <div><strong> Price : </strong>{item.price}</div>
                        </div>
                        <div>

                        <div className={styles.quantity}>
                            <div onClick={()=>{

                                setCount(count+1)
                            
                                handleCount(count + 1)}} >+</div>
                            <div>{count}</div> 
                            {
                                count !== 0 ? 
                                <div onClick={()=>setCount(count-1)}>-</div> : null
                            }  
                        </div>
                            {item.is_available? <button className={styles.hs}>High Stock</button> : <button className={styles.ls}>Low Stock</button>}
                        </div>
                    </div>
            
        </>
    )
}