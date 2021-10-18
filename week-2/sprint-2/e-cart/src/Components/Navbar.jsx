export const Navbar = ({count}) =>{
    return(
        <>
        <div style={{display:"flex",width:"60%",margin:"auto", justifyContent:"space-around"}}>

        <h1 style={{textAlign:"center",marginBottom:"50px",color:"red",textDecoration:"underline"}}>E-Cart</h1> 
        <div>
            <div style={{textAlign:"center",borderRadius:"40px",backgroundColor:"ButtonHighlight",marginTop:"5px"}}><strong >{count}</strong></div>
            <img width="40px" height="40px"  src="https://media.istockphoto.com/vectors/shopping-cart-icon-isolated-on-white-background-vector-id1206806317?k=20&m=1206806317&s=170667a&w=0&h=kEh5VLsTHukWc7xf2BvUs8ssqS_d7vkK0-xU3MDpO7s=" alt="" />
            </div>
        </div>
        </>
        ) 
}