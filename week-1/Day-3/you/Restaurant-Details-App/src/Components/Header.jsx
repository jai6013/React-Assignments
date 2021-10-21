import styles from './style.module.css'

export const Header = ({setForm,form}) =>{
    return (
        <>
        <div className={styles.header}>

        <div style={{fontWeight:"700"}}>Zomato</div>
        {!form ? <button style={{backgroundColor:'tomato', color:"white", fontSize:"20px",padding:"5px 10px", border: "none", borderRadius:"5px"}} onClick={()=> setForm(true)}>Add restaurant</button>:null}
        </div>
        </>
    )
}