import styles from './style.module.css'

export const Restaurant =({item}) =>{
    return (
        <>
        <div className={styles.hov} style={{backgroundColor:"rgb(247, 231, 231)", width:"350px", height:"170px", padding:"15px", margin:"5px auto",marginBottom:"20px", border:"1px solid tomato", borderRadius:"5px"}} >
        <div className={styles.parent}>
            <div style={{backgroundSize:"cover"}}><img style={{objectFit:"cover"}} height="100px" width="100px" src={item.image} alt="" /></div>
        <div>
        <div style={{width:"200px"}}>

        <div style={{fontSize:"20px", color:"maroon",fontWeight:"700"}}>{item.restaurantName}</div>
        <div style={{color:"grey"}}>{item.categories.join(", ")}</div>
        <div>Min : {" "} {item.min}</div>
        <div>Cost for One : {" "}{item.cost_for_two}</div>
        <div>Accept : {" "} {item.payment.card ? "Card " : null }{item.payment.upi? "Upi ": null}{item.payment.cash ? "Cash ": null}</div>
        </div>
        </div>
        <div className={styles.rrv}>

        <div style={{border:"1px solid green", backgroundColor:"lightgreen",color:"white", padding:"2px 5px",borderRadius:"4px"}}>{item.rating}</div>
        <div style={{fontSize:"12px", color:"grey"}}>{item.votes} votes</div>
        <div style={{fontSize:"12px", color:"grey"}}>{item.reviews} reviews</div>
        </div>
            </div>
        <button className={styles.b}>Order Online</button>
        </div>
        </>
    )
}