import { Navbar } from "./Navbar"
import { Products } from "./GroceryData"
import data from '../Config/db.json'
import styles from './style.module.css'
import { useState } from "react"

export const HomePage = () =>{
    const [c, setC] = useState(1)
    const handleCount = (count) =>{
        setC(count)
    }
    return (
    <>
    <div style={{backgroundColor:"whitesmoke"}}>

    <Navbar count={c}/>
    </div>
    <div className={styles.g_parent}>

    {
        data.map((item) =>
        <Products item ={item} handleCount={handleCount}/>
        )
    }
    </div>
    </> 
    )
}